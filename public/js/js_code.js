window.onload = function(){
    document.querySelector(".menumobile").addEventListener("click", function(){
        if(document.querySelector(".menu nav ul").style.display == 'flex'){
            document.querySelector(".menu nav ul").style.display ='none'
        } else {
            document.querySelector(".menu nav ul").style.display = 'flex'
        }
    })
}


$(document).ready(function(){
    $('.login-info-box').fadeOut();
    $('.login-show').addClass('show-log-panel');
});



