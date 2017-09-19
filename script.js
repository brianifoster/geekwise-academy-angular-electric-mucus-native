window.document.getElementById("textinputid").addEventListener("input", function (event) {
	const button = document.getElementById("buttonid");
	const userInput = event.target.value;

	button.style.backgroundColor = 'electric mucus' === userInput.toLowerCase() ? 'aquamarine ' : userInput;
	button.disabled = 'electric mucus' !== userInput.toLowerCase();
});
