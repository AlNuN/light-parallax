// set global variables
let windowSize = null;
let newSize = null;

window.onload = () => {
    windowSize = getWindowSize()
    manageWindowSize()
}

window.onresize = () => {
    newSize = getWindowSize()
    if (windowSize != newSize){
        windowSize = newSize
        manageWindowSize()
    }
}

function getWindowSize() {

    let sizes = [
        {name: 'extraSmall', min: 0, max: 576, index: 0},
        {name: 'small', min: 576 , max: 768, index: 1},
        {name: 'medium', min: 768, max: 992, index: 2},
        {name: 'large', min: 992, max: 1200, index: 3},
        {name: 'extraLarge', min: 1200, max: 10000, index: 4},
    ]

    let size = sizes.filter(item => item.min <= window.innerWidth && item.max > window.innerWidth) 

    return size[0].name

}

function manageWindowSize(){
    if (windowSize == 'extraSmall'){
        console.log('Bem pequena')
    } else if(windowSize === 'small'){
        console.log('Pequena')
    } else if (windowSize === 'medium'){
        console.log('média')
    } else if (windowSize === 'large'){
    } else if (windowSize === 'extraLarge'){
        cardSize()
    }
}

function cardSize () {
    let containerWidth = document.getElementById('cards-container').offsetWidth
    let cardLength = document.querySelectorAll('#cards-container')[0].children.length
    for (i = 1; i <= cardLength; i++){
        let card = document.getElementById("card-" + i)
        card.style.width = ((containerWidth / 4) - 40) + 'px'
    }
    let cardWidth = document.getElementById('card-1').offsetWidth
    document.getElementById('cards-container').style.margin = '0 ' +  ((containerWidth - (cardWidth * 4)) / 5) + 'px'
    let spaceBetween =  Number(document.getElementById('cards-container').style.marginLeft.replace('px', ''))
    let nextCard = parseInt(cardWidth + spaceBetween)
    cardAnimation(1, 0, 0)
    cardAnimation(2, 0, nextCard)
    cardAnimation(3, 0, nextCard*2)
    cardAnimation(4, 0, nextCard*3)
    cardAnimation(5, 200, 0)
    cardAnimation(6, 200, nextCard)
    cardAnimation(7, 200, nextCard*2)
    cardAnimation(8, 200, nextCard*3)
}

function cardAnimation (cardNumber, yfinal, xfinal) {
    console.log(xfinal)
    let card = document.getElementById('card-' + cardNumber)
    let posy = 0
    let posx = 0
    let id = setInterval(frame, 0.3);
    let idx = setInterval(framex, 0.3);
    function frame() {
        if (posy === yfinal){
            clearInterval(id)
        } else {
            posy++
            card.style.top = posy + 'px'
        }
    }
    function framex() {
        if (posx == xfinal){
            clearInterval(idx)
        } else {
            posx++
            card.style.left = posx + 'px'
        }
    }
}
