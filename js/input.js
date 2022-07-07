import {moveUp, moveDown, moveLeft, moveRight} from "./base.min.js"

let inputDirection = {x:0, y: 0}
let lastInputDirection = {x:0, y: 0}

window.onload = () => {
    moveUp.addEventListener("click", (e) => {
        console.log(e)
        inputDirection = {x:0, y: -1}
    })

    moveDown.addEventListener("click", () => {
        inputDirection = {x:0, y: 1}
    })

    moveLeft.addEventListener("click", () => {
        inputDirection = {x: -1, y: 0}
    })

    moveRight.addEventListener("click", () => {
        inputDirection = {x: 1, y: 0}
    })
}

window.addEventListener("keydown", e => {
    switch(e.key){
        case 'ArrowUp':
            if(lastInputDirection.y !== 0) break
            moveUp.click()
            break
        case 'ArrowDown':
            if(lastInputDirection.y !== 0) break
            moveDown.click()
            break
        case 'ArrowLeft':
            if(lastInputDirection.x !== 0) break
            moveLeft.click()
            break
        case 'ArrowRight':
            if(lastInputDirection.x !== 0) break
            moveRight.click()
            break
    }
})

export const getInputDirection = () => {
    lastInputDirection = inputDirection
    return inputDirection
}