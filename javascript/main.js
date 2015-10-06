// Display current time

var d, h, m, s, color;
function displayTime() {
  d = new Date();
  h = d.getHours();
  m = d.getMinutes();
  s = d.getSeconds();

// Add leading zeros
if(h <= 9) h = '0' + h;
if(m <= 9) h = '0' + m;
if(s <= 9) h = '0' + s;

// Display string
color = "#" + h + m + s;

// Create background color
document.body.style.background = color;

// Set time
document.getElementById("hex").innerHTML = color;

// Call time every second
setTimeout(displayTime, 1000);

}

// Call the function
displayTime();