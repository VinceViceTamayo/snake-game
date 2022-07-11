import { snakeSpeed, draw as drawSnake, update as updateSnake, getSnakeHead, snakeIntersection } from "./snake.min.js";

import {update as updateFood, draw as drawFood} from "./food.min.js"

import {outsideGrid} from "./grid.min.js"

import { scoreAccumulator } from "./snake.min.js";

export const moveUp = document.getElementById("move-up")
export const moveDown = document.getElementById("move-down")
export const moveLeft = document.getElementById("move-left")
export const moveRight = document.getElementById("move-right")

export const score = document.querySelector(".score")
export const highScore = document.querySelector(".high-score")

let lastRenderTime = 0;
let gameOver = false
const highScoreFromLocal = localStorage.getItem("highScore")
const root = document.getElementById("root")

highScoreFromLocal === null ? highScore.innerHTML = `High score: 0` : highScore.innerHTML = `High score: ${highScoreFromLocal}`

const main = (currentTime) => {
    if(gameOver){
        const highScoreFromLocal = localStorage.getItem("highScore")
        console.log(scoreAccumulator)
        console.log(highScoreFromLocal)

        if(!parseInt(highScoreFromLocal)){
            localStorage.setItem("highScore", scoreAccumulator)
        }

        if(parseInt(scoreAccumulator) > parseInt(highScoreFromLocal)){
            localStorage.setItem("highScore", parseInt(scoreAccumulator))
        }

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