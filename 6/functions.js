window.addEventListener('DOMContentLoaded', function () {
  let chek = document.getElementById("check");
  let s = document.getElementById("sel");
  let r = document.querySelectorAll(".radiobutton input[type=radio]");
  r.forEach(function(radio) {
    radio.addEventListener("change", function() {
      let r = event.target;
      console.log(r.value);
      
      if (r.value === "r1" ) {
      chek.style.display = "none";
      s.style.display = "none";
          }
         
    });    
  });
  
});
function click1(event) {
    let r1 = document.querySelectorAll(".radiobutton input[type=radio]");
    let f1 = document.getElementsByName("field1");
    let s = document.getElementsByName("select1");
    let r = document.getElementById("result");
    let c = document.getElementsByName("check");
    let m = f1[0].value;
    console.log(s[0].value);
       if (r1[0].checked) {
        r.innerHTML = f1[0].value * 23200; 
       }
    /*if (r1[1].checked) { r.innerHTML = f1[0].value*1;
      if (s[0].value === "v1"){
        r.innerHTML+=20; }
      if (s[0].value === "v2"){
         r.innerHTML+=230; }
      if (s[0].value === "v3"){
         r.innerHTML+=520; }
    }*/
    if (r1[2].checked) {
      r.innerHTML = f1[0].value*1100;
      if (c[0].value === "c1")
        r.innerHTML += 100; 
      if (c[0].value === "c2")
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

