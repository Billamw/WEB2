import {checkValue, checkValue1} from './checkValue.js'

$(document).ready(function(){
    $('#myDiv').on('mousemove', function() {
        let num = parseInt($('#number').text());
        let css = $('#myDiv');
        let alert = $('.alert')
        checkValue1(css, num, alert);
        $('#number').text(num+1);
    });


    $('#button').click(function() {
        $('#number').text(0);
    });
});
