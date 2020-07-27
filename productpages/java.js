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
