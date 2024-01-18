function newDate() {
    return new Date().getFullYear();
  }
  document.onload = document.getElementById("autodate").innerHTML = newDate();
  