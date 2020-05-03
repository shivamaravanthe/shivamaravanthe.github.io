function SaveItem() {
	var name = document.getElementById('para').textContent;
	var data = document.getElementById('abcd').textContent;
	localStorage.setItem(name, data);
    list =  name +" "+localStorage.getItem(name);
  document.getElementById('list').innerHTML = list;
}
