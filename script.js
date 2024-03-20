const input = document.querySelector("input");
const img = document.querySelector("img");
let API_URL = '';

function handleKeyPress(event) {
  if (event.keyCode === 13) { // Check if the key pressed is Enter key
    applyQRCode(); // Call your function here
  }
}

function applyQRCode() {
    API_URL = `https://api.qrserver.com/v1/create-qr-code/?data=${input.value}&amp;size=200x200&bgcolor=A1CCA5&color=111D13&qzone=1`;
    img.src = API_URL;
    img.style.display = "block";
}