$(document).ready(function(){
    $(window).on('scroll',function(){
        var scroll=$(window).scrollTop();
        if(scroll>=50){
            $(".sticky").addClass("stickyadd");
        }else{
            $(".sticky").removeClass("stickyadd");
        }
    })
})

//Validaton//

function validate(){
    var username = document.getElementById(username);
    var email = document.getElementById(email);
    var subject = document.getElementById(subject);
    var message = document.getElementById(message);

    if(username.value==""){
        alert("please enter your name")
    }
}
document.getElementById("submit-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    fetch(this.action, {
        method: this.method,
        body: new FormData(this)
    })
    .then(function(response) {
        if (response.ok) {
            alert   ('Form Submitted Successfully');
            window.location.reload();
        } else {
            console.error("Form submission failed.");
        }
    })
    .catch(function(error) {
        console.error("Network error:", error);
    });
});