function click1(event) {
    let select = document.getElementsByName("selest1");
    let chek = document.getElementById("check");
    let r1 = document.querySelectorAll(".radiobutton input[type=radio]");
    let f1 = document.getElementsByName("field1");
    let r = document.getElementById("result");
    let m = f1[0].value;
    console.log(r1[0].value);
    
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

window.addEventListener('DOMContentLoaded', function () {
  let chek = document.getElementById("check");
  let select = document.getElementsByName("selest1");
  let r = document.querySelectorAll(".radiobutton input[type=radio]");
  r.forEach(function(radio) {
    radio.addEventListener("change", function(event) {
      let r = event.target;
        console.log(r.value);
        if (r.value === "r1") {
      select[0].style.display = "none";
      chek.style.display = "none";
    }
    else {
      select[0].style.display = "block";
      chek.style.display = "block";
    }
    if (r.value == "r2") {
      chek.style.display = "none";
    }
    else {
      chek.style.display = "block";
    }
      if (r.value == "r3") {
      select[0].style.display = "none";
    }
    else {
      select[0].style.display = "block";
    }
      
    });    
  });
  
});
