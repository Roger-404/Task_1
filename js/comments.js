function sendComment() {
  (popupWindow.style.display = "block"),
    setTimeout(function () {
      (textArea.value = ""),
        null !== nameInput && (nameInput.value = ""),
        (popupWindow.style.display = "none"),
        counter++;
    }, 3e3);
}
function errorInput(elem) {
  return (
    (elem.style.borderColor = "#ec3535"),
    setTimeout(function () {
      elem.style.borderColor = "#dddfe2";
    }, 2e3),
    console.log(elem + "Error: length 0"),
    !1
  );
}
function getInputLength(input) {
  return null === input || input.value.length > 1 || errorInput(input);
  var result;
}
var button = document.getElementById("sendCommentButt"),
  popupWindow = document.querySelector(".my-own-popup-window"),
  textArea = document.getElementById("userText"),
  nameInput = document.querySelector('input[name="commName"]'),
  counter = 1;
button.addEventListener("click", function (event) {
  event.preventDefault(),
    "hidden" == nameInput.getAttribute("type")
      ? getInputLength(textArea) && 1 == counter && sendComment()
      : getInputLength(nameInput) &&
        getInputLength(textArea) &&
        1 == counter &&
        sendComment();
});
var textarea = document.getElementsByTagName("textarea")[0];
function resize() {
  var el = this;
  setTimeout(function () {
    (el.style.cssText = "height:auto;"),
      (el.style.cssText = "height:" + el.scrollHeight + "px");
  }, 1);
}
textarea.addEventListener("keydown", resize);
