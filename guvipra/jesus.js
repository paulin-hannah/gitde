function reqListener() {
    console.log(this.responseText);
  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.eu/rest/v2/all");
  req.send();
  