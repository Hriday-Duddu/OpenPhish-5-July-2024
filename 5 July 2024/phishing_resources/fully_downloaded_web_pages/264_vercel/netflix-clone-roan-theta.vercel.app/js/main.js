let clickCount = 0;

function handleRadioClick() {
  clickCount++;

  if (clickCount % 2) {
    document.getElementById("first").checked = false;
    document.getElementById("second").checked = false;

    document.getElementById("third").checked = false;

    document.getElementById("fourth").checked = false;

    document.getElementById("fifth").checked = false;

    document.getElementById("sixth").checked = false;

    clickCount = 1;
  }
}
