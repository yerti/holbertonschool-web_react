import $ from 'jquery';
import _, { constant } from 'lodash';

$(document).ready(function() {
    const number = 0;

    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button>Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - Holberton School</p>');

    // function count
    $('button').click(_.debounce(function updateCounter(){
        number++;
      $('#count').text(`${number} clicks on the button`);
    }, 500));

})