// Part I:
// In this exercise, you’ll write some jQuery statements to perform some DOM manipulation

// Complete the following steps in the following index.html file

// 1. When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”
// 2. Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
// 3. Remove the last paragraph in the article.
// 4. Set the font size of the title to be a random pixel size from 0 to 100.
// 5. Add an item to the list; it can say whatever you want.
// 6. Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.
// 7. When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.
// 8. Add an event listener so that when you click on the image, it is removed from the DOM.


// 1.
function message() {
    console.log("Let's get ready to party with jQuery!")
}

message()

// 2.
$('img').attr('class', 'image-center')

// 3
$('p:nth-of-type(6)').remove()


// 4.
$('h1').css('font-size', `${Math.floor(Math.random() * 100) + 1}px`)


// 5.
$('ol').append('<li>I love puppies!</li>')

// 6.
$('h4').remove()

$('ol').remove()

$('aside').append("<p>Apologies for the list's existence</p>")


// 7.

$('.form-control').eq(0).val()
$('.form-control').eq(1).val()
$('.form-control').eq(2).val()


$('.col-sm-4').on('input', 'input', function () {
    $('body').css('background-color', `rgb(${$('.form-control').eq(0).val()}, ${$('.form-control').eq(1).val()}, ${$('.form-control').eq(2).val()})`)
})


// 8.

$('img').on('click', function () {
    $('img').remove();
})




// Part II:

let titleInputs = []

$('form').on('submit', function () {
    event.preventDefault();

    titleInputs.push($('#title').val())

    if ($('#rating').val() >= 0 && $('#rating').val() <= 10) {
        if ($('#title').val().length >= 2) {
            $('<li></li>').text(`${$('#title').val()} has a rating of ${$('#rating').val()}`).append('<button>Remove</button>').appendTo('ul')
        } else {
            alert('Please input a title with 2 or more characters')
        }
    } else {
        alert('Please input a rating between 0 and 10')
    }

    $('#title').val('')
    $('#rating').val('')
})


$('#sortBtn').on('click', function () {

    let alphabetizedInputs = titleInputs.sort()

    for (let val of alphabetizedInputs) {
        for (let i = 0; i <= titleInputs.length; i++) {
            if ($('li').eq(i).text().indexOf(val) > -1) {

                $('li').eq(i).appendTo('ul')
            }
        }
    }
})


$('ul').on('click', 'button', function () {
    $(this).parent("li").remove();
})