function sendMail(parms){
    var tempParams = {

        user_name: document.getElementById("user_name").value,
        user_subject: document.getElementById("user_subject").value,
        user_email: document.getElementById("user_email").value,
        message: document.getElementById("message").value,
    
    }

    emailjs.send('service_aenq456','template_8s8izh5', tempParams ).then(function(res){
        console.log('success ', res.status)
       
    });
}