var currtasks = [];

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
            "time": [document.getElementById("bdp-days").innerText,document.getElementById("bdp-hours").innerText,document.getElementById("bdp-minutes").innerText],
            "tags": $("#tags").val()
        }
        document.getElementById('addtaskform').reset(); // resets fields

        currtasks.push(task); //puts task data in the array
        console.log(currtasks);

        var divi=document.createElement("div");
        divi.className='well col-block';
        var node=document.createTextNode("Task Time tag");
        divi.appendChild(node);
        var taskbody=document.getElementById('taskbody');
        taskbody.appendChild(divi);
    });

}
