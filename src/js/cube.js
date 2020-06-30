let delay = 45;

const animate = () => {
    const squares = document.getElementsByClassName('square');
    for (let i = 0; i < squares.length; ++i) {
        setTimeout(() => squares[i].classList.add('visible'), delay * 2 * i)
    }
};

const squares = document.querySelectorAll('[data-type="cube"]');

for (let i = 0; i < squares.length; ++i) {
    //create logo boxes elements
    for(let j = 0; j < 5; j++) {
        const topDiv = document.createElement('div')
        topDiv.className = "square"
        squares[i].querySelector('[data-type="top"]').append(topDiv)

        const frontDiv = document.createElement('div')
        frontDiv.className = "square"
        squares[i].querySelector('[data-type="front"]').append(frontDiv)
    }

    //create logo boxes elements
    for(let j = 0; j < 6; j++) {
        const rightDiv = document.createElement('div')
        rightDiv.className = 'square'
        squares[i].querySelector('[data-type="right"]').append(rightDiv)

        const miniCube = document.createElement('div')
        miniCube.className = 'square minicube-face'
        squares[i].querySelector('[data-type="minicube"]').append(miniCube)
    }

    //make visible cube on the end
    let positions = ['top', 'front', 'left', 'right', 'back', 'bottom']
    let elem = squares[i].getElementsByClassName('minicube-face')
    for (let i = 0; i < elem.length; i++) {
        elem[i].className += ' ' + positions[i]
    }
}

animate();