var input = [];
var timeFormat = 'HH:mm:ss'
var currentHour = moment().format('HH');

//put time in the beginning
$("#currentDay").text(moment().format('MMMM Do YYYY,HH:mm:ss'));

//set the time on the top and update every second
setInterval(function () {
    $("#currentDay").text(moment().format('MMMM Do YYYY,HH:mm:ss'));
}, 1000);

function hoursUpdater() {
    $(".time-block").each(function () {
        var blockKey = $(this).attr("id");
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
        var blockDisplay = localStorage.getItem(blockKey);
        $(this).children("textarea").text(blockDisplay);

        if (currentHour == blockHour) {
            $(this).children("textarea").css("background-color", "red");
            console.log("red");
        } else if (currentHour < blockHour) {
            $(this).children("textarea").css("background-color", "green");
            console.log("green");
        } else if (currentHour > blockHour) {
            $(this).children("textarea").css("background-color", "lightGrey");
            console.log("lightgray");
        }
    });

    $(".saveBtn").on("click", function () {
        localStorage.setItem($(this).parent().attr("id"), $(this).siblings("textarea").val().trim());
    });
}

hoursUpdater();