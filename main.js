musicx = "";
musicy = "";
leftwristx = "";
rightwristy = "";
leftwristy = "";
rightwristy = "";
function preload(){
    song = loadSound("music2.mp3");
    song1 = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(550,550);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet =  ml5.poseNet(video,modelLoaaded);
}
function modelLoaaded(){
    console.log = "posenet is instalized"
    poseNet.on  ('pose', gotposes);
}
function gotposes(){
    if(results.length>0){
        leftwristx = results[0].pose.leftwrist.x
        leftwristy = results[0].pose.leftwrist.y
        console.log("leftwristx = "+leftwristx+"leftwristy"+leftwristy);
        rightwristx = results[0].pose.rightwrist.x
        rightwristy = results[0].pose.rightwrist.y
        console.log("rightwristx = "+rightwristx+"rightwristy"+rightwristy);
    }
}
function draw(){
image(video,0,0,600,500);
}