from langchain_community.document_loaders import PyPDFLoader, DirectoryLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_community.vectorstores import FAISS

from dotenv import load_dotenv, find_dotenv
import time

# Ensure the environment variable is loaded
load_dotenv(find_dotenv())

# Step 1 : Load raw data

DATA_PATH = 'data/'

def load_pdf_files(data):
    print("Loading PDF files...")
    loader = DirectoryLoader(data,
                             glob='*.pdf',
                             loader_cls=PyPDFLoader)
    start_time = time.time()
    documents = loader.load()
    end_time = time.time()
    print(f"Loaded {len(documents)} documents in {end_time - start_time:.2f} seconds.")
    return documents

# Process only the first PDF file for testing
documents = load_pdf_files(data=DATA_PATH)[:1]

# Step 2 : Create Chunks

def create_chunks(extracted_data):
    print("Creating text chunks...")
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=500,
                                                   chunk_overlap=50)
    start_time = time.time()
    text_chunks = text_splitter.split_documents(extracted_data)
    end_time = time.time()
    print(f"Created {len(text_chunks)} text chunks in {end_time - start_time:.2f} seconds.")
    return text_chunks

text_chunks = create_chunks(extracted_data=documents)

# Step 3 : Create vector embeddings

def get_embedding_model():
    print("Loading embedding model...")
    embedding_model = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
    return embedding_model

embedding_model = get_embedding_model()

# Step 4 : Store the embeddings in the FAISS

DB_FAISS_PATH = "vectorstore/db_faiss"
print("Storing embeddings in FAISS...")
start_time = time.time()
db = FAISS.from_documents(text_chunks, embedding_model)
db.save_local(DB_FAISS_PATH)
end_time = time.time()
print(f"Embeddings stored successfully in {end_time - start_time:.2f} seconds.")