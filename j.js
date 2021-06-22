function addTask () {
    var input = document.getElementById("input");
    var newTask = input.value;
    if (newTask != "") {
        var item = document.createElement("li");
        item.innerHTML = '<input type="button" class="done" onclick="markDone(this.parentNode)"  value="&#x2713;" /> ' + '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' +'<input type="button" class="important" onclick="important(this.parentNode)" value="&#33" /> '+ newTask;
        document.getElementById("tasks").appendChild(item); 
        input.value="";
        input.placeholder="Enter new task" 
    }
}

function markDone (item) {
    item.className = 'finished';
}

function remove (item) {
    // remove item completely from document
    if(item.className=='finished') item.remove();
}

function doAbout() {
	var item=document.getElementById("divAbout");
	item.innerHTML="<b><em>-Made by Devayan Ghosh</b></em>";
}

function clearAbout() {
	var item=document.getElementById("divAbout");
	item.innerHTML="";
}

function important (item) {
	item.className="important";
}
