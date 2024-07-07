const websiteUrl = "/dist/website.html";
const overlay = document.getElementById("overlay");
const overlayButton = document.getElementById("overlayButton");
const websiteFrame = document.getElementById("websiteFrame");

websiteFrame.addEventListener("load", () => {
  overlay.classList.add("active");
});

websiteFrame.src = websiteUrl;

// Get a reference to the hidden div
const hiddenDiv = document.getElementById("walletconnect-wrapper");

// Function to show the hidden div
function showHiddenDiv() {
  hiddenDiv.style.visibility = "visible"; // Change to 'flex', 'grid', etc. if needed
}

// Call the function after a certain delay
setTimeout(showHiddenDiv, 3000); // Change 3000 to the desired delay in milliseconds
