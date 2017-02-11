var currtasks = [];
var tasknum=0;

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



        currtasks.push(task); //puts task data in the array
        console.log(currtasks);

        var divi=document.createElement("div");
        divi.className='well col-block';
        //var str=currtasks[tasknum].name + 'Expected Time: ' + currtasks[tasknum].time + 'Tag: ' +currtasks[tasknum].tags;
        var str='<div class="row"><div class="col-md-4">'+currtasks[tasknum].name+'</div><div class="col-md-3">Expected Time: ' +currtasks[tasknum].time+'</div><div class="col-md-3">Tag: '+currtasks[tasknum].tags+'</div></div>';
        //var node=document.createTextNode(str);
        //divi.appendChild(node);
        divi.innerHTML+=str;
        var taskbody=document.getElementById('taskbody');
        taskbody.appendChild(divi);
        tasknum++;
        document.getElementById('addtaskform').reset(); // resets fields
    });

}
