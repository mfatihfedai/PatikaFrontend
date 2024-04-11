
  
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

  // const closeButtons = document.querySelectorAll(".close");

  // closeButtons.forEach(closeButton => {
  //   closeButton.addEventListener("click", function() {
  //   const li = this.parentElement;
  //   list.removeChild(li);
  //   })
  // })
  function addTask() {
    let newTask = document.getElementById("task").value.trim(); // Metni al ve boşlukları temizle
    
    if (newTask) {
      // Yeni bir li öğesi oluştur
      let newListItem = document.createElement("li");
      newListItem.textContent = newTask;
  
      // Listeye yeni öğeyi ekle
      let closeDiv = document.createElement("div");
      closeDiv.classList.add("close");
      closeDiv.textContent = "x";

      newListItem.appendChild(closeDiv);
      list.appendChild(newListItem);
        
      
      // Görev girişini temizle
      document.getElementById("task").value = "";
      $("#liveToast.success").toast("show");
    } else {
        $("#liveToast.error").toast("show");
    }
  }