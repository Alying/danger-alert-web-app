/**
 * Description: Handles location request popup window for the Danger Alert application.
 * Author: Alina Ying
 * Author URI: https://alinaying.com/
 * Tags: Website
 */

function openLocationRequest() {
    window.alert('Allow location to be accessed?)'.bold() +  '\nYour current location is 66 Ceres St\n' +
        'San Francisco, California(CA), 94124');
    window.location.href='components/search_page.html';
}

function openLocationRequest2() {
    window.alert('Allow location to be accessed?'.bold() + '\nYour current location is 8253 W. Glenholme Drive\n' +
        'El Paso, TX 79915');
    window.location.href='search_page2.html';
}

function openLocationRequest3() {
    window.alert('Allow location to be accessed?)'.bold() +  '\nYour current location is 66 Ceres St\n' +
        'San Francisco, California(CA), 94124');
    window.location.href='search_page.html';
}
