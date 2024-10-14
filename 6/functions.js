window.addEventListener('DOMContentLoaded', function () {
  let chek = document.getElementById("check");
  let s = document.getElementById("sel");
  let r = document.querySelectorAll(".radiobutton input[type=radio]");
  r.forEach(function(radio) {
    radio.addEventListener("change", function(event) {
      let r = event.target;
        console.log(r.value);
        if (r.value === "r1") {
      chek.style.display = "none";
          s.style.display = "none";
    }
    
    if (r.value === "r2") {
      chek.style.display = "none";
      s.style.display = "block";
    }
    if (r.value === "r2") {
      chek.style.display = "block";
      s.style.display = "none";
    }
      
    });    
  });
  
});
function click1(event) {
    let r1 = document.querySelectorAll(".radiobutton input[type=radio]");
    let f1 = document.getElementsByName("field1");
    let s = document.getElementById("selest1");
    let r = document.getElementById("result");
    let m = f1[0].value;
    
       if (r1[0].checked) {
        r.innerHTML = f1[0].value * 23200; 
       }
    if (r1[1].checked) {
        r.innerHTML = f1[0].value * 1;
    }
    if (r1[2].checked) {
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

