var currtasks = [];
var startedtasks = [];
var completedtasks = [];
var tasknum=0;

function headingCheck() {
    if (currtasks.length !== 0 && $("#notstarted").hasClass("hidden")) {
        $("#notstarted").removeClass("hidden");
    } else if(currtasks.length == 0 && !$("#notstarted").hasClass("hidden")){
        $("#notstarted").addClass("hidden");
    }
    if (startedtasks.length !== 0 && $("#inprogress").hasClass("hidden")) {
        $("#inprogress").removeClass("hidden");
    } else if (startedtasks.length == 0 && !$("#inprogress").hasClass("hidden")) {
        $("#inprogress").addClass("hidden");
    }
}

window.onload = function() {
    $('#duration').durationPicker(); //durationpicker for expected time required
    $('#tags').selectize({ // selectize for tags
    delimiter: ',',
    persist: false,
    create: function(input) { //is this redundant? Check function of code.
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
        headingCheck(); //checks if headings should be there or not.
        console.log(currtasks);

        var divi=document.createElement("div");
        divi.className='well col-block';
        var days=currtasks[tasknum].time[0]
        var hours=currtasks[tasknum].time[1];
        var mins = currtasks[tasknum].time[2];
        // if (tasknum==0){
        //   var head=document.createElement("div");
        //   head.className='well col-block';
        //   var node=document.createTextNode("Not Started");
        //   head.appendChild(node);
        //   taskbody.appendChild(head);
        // }
        //var str=currtasks[tasknum].name + 'Expected Time: ' + currtasks[tasknum].time + 'Tag: ' +currtasks[tasknum].tags;
        // var str='<div class="row"><div class="col-md-6"><h3>'+currtasks[tasknum].name+'</h3></div><div class="col-md-2"><h5>Expected Time: ' +days+' day(s) '+hours+' hour(s) '+mins+' minute(s)</h5></div><div class="col-md-2"><h5>Tag: '+currtasks[tasknum].tags+'</h5></div><div class="col-md-2"><button class="btn-block">Start Task</div></div>';
        var str='<div class="row"><div class="col-md-6"><h3>'+currtasks[tasknum].name+'</h3></div><div class="col-md-2"><h5>Expected Time: ' +currtasks[tasknum].time+'</h5></div><div class="col-md-2"><h5>Tag: '+currtasks[tasknum].tags+'</h5></div><div class="col-md-2"><button class="btn-block">Start Task</div></div>'
        //var node=document.createTextNode(str);
        //divi.appendChild(node);
        divi.innerHTML+=str;
        var taskbody=document.getElementById('taskbody');
        taskbody.appendChild(divi);
        tasknum++;
        document.getElementById('addtaskform').reset(); // resets fields
    });

}
