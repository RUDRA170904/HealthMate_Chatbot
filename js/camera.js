document.getElementById('camera-access').addEventListener('click', function() {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            const video = document.createElement('video');
            video.srcObject = stream;
            video.play();
            document.body.appendChild(video);
        })
        .catch(function(err) {
            console.error('Error accessing camera: ', err);
        });
});
