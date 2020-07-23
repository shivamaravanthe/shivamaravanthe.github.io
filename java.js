// Create a new list item when clicking on the "Add" button
function newElement() {
  var array=["0"];
  var inputValue = document.getElementById("myInput").value;
  var prodname = document.getElementById("prodname").value;
  var text=prodname+Array(25).fill('\xa0').join('')+inputValue+Array(15).fill('\xa0').join('')+'₹--';
  var li = document.createElement("li");
  var t = document.createTextNode(text);
  li.appendChild(t);
  if (prodname == '') {
    alert(inputValue+" "+"ಎಂತ ಬೇಕು ಅಂತ  ಹಾಕಿಲ್ಲ");
    }
    else if (inputValue === '') {
      alert(prodname+" "+"ಎಷ್ಟು ಬೇಕು ಅಂತ ಹಾಕಿಲ್ಲ..");
    }
    else {
      document.getElementById("myUL").appendChild(li);
      var retrievedData=localStorage.getItem("AddedDirectly");
      array=JSON.parse(retrievedData);
      if(array==null)array=["0"];
      array.push(text);
      localStorage.setItem("AddedDirectly",JSON.stringify(array));
      document.getElementById("myInput").value = "";
      document.getElementById("prodname").value="";
  }

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("X");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  CalculateTotal();
  Gohere();

}
function showItems() {

    var retrievedData=localStorage.getItem("AddedDirectly");
    array=JSON.parse(retrievedData);
    if(array==null)array=['0'];
    for (var i = 0; i <=array.length; i++) {
    var li = document.createElement("li");
    var inputValue = array[i];
    if( inputValue == null || inputValue == ''||inputValue == '0')continue;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    document.getElementById("myUL").appendChild(li);
    document.getElementById("myInput").value = "";
    document.getElementById("prodname").value="";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("X");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    }
    /*Calculate Total*/
    CalculateTotal();
    Gohere();
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
  var value=name+Array(25).fill('\xa0').join('')+quantity+Array(15).fill('\xa0').join('')+price;
  var array=["0"];
  var retrievedData=localStorage.getItem("AddedDirectly");
  array=JSON.parse(retrievedData);
  if(array==null)array=["0"];
  array.push(value);
  localStorage.setItem("AddedDirectly",JSON.stringify(array));
  var price=document.getElementsByClassName("price");
  price[a-1].innerHTML="₹0";
  var x = document.querySelectorAll("p");
  var y = document.querySelectorAll("input");
  var z = x.length-1;
  for (var i = 1; i <= z ; i++) {
    if(i==a)
        y[i-1].value='';
  }
  var slideSource = document.getElementById('bag');
  slideSource.classList.toggle('fade');
  setTimeout(fadeOut, 500);
}
function fadeOut() {
  var slideSource = document.getElementById('bag');
  slideSource.classList.toggle('fade');
  displaycount();
}
function checknamew() {
  var name = prompt("Please enter your Name", " ");
  //var name=document.getElementById("custname").value;
  if(name=='')alert("ನಿಮ್ಮ ಹೆಸರನ್ನು ನಮೂದಿಸಿ");
    else{
    var formated=BilltoSend(name);
    window.open('https://wa.me/918660537925?text='+formated);
      }
}
function displaycontent(a){
  var content=document.getElementById(a);
  if (content.style.display === "flex" ) {
    content.style.display = "none";
  }else {
  content.style.display = "flex";
  }
  for (var j = 1; j <=document.getElementsByClassName("card").length; j++) {
    var nocontent=document.getElementById(j);
    if (a!=j) {
      nocontent.style.display = "none";
    }else {
      nocontent.style.display = "flex";
    }
  }
}
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
          alert("Best View is Obtained in Google Chrome");
    }
}
function BilltoSend(name){
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var today  = new Date();
  var x=document.getElementById('myUL');
  str = x.innerHTML;
  var array=[];
  var open=0,amp=0,text='';
  for (var i = 0; i < str.length; i++){
    if(str[i]=='<'){open=1;}
    if(str[i]=='&'){amp=1;}
    if(open==0&&amp==0){text=text+str[i];}
    if(str[i]=='>'){open=0;}
    if(amp==1){if(!(isNaN(str[i+1]))){amp=0;text=text+'₹';}else if (str[i+1] == '₹') {amp=0;}}
    }
    var formated="Name:"+name+"%09%09%09%09"+today.toLocaleDateString("en-US", options)+"%0A%0A";
    open=0,amp=0;
  for (var i = 3; i < text.length; i++ ){
    if(text[i]=="X"&&amp==2){
      amp=0;
      open=1;
      formated=formated+"%0A";
    }
    if(text[i]=="₹"&&amp==1){
      amp=2;
      formated=formated+"%20%20%20%20"+'₹';
    }
    if(text[i]=="₹"&&amp==0){
      amp=1;
      formated=formated+"%20%20%20%20";
      }
    if(text[i]!="₹"&&open!=1){
      formated=formated+text[i];
    }
    if(open=1){open=0;}
  }
  formated=formated+"%0a"+document.getElementById("GrandTotal").innerHTML;
  return formated;
}
function CalculateTotal(){
  var x=document.getElementById('myUL');
  str = x.innerHTML;
  var array=[];
  var open=0,amp=0,text='';
  for (var i = 0; i < str.length; i++){
    if(str[i]=='<'){open=1;}
    if(str[i]=='&'){amp=1;}
    if(open==0&&amp==0){text=text+str[i];}
    if(str[i]=='>'){open=0;}
    if(amp==1){if(!(isNaN(str[i+1]))){amp=0;text=text+'₹';}else if (str[i+1] == '₹') {amp=0;}}
    }
    var number='',snum=0;
    var totalP=0;
    open=0,amp=0;
  for (var i = 3; i < text.length; i++ ){
    if(text[i]=="X"&&amp==2){
      amp=0;
      open=1;
      snum=0;
      if(number!='')
      totalP=totalP+parseFloat(number);
      number='';
    }
    if(text[i]=="₹"&&amp==1){
      amp=2;snum=1;
    }
    if(text[i]=="₹"&&amp==0){
      amp=1;
      }
      if(text[i]!='-'&&text[i]!="₹"&&snum==1){
      number=number+text[i];
    }
    if(open=1){open=0;}
  }
  document.getElementById("GrandTotal").innerHTML='Total:-'+totalP;
}
function Gohere(){
  var close = document.getElementsByClassName("close");
  for (var j = 0; j < close.length; j++) {
    close[j].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      var del=div.innerHTML;
      del=del.toString();
      var delarray=[]
      delarray=del.split('<span class="close">X</span>');
      del=delarray[0];
      var textWithNBSpaceReplaced = del.replace(/&nbsp;/g, ' ');
      var retrievedData=localStorage.getItem("AddedDirectly");
      array=JSON.parse(retrievedData);
      if(array==null||array=='')array=['0'];
      var cd=0;
      textWithNBSpaceReplaced = textWithNBSpaceReplaced.split("");
      var textLen = textWithNBSpaceReplaced.length;
      for(var i = 0 ; i<array.length; i++ ){
         if(textLen == array[i].length){
            for(var j = 0 ; j < textWithNBSpaceReplaced.length ; j++){console.log(array[i][j],textWithNBSpaceReplaced[j]);
              if( textWithNBSpaceReplaced[j] == array[i][j] || textWithNBSpaceReplaced[j].charCodeAt() == 32 ){
              cd = i; if(j == textWithNBSpaceReplaced.length-1){break;i=array.length;}}
              else{cd='';}
            }
            }

      }
      console.log(cd);
    localStorage.removeItem("AddedDirectly");
    if(array==null||array=='')index = -1;
    const index = array.indexOf(array[cd]);
    if (index > -1) {
      array.splice(index, 1);
    }
    localStorage.setItem("AddedDirectly",JSON.stringify(array));
    var close = document.getElementById("myUL");
    close.style.display = "none";
    if(close.style.display=="none"){
      location.reload();
      close.style.display = "block";}
    //showItems();
      }
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

/*function clean() {
  localStorage.clear();
}*/
/*function checknamee() {
   var name=document.getElementById("custname").value;
   if(name=='')alert("ನಿಮ್ಮ ಹೆಸರನ್ನು ನಮೂದಿಸಿ");
   else{
     var formated=BilltoSend();
     window.open('mailto:vshivanand2@gmail.com?Subject=Bill&body='+formated);
     }

}*/
