// 1> create time and date tag
function currentTime() {
    let time = setInterval(function () {
        let dateTime = new Date();
        let date = dateTime.getDate();
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let month = months[dateTime.getMonth()];
        let year = dateTime.getFullYear();
        let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let day = week[dateTime.getDay()];
        let hour = dateTime.getHours();
        let min = dateTime.getMinutes();
        let minutes = dateTime.getMinutes();

        let timeTag = "";
        let dateTag = day + " " + month + " " + date + ", " + year;

        if (minutes < 10) {
            minutes = "0" + min;
        }
        else {
            minutes = min;
        }
        if (hour > 12) {
            timeTag = (hour - 12) + ":" + minutes + " PM";
        }
        else {
            timeTag = hour + ":" + minutes + " AM";
        }
        $("#currentDay").text(dateTag + " " + timeTag);
    }, 1000);
}
currentTime();

//get from localStorage    
let retTask = JSON.parse(localStorage.getItem("task"));

// 2> create each time block
for (let i = 0; i < 9; i++) {
    let blocks = $("<div>");
    let hourBlock = $("<div>");
    let timeBlock = $("<input/>");
    let hour = $("<h3>")
    let saveBtn = $("<img>")

    blocks.attr("class", "row");

    hourBlock.attr("class", "col-sm-1 hour");
    hour.attr("class", "hour-text")
        let dateTime = new Date();
        if ((i + 9) < dateTime.getHours()) {
            timeBlock.attr("class", "col-sm-10 time-block past")
        }
        else if ((i + 9) == dateTime.getHours()) {
            timeBlock.attr("class", "col-sm-10 time-block present")
        }
        else if ((i + 9) > dateTime.getHours()){
            timeBlock.attr("class", "col-sm-10 time-block future")
        }
    
    timeBlock.attr("id", "time-block-" + i);
    timeBlock.attr("type", "text");
    saveBtn.attr("class", "col-sm-1 saveBtn")
    saveBtn.attr("id", "time-block" + i);
    saveBtn.attr("src", "./Assets/save-icon.png")

    $(timeBlock).val(retTask["timeBlock" + i]);  //This is working

    let time = i + 9;
    if (time < 12) {
        hour.text(time + "AM");
    }
    else {
        let timeTwelve = time - 12;
        if (timeTwelve === 0) {
            hour.text(time + "PM")
        }
        else {
            hour.text(timeTwelve + "PM");
        }
    }

    

    $(".container").append(blocks);
    blocks.append(hourBlock);
    hourBlock.append(hour);
    blocks.append(timeBlock);
    blocks.append(saveBtn);
}
function blockColor() {
    
}
blockColor();
// 3> Local Storage of calender
let task = {
    timeBlock0: "",
    timeBlock1: "",
    timeBlock2: "",
    timeBlock3: "",
    timeBlock4: "",
    timeBlock5: "",
    timeBlock6: "",
    timeBlock7: "",
    timeBlock8: ""
}

$(".saveBtn").click(function () {
    if ($(this).attr("id") === "time-block0") {
        let input = $("#time-block-0").val();
        task.timeBlock0 = input;
        // console.log(task.timeBlock9);
        $("#time-block-0").attr("disabled", "disabled");
    }
    else if ($(this).attr("id") === "time-block1") {
        let input = $("#time-block-1").val();
        console.log(input);
        task.timeBlock1 = input;
        // console.log(task.timeBlock9);
        $("#time-block-1").attr("disabled", "disabled");
    }
    else if ($(this).attr("id") === "time-block2") {
        let input = $("#time-block-2").val();
        console.log(input);
        task.timeBlock2 = input;
        // console.log(task.timeBlock9);
        $("#time-block-2").attr("disabled", "disabled");
    }
    else if ($(this).attr("id") === "time-block3") {
        let input = $("#time-block-3").val();
        console.log(input);
        task.timeBlock3 = input;
        // console.log(task.timeBlock9);
        $("#time-block-3").attr("disabled", "disabled");
    }
    else if ($(this).attr("id") === "time-block4") {
        let input = $("#time-block-4").val();
        console.log(input);
        task.timeBlock4 = input;
        // console.log(task.timeBlock9);
        $("#time-block-4").attr("disabled", "disabled");
    }
    else if ($(this).attr("id") === "time-block5") {
        let input = $("#time-block-5").val();
        console.log(input);
        task.timeBlock5 = input;
        // console.log(task.timeBlock9);
        $("#time-block-5").attr("disabled", "disabled");
    }
    else if ($(this).attr("id") === "time-block6") {
        let input = $("#time-block-6").val();
        console.log(input);
        task.timeBlock6 = input;
        // console.log(task.timeBlock9);
        $("#time-block-6").attr("disabled", "disabled");
    }
    else if ($(this).attr("id") === "time-block7") {
        let input = $("#time-block-7").val();
        console.log(input);
        task.timeBlock7 = input;
        // console.log(task.timeBlock9);
        $("#time-block-7").attr("disabled", "disabled");
    }
    else if ($(this).attr("id") === "time-block8") {
        let input = $("#time-block-8").val();
        console.log(input);
        task.timeBlock8 = input;
        // console.log(task.timeBlock9);
        $("#time-block-8").attr("disabled", "disabled");
    }
    localStorage.setItem("task", JSON.stringify(task));
})
// 4>
// 5>