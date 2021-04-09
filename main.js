nose_x=0;
nose_y=0;
left_x=0;
right_x=0;
difference=0;


function setup(){

    canvas=createCanvas(500,400);
    canvas.position(600,130);
    
video=createCapture(VIDEO);
video.size(550,500);



poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function draw(){
background('#92998e');

document.getElementById("square_side").innerHTML="the side of the square="+difference+"px";

fill('#e008fc');
stroke('#e008fc');
square(nose_x,nose_y,difference)

}

function modelLoaded(){
    console.log("poseNet is loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
      nose_x=results[0].pose.nose.x;
      nose_y=results[0].pose.nose.y;

      console.log("nose y="+nose_y+"  "+"nose x="+nose_x);

      left_x=results[0].pose.leftWrist.x;
      right_x=results[0].pose.rightWrist.x;
      difference=floor(left_x-right_x);
      console.log("left x="+left_x+"  "+"right x="+right_x+"  "+"difference="+difference);

    }
}