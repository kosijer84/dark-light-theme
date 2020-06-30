const logoId = document.getElementById("cube")
const largeLogoId = document.getElementById('large-logo')
const upButton = document.getElementById('scroll-up')
let contactSection = document.getElementById('contact').offsetTop
let scrollTop = document.getElementById('scroll-up')
let scroll_position = 0;
let scroll_direction;

console.log('up button', upButton)

window.addEventListener('scroll', function(e){
    scroll_direction = (document.body.getBoundingClientRect()).top > scroll_position ? 'up' : 'down';
    scroll_position = (document.body.getBoundingClientRect()).top;
    let buttonTop = scrollTop.getBoundingClientRect().top + window.scrollY

    console.log('position', scroll_position)

    if (scroll_direction) {
        logoId.classList.remove('m-logo-scrolling-down')
    }
    if (scroll_position < -60) {
        logoId.classList.add('m-logo-scrolling-down')
    }

    //large logo scroll animation (move to the right corner)
    largeLogoId.style.right = scroll_position - 50 + 'px'
    largeLogoId.style.top = scroll_position + 'px'

    //change up button color on specific id
    document.documentElement.style.setProperty('--scroll-top', contactSection > buttonTop ? '#173d66' : '#fff')

    //show up button when scroll position is larger then 200px from the window top
    upButton.style.opacity = scroll_position > -150 ? null : '1'
});

