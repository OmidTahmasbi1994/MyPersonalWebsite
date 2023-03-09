function opennav()
{
    document.getElementById("mysidenav").style.left="0px";
    document.getElementById("bar").style.visibility="hidden";
}


function closenav()
{
    document.getElementById("mysidenav").style.left="-100%";
    document.getElementById("bar").style.visibility="visible";
}


function openresponsivenav()
{
    document.getElementById("responsivenav").style.left="0px";
    document.getElementById("responsivebar").style.transform="rotateZ(90deg)";
    document.getElementById("responsivebar").style.transition="0.3s";
    document.getElementById("responsivemenuword").style.visibility="hidden";

}


function closeresponsivenav()
{
    document.getElementById("responsivenav").style.left="-100%";
    document.getElementById("responsivebar").style.transform="rotateZ(0deg)";
    document.getElementById("responsivemenuword").style.visibility="visible";
}