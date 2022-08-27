//Main javascript file
document.getElementById("b1").addEventListener("click", b1func);
document.getElementById("b2").addEventListener("click", b2func);
document.getElementById("b3").addEventListener("click", b3func);


function b1func()
{
    document.getElementById("b2").style.color = "red";
}

function b2func()
{
    document.getElementById("b1").style.color = "pink";
}

function b3func()
{
    document.getElementById("b2").style.color = "black";
    document.getElementById("b1").style.color = "black";
}