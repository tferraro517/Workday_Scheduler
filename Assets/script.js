// current time
$("#currentDay").text(dayjs().format("dddd, MMMM D YYYY"));

// button to save notes
$(function () {
  var saveBtn = $(".saveBtn");

  saveBtn.on("click", function () {
    console.log(this);
    console.log($(this).siblings("textarea")[0].value);
    console.log($(this).parent()[0].id);

    var textData = $(this).siblings("textarea")[0].value;
    var key = $(this).parent()[0].id;
    localStorage.setItem(key, textData);

    var today = dayjs().format("h.mm.ss");
    console.log($("#currentDay").text(today));
  
  });
// color coded past,present and future
  function updateHour() {
    var currentHour = parseInt(dayjs().hour());
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
      console.log(blockHour);

      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour == currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }
// saving notes added to rows
  updateHour();

  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));


});
