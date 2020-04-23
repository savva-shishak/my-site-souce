import { Subject } from "./Subject"

const copySubject = new Subject(null)

$(".copy-buffer").each((i, el) => {
    const str = $(el).find("span").text()
    const copyValue = $(el).attr("copy")

    copySubject.sub(val => {
        if (val == copyValue) {
            $(el)
                .addClass("copy-buffer_coped")
                .find("span").text("Скопированно")
        } else {
            $(el)
                .removeClass("copy-buffer_coped")
                .find("span").text(str)
        }
    })

    $(el).click(() => {
        copySubject.next(copyValue)

        setTimeout(() => {
            copySubject.next(null)
        }, 3000)
    })
})

copySubject.sub(text => {
    if (!text) return;

    let tmp   = document.createElement('INPUT')
    let focus = document.activeElement
    
    tmp.value = text
    
    document.body.appendChild(tmp)
    tmp.select()
    document.execCommand('copy')
    document.body.removeChild(tmp)
    focus.focus()
})