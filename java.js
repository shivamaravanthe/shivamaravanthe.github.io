function intialize(){
    displaycount();
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

   if (isIOSChrome){}// is Google Chrome on IOS
    else if(isChromium !== null && typeof isChromium !== "undefined" && vendorName === "Google Inc." && isOpera === false && isIEedge === false){}
    else {
          alert("Best Experience is Obtained in Google Chrome");
    }
}
function displaycount() {
  var a=localStorage.getItem("AddedDirectly");
if(a!=null){
  a=JSON.parse(a);
  if(a[0]==0){
    document.getElementById("NoItemsAdded").innerHTML=a.length-1;
  }
  else {
    document.getElementById("NoItemsAdded").innerHTML=a.length;
  }}
}
