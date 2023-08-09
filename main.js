canvas=document.getElementById("can")
ctx=canvas.getContext('2d')

var mouse_event="empty" 
var last_position_of_x, last_position_of_y
var my_color="black"
var width_of_line=3

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
mouse_event="mouseDown"    
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
mouse_event="mouseUp"
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
mouse_event="mouseLeave"
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){

        current_position_of_x=e.clientX-canvas.offsetLeft
        current_position_of_y=e.clientY-canvas.offsetTop

        if(mouse_event=="mouseDown"){
            ctx.beginPath()
            ctx.strokeStyle=my_color
            ctx.lineWidth=width_of_line
            ctx.arc(current_position_of_x, current_position_of_y, 25, 0, 2*Math.PI)
            
            ctx.stroke()
        }

        last_position_of_x= current_position_of_x
        last_position_of_y= current_position_of_y
}