function boton() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/NxI4xmcsq/model.json", modelReady);
}

function modelReady() {
    classifier.classify(gotResult);
}

function gotResult(error,igual) {
    r = Math.floor(Math.random()*255)+1;
    g = Math.floor(Math.random()*255)+1;
    b = Math.floor(Math.random()*255)+1;
    document.getElementById("sescucho").innerHTML = "Se escucha" + igual[0].label;
    document.getElementById("omun").innerHTML = "La seguridad es de" + (igual[0].confidence*100).toFixed(2)+" %";
    document.getElementById("sescucho").style.color = "rgb("+r+","+g+","+b+")";
    document.getElementById("omun").style.color = "rgb("+r+","+g+","+b+")";
    img = document.getElementById("alin1");
    img1 = document.getElementById("alin2");
    img2 = document.getElementById("alin3");
    img3 = document.getElementById("alin4");

    if (igual[0].label == "Chocolate") {
        img.src = "aliens-01.gif";
        img1.src="aliens-02.png";
        img2.src= "aliens-03.png";
        img3.src="aliens-04.png";
    } else if (igual[0].label == "Hola") {
        img.src = "aliens-01.png";
        img1.src="aliens-02.gif";
        img2.src= "aliens-03.png";
        img3.src="aliens-04.png";
    } else if (igual[0].label == "Perro") {
        img.src = "aliens-01.png";
        img1.src="aliens-02.png";
        img2.src= "aliens-03.gif";
        img3.src="aliens-04.png";
    } else if (igual[0].label == "Ruido de fondo") {
        img.src = "aliens-01.png";
        img1.src="aliens-02.png";
        img2.src= "aliens-03.png";
        img3.src="aliens-04.gif";
    } 
}