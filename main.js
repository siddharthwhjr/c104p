camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:320,
    image_format:"png",
    jpeg_quality:100
});
Webcam.attach(camera);
function take_snapshot(){
    Webcam.set(function (data_uri){
        document.getElementById("result").innerHTML = "<img id='captured_image' src ="+data_uri+">";
    });
}

console.log("ml5 version: ", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Wlp9JRzKt/", modelloaded);
function modelloaded(){
    console.log("model loaded")
}
