Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    image_quality:'90'
});

  camera = document.getElementById("#camera");

  Webcam.attach('#camera');

  function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
  }

  console.log('ml5',ml5.version);

  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/VE8vRNxx_/model.json',modelLoaded);
  function modelLoaded() {
    console.log("Model Loaded!")
  }


function check() {
  img = document.getElementById("captured_image");
  classifier.classify(img, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  } else{
    console.log(results);
    document.getElementById("result_face_name").innerHTML = results[0].label;
    Prediction = results[0].label


    speak();

    if (results[0].label == "Class 1" ) {
      document.getElementById("update_face").innerHTML = "<h1>Amazing</h1>" ;
    } 
    if (results[0].label =="Class 2") {
      document.getElementById("update_face").innerHTML = "<h1>Best</h1>" ;
    }
    if (results[0].label =="Class 3") {
      document.getElementById("update_face").innerHTML = "<h1>Victory</h1>" ;
    }
    } 

  }
8