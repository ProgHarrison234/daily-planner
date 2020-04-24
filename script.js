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

// 2> create each time block
for (let i = 0; i < 9; i++) {
    let blocks = $("<div>");
    let hourBlock = $("<div>");
    let timeBlock = $("<div>");
    let hour = $("<h3>")
    let saveBtn = $("<div>")

    blocks.attr("class", "row");

    hourBlock.attr("class", "col-sm-1 hour");
    hour.attr("class", "hour-text")
    timeBlock.attr("class", "col-sm-10 time-block");
    saveBtn.attr("class", "col-sm-1 saveBtn")

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
// 2>
// 3>
// 4>