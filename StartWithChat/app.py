from flask import Flask, request, render_template, jsonify
from langchain_huggingface import HuggingFaceEndpoint
from langchain_core.prompts import PromptTemplate
from langchain.chains import RetrievalQA
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_community.vectorstores import FAISS
import os
from dotenv import load_dotenv, find_dotenv

app = Flask(__name__)

# Load environment variables
load_dotenv(find_dotenv())
HF_TOKEN = os.environ.get("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")
if not HF_TOKEN:
    raise ValueError("Hugging Face token not found in environment variables")

# Set up LLM (Mistral with Hugging Face)
huggingface_repo_id = "mistralai/Mistral-7B-Instruct-v0.3"

def load_llm(huggingface_repo_id):
    llm = HuggingFaceEndpoint(
        repo_id=huggingface_repo_id,
        task="text-generation",  # Specify the task explicitly
        temperature=0.5,
        model_kwargs={"token": HF_TOKEN,
                      "max_length": 150}  # Adjusted max_length to avoid repetitive responses
    )
    return llm

# Custom prompt template
custom_prompt_template = """
Use the pieces of information provided in the context to answer user's question.
If you don't know the answer, just say that you don't know, don't try to make up an answer. 
Don't provide anything out of the given context.

Context: {context}
Question: {question}

If the question is not related to health, respond with "I am very sorry, I don't know this answer, please ask me questions related to health."

Start the answer directly. No small talk please.
"""

def set_custom_prompt(custom_prompt_template):
    prompt = PromptTemplate(template=custom_prompt_template, input_variables=["context", "question"])  # Fixed input variable name
    return prompt

# Load Database
DB_FAISS_PATH = "vectorstore/db_faiss"
embedding_model = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
db = FAISS.load_local(DB_FAISS_PATH, embedding_model, allow_dangerous_deserialization=True)

# Create QA chain
qa_chain = RetrievalQA.from_chain_type(
    llm=load_llm(huggingface_repo_id),
    chain_type="stuff",
    retriever=db.as_retriever(search_kwargs={'k': 3}),
    return_source_documents=True,
    chain_type_kwargs={'prompt': set_custom_prompt(custom_prompt_template)}
)

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        user_query = request.form["query"]
        response = qa_chain.invoke({'query': user_query})
        result = response["result"]
        if "I am very sorry, I don't know this answer, please ask me questions related to health." not in result:
            result = "I am very sorry, I don't know this answer, please ask me questions related to health."
        print("RESULT: ", result)  # Print result to terminal
        return render_template("index.html", query=user_query, result=result)
    return render_template("index.html", query="", result="")

@app.route("/api/chat", methods=["POST"])
def chat():
    data = request.json
    user_query = data.get("query")
    response = qa_chain.invoke({'query': user_query})
    result = response["result"]
    return jsonify({"result": result})

if __name__ == "__main__":
    app.run(debug=True)
