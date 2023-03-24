img = "";
Status = "";
objects = [];

function preload() {
    img = loadImage('basket.png');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.position(370, 220);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    Status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(erroe);
    }
    console.log(results);
    objects = results;
}

function draw() {
    image(img, 0, 0, 640, 420);
    if (Status != "") {
        for (i = 0; i<objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Objects Detected";
            fill("FF0000");
            percent = floor(object[i].confidence * 100);
            text(object[i].label + " " + percent + "%", object[i].x + 15, object[i].y + 15);
            noFill();
            stroke("FF0000");
            rect(object[i].x, object[i].y, object[i].width, object[i].height)
        }
    }
}
