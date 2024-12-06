document.addEventListener('DOMContentLoaded', init, false);

function init(){
    const shape_select = document.getElementById("shape");
    shape_select.addEventListener("change", select_shape, false);
    const round_check= document.getElementById("round_check");
    round_check.addEventListener("change", round_on_off);
    const unit_buttons = document.getElementsByName("units");
    unit_buttons.forEach(ub => ub.addEventListener("change", change_units))
};

function round_on_off() {
    console.log("check box toggled");
}

function change_units() {
    console.log("Units changed");
    let unit_buttons = document.getElementsByName("units");
    for (i = 0; i < unit_buttons.length; i++) {
        if (unit_buttons[i].checked)
            console.log("Units: " + unit_buttons[i].value);
    }
}

function calculate() {
    console.log("Calculating Area");
    let round_check = document.getElementById("round_check");
    console.log(round_check.checked);
    const calcbutton = document.getElementById("calcbutton").value;
    let length = document.getElementById("length").value;
    console.log("Length = " + length);
    let width = document.getElementById("width").value;
    console.log("Width = " + width);
    let area = document.getElementById("area").value;

    if (length && width){
        let area_val = length*width;
        document.getElementById("area").value = area_val;
    } else if (length && area) {
        let width_val = area/length;
        document.getElementById("width").value = width_val;
    } else if (width && area) {
        let length_val = area/width;
        document.getElementById("length").value = length_val;
    }
}

function select_shape() {
    let shape = document.getElementById("shape").value;
    
    let circle_div = document.getElementById("circle-shape");
    let rect_div = document.getElementById("rectangle-shape");
    if (shape=="circle") {
        circle_div.removeAttribute("hidden");
        rect_div.setAttribute("hidden", "");
    } else if (shape=="rectangle") {
        rect_div.removeAttribute("hidden");
        circle_div.setAttribute("hidden", "");
    }
}