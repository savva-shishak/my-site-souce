$('.row').each((i, row) => {
    const gutter = $(row).attr('gutter')

    if (gutter) {
        $(row).children("[class*=col]").each((i, col) => {
            $(col).children().wrap("<div class='p-"+ gutter +"'></div>")
        })
        
        $(row).children(":not([class*=col])").each((i, child) => {
            $(child).wrap("<div class='p-"+ gutter +"'></div>")
        })
    }
})