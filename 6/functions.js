window.addEventListener('DOMContentLoaded', function () {
    let s = document.getElementsByName("select1");
    let f1 = document.getElementsByName("field1");
    let r = document.getElementById("result");
    
    function click1(event) {
    let m = f1[0].value;
    if (s[0].value === "v1") {
        r.innerHTML = f1[0].value * 23200;
    }
    if (s[0].value === "v2") {
        r.innerHTML = f1[0].value * 1;
    }
    if (s[0].value === "v3") {
        r.innerHTML = f1[0].value * 1100;
    }
    if (m.match(/^\d+$/) === null) {
        r.innerHTML = "некорректное значение";
    }
}


    
  /*  s[0].addEventListener("change", function() {
    let select = event.target;
    let radios = document.getElementById("radiobutton");
    console.log(select.value);            //remove
    if (select.value === "v3") {
      radios.style.display = "none";
    }
    else {
      radios.style.display = "block";
    }
  });*/
   f1.addEventListener("input", function () {
        click1();
    });
  let rad = document.getElementsByName("radiobutton");
  rad.forEach(function(radio) {
    radio.addEventListener("change", function() {
        click1();
    });    
  });
  
});
