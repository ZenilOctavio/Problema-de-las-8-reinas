const QUEEN_CLASS = 'queen'
const REINAS_RESTANTES = document.getElementById('restantes')
const REINAS_COLOCADAS = document.getElementById('colocadas')

var queens = 8
var placedQueens = []

document.querySelectorAll('td').forEach(
    element => {
        element.addEventListener('click', handleClick)
    }
)

function handleClick(event){
    let cell = event.target
    placeQueenLogic(cell)
}

function placeQueenLogic(cell){
    if (cell.classList.contains('queen'))
        removeQueen(cell)
    else
        placeQueen(cell)

    console.log(placedQueens)
    refreshScore(queens)
    
}

function placeQueen(cell){
    if (queens > 8 || queens <= 0)
        return
    cell.classList.add(QUEEN_CLASS)
    placedQueens.push(getCellLocation(cell))
    queens--
}

function removeQueen(cell){
    cell.classList.remove(QUEEN_CLASS)

    let {row, column} = getCellLocation(cell)
    let index = placedQueens.findIndex((element) => element.row == row && element.column == column)
    placedQueens.splice(index,1)
}


function refreshScore(value){
    REINAS_RESTANTES.innerText = `Reinas restantes: ${value}`
    REINAS_COLOCADAS.innerText = `Reinas colocadas: ${(8-value)}`
    
}

function getCellLocation(cell){
    return {row: cell.parentElement.rowIndex, column: cell.cellIndex}
}