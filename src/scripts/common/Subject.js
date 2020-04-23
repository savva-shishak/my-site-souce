export class Subject {
    constructor(startValue) {
        this.__value = startValue
        this.__subs = []
    }

    sub(sub) {
        sub(this.__value)
        this.__subs.push(sub)
    }

    next(newValue) {
        this.__value = newValue

        for (const sub of this.__subs) {
            sub(this.__value)
        }
    }
}