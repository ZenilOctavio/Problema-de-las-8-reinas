const QUEEN_CLASS = 'queen'
const LOCKED_CLASS = 'locked'
const REINAS_RESTANTES = document.getElementById('restantes')
const REINAS_COLOCADAS = document.getElementById('colocadas')


var lockedCells = new Set()
var queens = 8
var placedQueens = []
var cells = document.querySelectorAll('td')

cells.forEach(
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

    refreshScore(queens)
    
}

function placeQueen(cell){
    if (queens > 8 || queens <= 0)
        return
    if (cell.classList.contains(LOCKED_CLASS))
        return

    cell.classList.add(QUEEN_CLASS)
    let location = getCellLocation(cell)
    placedQueens.push(location)
    lockQueenMovements(location.row, location.column)
    cell.classList.remove(LOCKED_CLASS)
    lockedCells.delete(cell)
    queens--
}

function removeQueen(cell){
    cell.classList.remove(QUEEN_CLASS)

    let {row, column} = getCellLocation(cell)
    let index = placedQueens.findIndex((element) => element.row == row && element.column == column)
    placedQueens.splice(index,1)
    queens++
}

function lockQueenMovements(row, column){
    lockColumns(column)
    lockRows(row)
}

function lockColumns(column){
    console.log('Locking columns')
    cells.forEach((cell) => {
        console.log(cell.cellIndex, column)
        if (cell.cellIndex == column && !cell.classList.contains(QUEEN_CLASS)){
            cell.classList.add(LOCKED_CLASS)
            lockedCells.add(cell)
            console.log(lockedCells)
        }
})
}

function lockRows(row){
    console.log('Locking rows')
    cells.forEach((cell) => {
        if (cell.parentElement.rowIndex == row && !cell.classList.contains(QUEEN_CLASS)){
            cell.classList.add(LOCKED_CLASS)
            lockedCells.add(cell)
            console.log(lockedCells)
        }
    })
}

function lockCell(cell){
    cell.classList.add(LOCKED_CLASS)
}


function refreshScore(value){
    REINAS_RESTANTES.innerText = `Reinas restantes: ${value}`
    REINAS_COLOCADAS.innerText = `Reinas colocadas: ${(8-value)}`
    
}

function getCellLocation(cell){
    return {row: cell.parentElement.rowIndex, column: cell.cellIndex}
}