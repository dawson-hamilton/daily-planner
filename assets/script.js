var input = [];
var timeFormat = 'HH:mm:ss'
//call all the if else statement functions
past();
present();
future();

//put time in the beginning
$("#currentDay").text(moment().format('MMMM Do YYYY,HH:mm:ss a'));

//set the time on the top and update every second
setInterval(function () {
    $("#currentDay").text(moment().format('MMMM Do YYYY,HH:mm:ss a'));
}, 1000);

var nine = JSON.parse(localStorage.getItem('nine'));
$("#nine").val(nine);
var ten = JSON.parse(localStorage.getItem('ten'));
$("#ten").val(ten);
var eleven = JSON.parse(localStorage.getItem('eleven'));
$("#eleven").val(eleven);
var twelve = JSON.parse(localStorage.getItem('twelve'));
$("#twelve").val(twelve);
var thirteen = JSON.parse(localStorage.getItem('thirteen'));
$("#thirteen").val(thirteen);
var fourteen = JSON.parse(localStorage.getItem('fourteen'));
$("#fourteen").val(fourteen);
var fifteen = JSON.parse(localStorage.getItem('fifteen'));
$("#fifteen").val(fifteen);
var sixteen = JSON.parse(localStorage.getItem('sixteen'));
$("#sixteen").val(sixteen);
var seventeen = JSON.parse(localStorage.getItem('seventeen'));
$("#seventeen").val(seventeen);

$("#saveBtn").on("click", function(){

});

//set color to green if within current time slot
function future(){
    if(moment().isBefore(moment('08:59:59', timeFormat))){
        $(".nine").addClass("green");
        $(".nine").removeClass("red");
        $(".nine").removeClass("white");
    } else if(moment().isBefore(moment('09:59:59', timeFormat))){
        $(".ten").addClass("green");
        $(".ten").removeClass("red");
        $(".ten").removeClass("white");
    } else if(moment().isBefore(moment('10:59:59', timeFormat))){
        $(".eleven").addClass("green");
        $(".eleven").removeClass("red");
        $(".eleven").removeClass("white");
    } else if(moment().isBefore(moment('11:59:59', timeFormat))){
        $(".twelve").addClass("green");
        $(".twelve").removeClass("red");
        $(".twelve").removeClass("white");
    } else if(moment().isBefore(moment('12:59:59', timeFormat))){
        $(".thirteen").addClass("green");
        $(".thirteen").removeClass("red");
        $(".thirteen").removeClass("white");
    } else if(moment().isBefore(moment('13:59:59', timeFormat))){
        $(".fourteen").addClass("green");
        $(".fourteen").removeClass("red");
        $(".fourteen").removeClass("white");
    } else if(moment().isBefore(moment('14:59:59', timeFormat))){
        $(".fifteen").addClass("green");
        $(".fifteen").removeClass("red");
        $(".fifteen").removeClass("white");
    } else if(moment().isBefore(moment('15:59:59', timeFormat))){
        $(".sixteen").addClass("green");
        $(".sixteen").removeClass("red");
        $(".sixteen").removeClass("white");
    } else if(moment().isBefore(moment('16:59:59', timeFormat))){
        $(".seventeen").addClass("green");
        $(".seventeen").removeClass("red");
        $(".seventeen").removeClass("white");
    }
}
// set background to red if on current time slot
function present(){
    if (moment().isBetween(moment('09:00:00', timeFormat), moment('09:59:59', timeFormat))) {
        $(".nine").addClass("red");
        $(".nine").removeClass("green");
        $(".nine").removeClass("white");
    } else if (moment().isBetween(moment('10:00:00', timeFormat), moment('10:59:59', timeFormat))) {
        $(".ten").addClass("red");
        $(".ten").removeClass("green");
        $(".ten").removeClass("white");
    } else if (moment().isBetween(moment('11:00:00', timeFormat), moment('11:59:59', timeFormat))) {
        $(".eleven").addClass("red");
        $(".eleven").removeClass("green");
        $(".eleven").removeClass("white");
    } else if (moment().isBetween(moment('12:00:00', timeFormat), moment('12:59:59', timeFormat))) {
        $(".twelve").addClass("red");
        $(".twelve").removeClass("green");
        $(".twelve").removeClass("white");
    } else if (moment().isBetween(moment('13:00:00', timeFormat), moment('13:59:59', timeFormat))) {
        $(".thirteen").addClass("red");
        $(".thirteen").removeClass("green");
        $(".thirteen").removeClass("white");
    } else if (moment().isBetween(moment('14:00:00', timeFormat), moment('14:59:59', timeFormat))) {
        $(".fourteen").addClass("red");
        $(".fourteen").removeClass("green");
        $(".fourteen").removeClass("white");
    } else if (moment().isBetween(moment('15:00:00', timeFormat), moment('15:59:59', timeFormat))) {
        $(".fifteen").addClass("red");
        $(".fifteen").removeClass("green");
        $(".fifteen").removeClass("white");
    } else if (moment().isBetween(moment('16:00:00', timeFormat), moment('16:59:59', timeFormat))) {
        $(".sixteen").addClass("red");
        $(".sisxteen").removeClass("green");
        $(".sisxteen").removeClass("white");
    } else if (moment().isBetween(moment('17:00:00', timeFormat), moment('17:59:59', timeFormat))) {
        $(".seventeen").addClass("red");
        $(".seventeen").removeClass("green");
        $(".seventeen").removeClass("white");
    }
}
// Set backgroung to white past their current time slot
function past(){
    if(moment().isAfter(moment('08:00:00', timeFormat))){
        $(".nine").addClass("white");
        $(".nine").removeClass("red");
        $(".nine").removeClass("greem");
    } else if(moment().isAfter(moment('09:00:00', timeFormat))){
        $(".ten").addClass("white");
        $(".ten").removeClass("red");
        $(".ten").removeClass("greem");
    } else if(moment().isAfter(moment('10:00:00', timeFormat))){
        $(".eleven").addClass("white");
        $(".eleven").removeClass("red");
        $(".eleven").removeClass("greem");
    } else if(moment().isAfter(moment('11:00:00', timeFormat))){
        $(".twelve").addClass("white");
        $(".twelve").removeClass("red");
        $(".twelve").removeClass("greem");
    } else if(moment().isAfter(moment('12:00:00', timeFormat))){
        $(".thirteen").addClass("white");
        $(".thirteen").removeClass("red");
        $(".thirteen").removeClass("greem");
    } else if(moment().isAfter(moment('13:00:00', timeFormat))){
        $(".fourteen").addClass("white");
        $(".fourteen").removeClass("red");
        $(".fourteen").removeClass("greem");
    } else if(moment().isAfter(moment('14:00:00', timeFormat))){
        $(".fifteen").addClass("white");
        $(".fifteen").removeClass("red");
        $(".fifteen").removeClass("greem");
    } else if(moment().isAfter(moment('15:00:00', timeFormat))){
        $(".sixteen").addClass("white");
        $(".sixteen").removeClass("red");
        $(".sixteen").removeClass("greem");
    } else if(moment().isAfter(moment('16:00:00', timeFormat))){
        $(".seventeen").addClass("white");
        $(".seventeen").removeClass("red");
        $(".seventeen").removeClass("greem");
    }
}