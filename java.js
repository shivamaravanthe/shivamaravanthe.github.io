function clean() {
  localStorage.clear();
}
function showItems() {
var retrievedData=localStorage.getItem("AddedDirectly");
array=JSON.parse(retrievedData);
if(array==null)array=["0"];
for (var i = 1; i <=array.length; i++) {
  var li = document.createElement("li");
  var inputValue = array[i]
  if(inputValue==null)continue;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  document.getElementById("myUL").appendChild(li);
  //document.getElementById("myInput").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  for (var j = 0; j < close.length; j++) {
    close[j].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

for (var i = 1; i < 10; i++) {
var li = document.createElement("li");
var inputValue = localStorage.getItem(i);
if(inputValue==null)continue;
var t = document.createTextNode(inputValue);
li.appendChild(t);
document.getElementById("myUL").appendChild(li);
document.getElementById("myInput").value = "";
var span = document.createElement("SPAN");
var txt = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(txt);
li.appendChild(span);
for (var j = 0; j < close.length; j++) {
  close[j].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
}
}

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
// Create a new list item when clicking on the "Add" button
function newElement() {
  var array=["0"];
  var alpha = /^[A-Za-z]+$/;
  var inputValue = document.getElementById("myInput").value;
  var prodname = document.getElementById("prodname").value;
  var text=prodname+" "+inputValue;
  var li = document.createElement("li");
  var t = document.createTextNode(text);
  li.appendChild(t);
  if (prodname == '') {
    alert("ಎಂತ ಬೇಕು ಅಂತ  ಹಾಕಿಲ್ಲ");
  }
  else if (inputValue === '') {
    alert(prodname+" "+"ಎಷ್ಟು ಬೇಕು ಅಂತ ಹಾಕ್..");
  }
  else {
    document.getElementById("myUL").appendChild(li);
    var retrievedData=localStorage.getItem("AddedDirectly");
    array=JSON.parse(retrievedData);
    if(array==null)array=["0"];
    array.push(text);
    localStorage.setItem("AddedDirectly",JSON.stringify(array));
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  //alert(array.length);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}





function intialize() {
  if (typeof(Storage) !== "undefined") {
  } else {
     alert("PLEASE open in Google Chrome");
  }
  // please note,
  // that IE11 now returns undefined again for window.chrome
  // and new Opera 30 outputs true for window.chrome
  // but needs to check if window.opr is not undefined
  // and new IE Edge outputs to true now for window.chrome
  // and if not iOS Chrome check
  // so use the below updated condition
  var isChromium = window.chrome;
  var winNav = window.navigator;
  var vendorName = winNav.vendor;
  var isOpera = typeof window.opr !== "undefined";
  var isIEedge = winNav.userAgent.indexOf("Edge") > -1;
  var isIOSChrome = winNav.userAgent.match("CriOS");

  if (isIOSChrome) {
     // is Google Chrome on IOS
  } else if(
    isChromium !== null &&
    typeof isChromium !== "undefined" &&
    vendorName === "Google Inc." &&
    isOpera === false &&
    isIEedge === false
  ) {
     // is Google Chrome
  } else {
     alert("pls open in Google Chrome");
  }
}
function displaycontent(a) {
  var content=document.getElementById(a);
if (content.style.display === "flex") {
  content.style.display = "none";
} else {
  content.style.display = "flex";
}
for (var j = 1; j <=document.getElementsByClassName("card").length; j++) {
  var nocontent=document.getElementById(j);
  if (a!==j) {
    nocontent.style.display = "none";
  }else {
    nocontent.style.display = "flex";
  }
}
}
function calprice(p,j) {
  var x = document.querySelectorAll("p");
  var y = document.querySelectorAll("input");
  var z = x.length-1;
  for (var i = 1; i <= z ; i++) {
    if(i==j)
        x[i].innerHTML = "₹"+p*y[i-1].value;
  }
}
function submit(a) {
  var name=document.getElementsByClassName("pname");
  name=name[a-1].innerHTML;
  var price=document.getElementsByClassName("price");
  price=price[a-1].innerHTML;
  var quantity=document.getElementsByName("quantity");
  quantity=quantity[a-1].value;
  var value=name+'      '+quantity+'       '+price;
  localStorage.setItem(a,value);
  var slideSource = document.getElementById('bag');
  slideSource.classList.toggle('fade');
  setTimeout(fadeOut, 500);
}
function fadeOut() {
  var slideSource = document.getElementById('bag');
  slideSource.classList.toggle('fade');
}
function checknamew() {
  var name=document.getElementById("custname").value;
  if(name=='')alert("'ನಿಮ್ಮ ಹೆಸರ'ನ್ನು ನಮೂದಿಸಿ");
  else window.open('https://wa.me/918660537925?text=Im%20interested%20in%20your%20car%20for%20sale');
}
function checknamee() {
  var name=document.getElementById("custname").value;
  if(name=='')alert("'ನಿಮ್ಮ ಹೆಸರ'ನ್ನು ನಮೂದಿಸಿ");
  else window.open('mailto:somepoorswine@poomail.poo?Subject=Summat%20or%20Other&body=I%20Have%20been%20%20%20for%20a%20massive%20%20%20%20%20%20%20poo');
}
