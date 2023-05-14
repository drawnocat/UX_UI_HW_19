document.getElementById("hireMe").addEventListener("click", function () {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
  
    setTimeout(function () {
      modal.style.display = "none";
    }, 3000); // 3 seconds
  });