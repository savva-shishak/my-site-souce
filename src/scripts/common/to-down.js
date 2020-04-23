$(".to-down").each((i, el) => {
    $(el).click(() => {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("body").height()
        }, 500);
    })
})