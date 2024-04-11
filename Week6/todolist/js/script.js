
  
  document.getElementById("liveToastBtn").addEventListener("click", addTask);
  const list = document.getElementById("list");

  list.addEventListener("click", function(event) {
    if(event.target.tagName == "LI"){
        const li = event.target;
        li.classList.toggle("checked");
    } else if (event.target.classList.contains("close")){
      const li = event.target.parentElement;
      list.removeChild(li);
    }
  });
  function addTask() {
    let newTask = document.getElementById("task").value.trim(); // Metni al ve boşlukları temizle
    
    if (newTask) {
      let newListItem = document.createElement("li");
      newListItem.textContent = newTask;
  
      let closeDiv = document.createElement("div");
      closeDiv.classList.add("close");
      closeDiv.textContent = "x";

      newListItem.appendChild(closeDiv);
      list.appendChild(newListItem);
        
      document.getElementById("task").value = "";
      $("#liveToast.success").toast("show");
    } else {
        $("#liveToast.error").toast("show");
    }
  }