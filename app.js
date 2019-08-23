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
        console.log('grande')
    } else if (windowSize === 'extraLarge'){
        console.log('Muito grande')
    }
}

