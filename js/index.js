function createtask(){
    var task = $('addtaskform').serializeArray();
    console.log(task);
}


window.onload = function() {
    $('#duration').durationPicker();
    $('addbutton').onclick=createtask();
}

