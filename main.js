function start(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/tQpP6x7a0/model.json",modelLoaded)
}
function modelLoaded(){
    console.log("modelLoaded")
    classifier.classify(gotResult)
}
function gotResult(error,results){
console.log(results)
}