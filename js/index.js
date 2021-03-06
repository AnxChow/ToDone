var currtasks = [];
var startedtasks = [];
var completedtasks = [];
var tasknum=0;
var divholder


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

    if ($('#taskbody').children().length == 0 ){
        if (!$("#notstarted").hasClass("hidden")) {
            $("#notstarted").addClass("hidden");
        }
    }
}

window.onload = function() {
    sessionStorage.setItem("count",0);
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

    function getTimeStamp() {
       var now = new Date();
       var hold='Time Started: '+(now.getHours() + ':'+ ((now.getMinutes() < 10) ? ("0" + now.getMinutes()) : (now.getMinutes())) + ':' + ((now.getSeconds() < 10) ? ("0" + now.getSeconds()) : (now.getSeconds())));
       document.getElementById('timer').innerHTML = hold;
     }

     $('#finishbutton').click(function(e){
         //var nukeitem = divholder.children()[0].children[3].children[1].id;
         var x= parseInt(sessionStorage.getItem("count"));
         x++;
         sessionStorage.setItem("count", x);
         sessionStorage.setItem("div", divholder.innerHTML);
         divholder.remove();
         headingCheck();
     });

    $('#addbutton').click(function(e){
    // $("#addtaskform").on('submit', function() {
    //Validate form


        var TaskVal=document.forms["addtaskform"]["tasklabel"].value;
        var TimeVal=[document.getElementById("bdp-days").innerText,document.getElementById("bdp-hours").innerText,document.getElementById("bdp-minutes").innerText];
        var TagVal=document.forms["addtaskform"]["tags"].value;
        if(TaskVal==""){
          alert("Please enter a task");
          return false;
        }
        if(TagVal==""){
          alert("Please enter at least one tag");
          return false;
        }
        if(TimeVal[0]=="0" && TimeVal[1]=="0" && TimeVal[2]=="0"){
          alert("Please set expected time");
          return false;
        }

        var task = {
            "name": $("#tasklabel").val(),
            "notes": $("#notes-text").val(),
            "time": TimeVal,

            "tags": $("#tags").val(),
            complete: false,
            removed: false

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

        var str='<div class="row"><div class="col-md-6"><h3>'+currtasks[tasknum].name+'</h3></div><div class="col-md-2"><h5>Expected Time: ' +days+' day(s) '+hours+' hour(s) '+mins+' minute(s)</h5></div><div class="col-md-2"><h5>Tag: '+currtasks[tasknum].tags+'</h5></div><div class="col-md-2"><button id="startbutton-'+tasknum+'" class="startbutton btn btn-primary" data-toggle="modal" data-target="#focusModal">Start</button><button id="trashbutton-'+tasknum+'" class="trashbutton btn btn-danger"><span class="glyphicon glyphicon-trash"></span></button></div></div>'

        //var node=document.createTextNode(str);
        //divi.appendChild(node);
        divi.innerHTML+=str;
        var taskbody=document.getElementById('taskbody');
        taskbody.appendChild(divi);
        headingCheck();
        tasknum++;
        document.getElementById('addtaskform').reset(); // resets fields





        for (var i = 0; i <= tasknum; i++) {
        console.log(tasknum, i);
            $("#trashbutton-"+i).click( function() { //when trashbutton is clicked to remove task
                console.log("element was clicked");
                //currtasks.splice(2, 1); //removes that element from currtask array
                //currtasks[i].removed = true; //WHY DOESN'T THIS WORK

                $(this).parent().parent().parent().remove(); //removes that taskdiv from html.

                console.log(currtasks[i]);
                //tasknum--;
                headingCheck();
            });
            // console.log($("#startbutton-"+(i-1)));
            $("#startbutton-"+(i-1)).click( function(){
                getTimeStamp();
                divholder = $(this).parent().parent().parent();
                console.log(divholder);
                headingCheck();
            });
        }


    });



}
