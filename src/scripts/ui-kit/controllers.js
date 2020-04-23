import { BehaviorSubject } from "rxjs";

const controllers = [];

export function getController(idController) {
    for (const {id, controller} of controllers) {
        if (idController == id) {
            return controller
        }
    }
}

export function controller(id, value = null) {
    let controller = getController(id)

    if (!controller || !id) {
        controller = new BehaviorSubject(value)
        controllers.push({id, controller})
    }

    return controller
}