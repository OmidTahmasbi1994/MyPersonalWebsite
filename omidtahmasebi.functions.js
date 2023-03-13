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
    document.getElementById("responsivenav").style.transition="0.7s";
    document.getElementById("responsivenav").style.transitionDelay="0.3s";
    document.getElementById("responsivemenuword").style.visibility="hidden";
    document.getElementById("slides").style.visibility = "hidden";
    document.getElementById("usefullinks").style.visibility = "hidden";

}


function closeresponsivenav()
{
    document.getElementById("responsivenav").style.left="-100%";
    document.getElementById("responsivebar").style.transform="rotateZ(0deg)";
    document.getElementById("responsivemenuword").style.visibility="visible";
    document.getElementById("responsivenav").style.transition="0s";
    document.getElementById("slides").style.visibility = "visible";
    document.getElementById("usefullinks").style.visibility = "visible";
}

var index = 0;
var fade = setInterval(function(){fading()} , 10)
setInterval(function(){slider()} , 4000)


function slider()
{

    var slides = document.getElementById("slides").getElementsByTagName("img")
    ++index;

    if(slides.length == index)
        index = 0;
    
    if(index == 0)
        slides[slides.length-1].style.display = "none";
    else
        slides[index-1].style.display = "none";
        slides[index].style.display="inline";
        slides[index].style.opacity = 1;
        clearInterval(fade)
        fade = setInterval(function(){fading()} , 10)

}
function fading()
{
    var slides = document.getElementById('slides').getElementsByTagName('img')
    var opacity = slides[index].style.opacity >=0 ? slides[index].style.opacity : 1;
    slides[index].style.opacity = opacity-0.0025


}