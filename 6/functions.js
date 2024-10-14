window.addEventListener('DOMContentLoaded', function () {
  let chek = document.getElementById("check");
  let s = document.getElementById("sel");
  let r = document.querySelectorAll(".radiobutton input[type=radio]");
  r.forEach(function(radio) {
    radio.addEventListener("change", function(event) {
      let r = event.target;
        console.log(r.value);
        if (r.value === "r1" || r.value === "r2") {
      chek.style.display = "none";
          if (r.value === "r2") {
            s.style.display = "block";
          }
          else s.style.display = "none";
    }
    if (r.value === "r3") {
      chek.style.display = "block";
      s.style.display = "none";
    }
      console.log(s.style.display);
    });    
  });
  
});
function click1(event) {
    let r1 = document.querySelectorAll(".radiobutton input[type=radio]");
    let f1 = document.getElementsByName("field1");
    let s = document.getElementsByName("selest1");
    let r = document.getElementById("result");
    let c = document.getElementById("check");
    let m = f1[0].value;
    
       if (r1[0].checked) {
        r.innerHTML = f1[0].value * 23200; 
       }
    if (r1[1].checked) { r.innerHTML = f1[0].value*1;
      if (s[0].value === "v1"){
        r.innerHTML+=20; }
      if (s[0].value === "v2"){
         r.innerHTML+=230; }
      if (s[0].value === "v3"){
         r.innerHTML+=520; }
    }
    if (r1[2].checked) {
      r.innerHTML = f1[0].value*1100;
      if (c[0].value === "c1")
        r.innerHTML += 100; 
      if (c[0].value === "c1")
        r.innerHTML += 500; 
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

