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
function checknamew() {
  var name = prompt("Please enter your Name", " ");
  //var name=document.getElementById("custname").value;
  if(name=='')alert("ನಿಮ್ಮ ಹೆಸರನ್ನು ನಮೂದಿಸಿ");
    else{
    var formated=BilltoSend(name);
    window.open('https://wa.me/918660537925?text='+formated);
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
            for(var j = 0 ; j < textWithNBSpaceReplaced.length ; j++){
              if( textWithNBSpaceReplaced[j] == array[i][j] || textWithNBSpaceReplaced[j].charCodeAt() == 32 ){
              cd = i; if(j == textWithNBSpaceReplaced.length-1){break;i=array.length;}}
              else{cd='';}
            }
            }

      }
      
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
