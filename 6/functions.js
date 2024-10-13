window.addEventListener('DOMContentLoaded', function () {
    function click1(event) {
    let f1 = document.getElementsByName("field1");
    let r = document.getElementById("result");
    let s = document.getElementsByName("select1");
        
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
    event.preventDefault();
    return false;
}



    s[0].addEventListener("change", function() {
    let select = event.target;
    let radios = document.getElementById("radiobutton");
    console.log(select.value);            //remove
    if (select.value === "v3") {
      radios.style.display = "none";
    }
    else {
      radios.style.display = "block";
    }
  });
  
  let rad = document.querySelectorAll(".myradios input[type=radio]");
  rad.forEach(function(radio) {
    radio.addEventListener("change", function() {
      let rad = event.target;
      console.log(rad.value);
    });    
  });
  
});

/*window.addEventListener("DOMContentLoaded", function () {
    let b = document.getElementById("button1");
    b.addEventListener("click", click1);
});*/
