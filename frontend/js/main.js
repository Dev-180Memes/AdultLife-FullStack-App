document.getElementById("send").addEventListener("click", validateForm);
function validateForm() {
  //gets the Title
  let title = document.getElementById("rtitle").value;
  //gets the message
  let message = document.getElementById("report").value;

  //checks if all fields have been filled before sending message.
  if (title.trim() == "" || message.trim() == "") {
    alert("all fields must be filled");
  } else {
    sendMessage(title, message);
  }
}

// sends information to firebase
function sendMessage(title, message) {
	//sends the title and message by passing them as url parameters
	window.location.href = 
		"http://localhost:5000/adultlife-48125/us-central1/sendMail?title=" +
		name +
		"&message=" +
		message +
		" ";
}
