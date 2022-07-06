import {onSnake, expandSnake} from "./snake.min.js"
import { randomGridPosition} from "./grid.min.js"

let food = { x: 5, y: 2}
const expansionRate = 1

export const update = () => {
    if(onSnake(food)){
        expandSnake(expansionRate)
        food = getRandomFoodPosition()
    }
}

export const draw = (root) => {
    const foodElement = document.createElement("div")
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add("food")
    root.appendChild(foodElement)
}

const getRandomFoodPosition = () => {
    let newFoodPosition
    while(newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}