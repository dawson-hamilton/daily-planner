var saveEl = $("#saveBtn");

var input = [];

$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

setInterval(function () {
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}, 1000);

function storeInput() {
    localStorage.setItem("input", JSON.stringify(input));
}

$("#saveBtn").on("click", storeInput());