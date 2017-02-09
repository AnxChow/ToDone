var createtask = function (){
    var task = $('addtaskform').serializeArray();
    console.log("executed");
}


window.onload = function() {
    $('#duration').durationPicker(); //durationpicker for expected time required
    $('#tags').selectize({ // selectize for tags
    delimiter: ',',
    persist: false,
    create: function(input) {
            return {
                value: input,
                text: input
            }
        }
    });

    $('#addbutton').click(function(e){
        var task = {
            "name": $("#tasklabel").val(),
            "notes": $("#notes-text").val(),
            "time": $("#expectedtime").val(),
            "tags": $("#tags").val()
        }
        document.getElementById('addtaskform').reset(); // resets fields
        console.log(task);
    });


    // $('#addbutton').click(function(e){
    //     var task = $('#addtaskform').serializeArray();
    //     console.log(task);
    // });
    // $('#addbutton').click(function(){
    //     var task = $('addtaskform').serializeArray();
    //     console.log(task);
    //     $('addtaskform').reset();
    // })

}

