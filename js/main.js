var queens = 8
var placedQueens = []
var cells = document.querySelectorAll('td')
var lockedPDiagonals = []
var lockedSDiagonals = []
var lockedColumns = []
var lockedRows = []

cells.forEach(
    cell => {
        cell.addEventListener('click', handleClick)
        // log('eventListener added')
        // let {row, column} = getCellLocation(cell)
        // cell.innerText = `(${row},${column})`
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
    // lockedCells.delete(cell)
    log_locked()
    queens--

    if (queens == 1){
        markAvailableOnes()
    }

    if (queens == 0){
        win()
    }
}



function removeQueen(cell){
    cell.classList.remove(QUEEN_CLASS)

    let {row, column} = getCellLocation(cell)
    let index = placedQueens.findIndex((element) => element.row == row && element.column == column)
    placedQueens.splice(index,1)
    unlockQueenMovements(row, column)
    log_locked()
    queens++
    if (queens == 2){
        unMarkAvailableOnes()
    }
}

function refreshScore(value){
    REINAS_RESTANTES.innerText = `${value}`
    REINAS_COLOCADAS.innerText = `${(8-value)}`  
}