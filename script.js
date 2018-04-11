var queryText = document.querySelector("#textinputid").addEventListener("input", function(event) {
    const buttonElement = document.querySelector("#buttonid");
    const userInput = event.target.value;

    buttonElement.style.backgroundColor = userInput.toLowerCase() === "electric mucus";

    buttonElement.style.backgroundColor = isCorrect ? "green" : userInput;
    buttonElement.disabled = !isCorrect;
});
