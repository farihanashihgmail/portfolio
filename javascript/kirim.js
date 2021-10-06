console.log('it Works')

$(document).ready(function () {
    $('.submit').click(function (event){
        console.log('Clicked button')
        var email = $('.email').val()
        var subject = $('.subject').val()
        var message = $('.message').val()
        var statusElm = $('.status')
        statusElm.empty()

        if(email.length > 5 && email.includes('@') && email.includes('.')) {
            statusElm.append('<div>Email is valid</div')
        } else {
            event.preventDefault()
            statusElm.append('<div>Email must contain (more than 5 character), @, .</div>')
        }

        if(subject.length > 2) {
            statusElm.append('<div>Nama is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Nama must contain more than 2 characters</div>')
        }

        if(message.length > 10) {
            statusElm.append('<div>Pesan is valid</div')
        } else {
            event.preventDefault()
            statusElm.append('<div>Pesan must contain more than 10 characters</div>')
        }

    })
})
