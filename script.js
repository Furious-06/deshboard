$(document).ready(function () {
    $('#scehdule-add').click(function () {
        $('.new-schedule-alert').css('display','flex');
    });
    $('.close-btn').click(function () {
        $('.new-schedule-alert').css('display','none');
    });
})