const video = document.getElementById('video')
const label = document.querySelector(".label")

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
  faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
  faceapi.nets.faceExpressionNet.loadFromUri('/models')
]).then(startVideo)

function startVideo() {
  navigator.getUserMedia = ( navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia);
    
  navigator.getUserMedia(
    { video: {} },
    stream => video.srcObject = stream,
    err => console.error(err)
  )
}

video.addEventListener('play', () => {
  const canvas = faceapi.createCanvasFromMedia(video)
  document.body.append(canvas)
  const displaySize = { width: video.width, height: video.height }
  faceapi.matchDimensions(canvas, displaySize)
  setInterval(async () => {
    const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
    const resizedDetections = faceapi.resizeResults(detections, displaySize)
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
    faceapi.draw.drawDetections(canvas, resizedDetections)
    faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
    
    console.log(arraySorting( resizedDetections[0].expressions))


     label.innerHTML = arraySorting( resizedDetections[0].expressions)[1]

    function arraySorting(array){
     
      let newArray = [
        [
          [array.angry],"angry"
        ],
        [
          [array.disgusted],"disgusted"
        ],
      
        [
          [array.happy],"happy"
        ],
        [
          [array.neutral],"neutral"
        ],
        [
          [array.sad],"sad"
        ],
        [
          [array.surprised],"suprised"
        ],
      ]

      return newArray.sort()[5]
    }
  }, 100)
})

