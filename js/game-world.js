window.addEventListener("DOMContentLoaded", () => {
  var socket = io("http://benlantaff.com:8001");
  let user = JSON.parse(localStorage.getItem("user"));
  if (user === null) {
  }
  let username = user === null ? "ghost" : user.name;

  var messages = document.getElementById("messages");
  var form = document.getElementById("form");
  var input = document.getElementById("input");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (input.value) {
      socket.emit("chat message", username + ":  " + input.value);
      input.value = "";
    }
  });

  socket.on("chat message", function (msg) {
    var item = document.createElement("li");
    item.style.color = "#55c57a";
    item.textContent = msg;
    messages.insertBefore(item, messages.firstChild);
  });
});
