const form = document.querySelector('#sheetdb-form')
form.addEventListener('submit', (e) => {
    e.preventDefault(e)
    fetch(form.action, {
        method: 'POST',
        body: new FormData(document.querySelector('#sheetdb-form'))
    }).then(res => {
        res.json
    }).then((html) => {
        window.open('newPage.html', '_blank')
    })
})