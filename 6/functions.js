function click1(event) {
    let s = document.getElementById("radiobutton");
    let f1 = document.getElementsByName("field1");
    let r = document.getElementById("result");
    let m = f1[0].value;
    if (s.value === "r1") {
        r.innerHTML = f1[0].value * 23200;
    }
    if (s.value === "r2") {
        r.innerHTML = f1[0].value * 1;
    }
    if (s.value === "r3") {
        r.innerHTML = f1[0].value * 1100;
    }
    if (m.match(/^\d+$/) === null) {
        r.innerHTML = "некорректное значение";
    }
    return false;
}
window.addEventListener("DOMContentLoaded", function () {
    let b = document.getElementById("button1");
    b.addEventListener("click", click1);
});

window.addEventListener('DOMContentLoaded', function (event) {
  let s = document.getElementById("radiobutton");
  s.addEventListener("change", function(event) {
    let radios = event.target;
    let select = document.getElementsByName("select1");
    let chek = document.getElementById("check");
    if (radios.value === "r1") {
      select.style.display = "none";
      chek.style.display = "none";
    }
    else {
      select.style.display = "block";
      chek.style.display = "block";
    }
    if (select.value == "r2") {
      chek.style.display = "none";
    }
    else {
      chek.style.display = "block";
    }
      if (select.value == "r3") {
      select.style.display = "none";
    }
    else {
      select.style.display = "block";
    }
  });
  
  let r = document.querySelectorAll(".radiobutton input[type=radio]");
  r.forEach(function(radio) {
    radio.addEventListener("change", function(event) {
      let r = event.target;
      console.log(r.value);
    });    
  });
  
});
