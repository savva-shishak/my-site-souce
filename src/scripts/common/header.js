$(".header").each((i, el) => {
    themeByTime()

    $(el).find(".header__theme-toggle").click(() => {
        $(document.body).toggleClass("dark")
    })
})

function themeByTime() {
    const time = new Date().getHours()

    if (time < 9 || time > 20) {
        $(document.body).addClass("dark")
    }
}