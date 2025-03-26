alert("Welcome to own build facebook clone webpage.😊")
document.getElementById("input1").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent default behavior (form submission)
    document.getElementById("input2").focus(); // Shift focus to the second input
  }
});
  document.getElementById("input2").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent default behavior (form submission)
      document.getElementById("button").focus(); // Shift focus to the second input
    }
  });