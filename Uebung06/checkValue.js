import {showAlert} from "./css_info.js";
export function checkValue(value) {
    if (value > 100) {
        alert('Der Wert ist größer als 100!');
    }
}

function checkValue1(css, value, alert) {
    if (value == 100) {
        console.log("hello");
        showAlert(alert);
        css.css('background-color', 'red');
    }
}

export {checkValue1};