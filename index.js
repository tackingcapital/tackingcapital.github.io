// Call this to show pass input field
function show_pass() {
    document.getElementById("pass").style.display = "block";
    document.getElementById("pass").focus();
    document.getElementById("pitchdeck").style.display = "none";
}

window.onload = (event) => {
    console.log('page is fully loaded');

    // Register event that pressing return submits password
    var input = document.getElementById("pass");
    input.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            console.log('pressed return');
            pass_submit();
        }
    });

    // Call this when pass input is submitted
    function pass_submit() {
        const pass_input = document.getElementById("pass");
        console.log(pass_input);
        if (pass_input.value == "password") {
            console.log("pass ok");
            pass_input.style.backgroundColor = "#ffffff";
            document.location.href = "./intro.html";
        }
        else {
            console.error("pass not okay!");
            pass_input.style.backgroundColor = "#ffeeee";
            // pass_input.style.border = "2px solid #ff0000";
            pass_input.value = "";
        }
    }

};