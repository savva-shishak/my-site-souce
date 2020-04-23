import {controller} from "./controllers"

$('.checkbox').each((_, el) => {
    const input = $(el).children(".checkbox__container").children("input");
    
    const control = controller(input.attr("id"));

    $(el).click(() => control.next(!control.getValue()))

    control.subscribe(val => input.val(val))
 })