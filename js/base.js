import { snakeSpeed, draw as drawSnake, update as updateSnake, getSnakeHead, snakeIntersection } from "./snake.min.js";

import {update as updateFood, draw as drawFood} from "./food.min.js"

import {outsideGrid} from "./grid.min.js"

export const moveUp = document.getElementById("move-up")
export const moveDown = document.getElementById("move-down")
export const moveLeft = document.getElementById("move-left")
export const moveRight = document.getElementById("move-right")

let lastRenderTime = 0;
let gameOver = false
const root = document.getElementById("root")

const main = (currentTime) => {
    if(gameOver){
        if(confirm("You lost. Press ok to restart")){
            window.location = "/"
        }
        return
    }


    window.requestAnimationFrame(main)
    const secSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if(secSinceLastRender < 1 / snakeSpeed) return

    lastRenderTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

const update = () => {
    updateSnake()
    updateFood(root)
    checkDeath()
}

const draw = () => {
    root.innerHTML = ''
    drawSnake(root)
    drawFood(root)
}

const checkDeath = () => {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}