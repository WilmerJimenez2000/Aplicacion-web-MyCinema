function increaseCount(a, b) {
    var input = b.previousElementSibling;
    var value = parseInt(input.value, 10);
    if(value < 10) {
        value = isNaN(value) ? 0 : value;
        value++;
        precioBoletos(value);
        input.value = value;
    }
  }
  
  function decreaseCount(a, b) {
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
      value = isNaN(value) ? 0 : value;
      value--;
      precioBoletos(value);
      input.value = value;
    }
  }
  function precioBoletos(value){
    if(localStorage.getItem("tarifa") == undefined){
      let precio =  document.getElementById("tarifa").innerText;
      localStorage.setItem("tarifa", precio);
    }
    let sp = document.getElementById("tarifa");
    let precio =  localStorage.getItem("tarifa");
    total = precio*value;
    sp.textContent = total;
    return true;
  }

  function guardarNubBoletos(){
    let num = document.getElementById("numBoletoSeleccionados").value;
    let precioBoletos = document.getElementById("tarifa").innerText;
    let numAsientos = document.getElementById("capacidad").innerText;
    localStorage.setItem("numBoletos",num);
    localStorage.setItem("precioBoletos", precioBoletos);
    localStorage.setItem("numAsientos", numAsientos);
    localStorage.setItem("numAsientosSelecionados",0);
  }