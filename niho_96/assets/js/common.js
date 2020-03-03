function checkImage(id) {
    document.getElementById(id + "Radio").checked = true;
}

function convertImage() {

    secondFunction();
}

function firstFunction(_callback) {

    _callback();
}

function secondFunction() {
    // call first function and pass in a callback function which
    // first function runs when it has completed
    firstFunction(function () {
        document.getElementById("loader").style.visibility = "visible";
        setTimeout(function () {
            document.getElementById("loader").style.visibility = "hidden";
            var urlSlike = document.getElementById("unesenaSlika").src;
            document.getElementById("dobijenaSlika").src = "./assets/images/slikaProba.jpg";
            document.getElementById("convertText").innerText = "Here is your picture";
            document.getElementById("downloadButton").style.visibility = "visible";
        }, 3000);
    });
}