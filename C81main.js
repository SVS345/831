canvas =document.getElementById("jj");
ctx=canvas.getContext("2d");
color="blue";
width=2;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    console.log(mouse_x,mouse_y);
    circle(mouse_x,mouse_y);
}
function circle (mouse_x,mouse_y){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.arc(mouse_x,mouse_y,60,0,2*Math.PI);
    ctx.stroke();
}