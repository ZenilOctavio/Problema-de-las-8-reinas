var queens = 8

document.querySelectorAll('td').forEach(
    element => {
        element.addEventListener('click', handleClick)
    }
)

function handleClick(event){
    let cell = event.target
    let {row, column} = getCellLocation(cell)

}

function placeQueenLogic(cell){
    if (cell.classList.contains('queen'))
        quitQueen(cell) 
}

function getCellLocation(cell){
    return {row: cell.parentElement.rowIndex, column: cell.cellIndex}
}