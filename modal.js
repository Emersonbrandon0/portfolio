var modal = document.getElementById('openModal');
var span = document.getElementsByClassName("close")[0];
var submitButton = document.getElementById("button");
var destination = document.getElementById("destination");

span.onclick = function() {
    modal.style.display = "none";
}
submitButton.onclick = function() {
	destination.innerHTML="Thank you for submitting");

}