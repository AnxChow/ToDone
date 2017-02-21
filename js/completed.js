window.onload = function() {
  var num=sessionStorage.getItem("count");
  var section=document.getElementById("completedSection");
  
  for (var i = 0; i < num; i++) {
    var divi=document.createElement("div");
    divi.className='well col-block';
    var str='<div class="row"><div class="col-md-6"><h3>EECS 213 HW Bomb Lab</h3></div><div class="col-md-2"><h5>Tag: Homework</h5></div><div class="col-md-2"><h5>Exp: 2 day(s) 0 hour(s) 0 minute(s)</h5></div><div class="col-md-2"><h5>Actual: 1 day(s) 8 hour(s) 7 minute(s)</h5></div></div>'
    divi.innerHTML+=str;
    section.appendChild(divi);
  }


}
