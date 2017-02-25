function ClearAll(){
  for(var i=0;i<5;i++){
    $('#hid'+i).addClass('hidden');
  }
}

window.onload=function(){
  //var pills = document.getElementsByClassName("pill");

  $('.pill').click(function(){
      ClearAll();
      var divi=$('#hid'+this.id);
      divi.removeClass("hidden");
    });
}
