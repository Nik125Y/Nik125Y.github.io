  <script>

function click1() {
  let f1 = document.getElementsByName("field1");
  let r = document.getElementById("result");
  let s = document.getElementsByName("select1");
  if (s[0].value == "v1") r.innerHTML = f1[0].value * 320;
  if (s[0].value == "v2") r.innerHTML = f1[0].value * 2;
  if (s[0].value == "v3") r.innerHTML = f1[0].value * 1100;
  if (s[0].value == "v4") r.innerHTML = f1[0].value * 210;
  //console.log(s[0].value);
  return false;
}
</script>  
