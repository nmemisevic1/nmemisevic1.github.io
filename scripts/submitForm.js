var messages = firebase.database().ref('Messages');
function submitForm(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if(validateText(name) && validateText(message) && validateEmail(email)){
        var newMessage = messages.push();
        newMessage.set({
            Name: name,
            Email: email,
            Message: message
        })
        console.log(name);
        console.log(email);
        console.log(message);
        document.getElementById("success").classList.add("expand");
    }
    
    //$('#success').addClass('expand');
}
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function validateText(text){
    return text.length != 0;
}