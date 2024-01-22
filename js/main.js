// loadScript('js/logger.js')

const QUEEN_CLASS = 'queen'
const LOCKED_CLASS = 'locked'
const REINAS_RESTANTES = document.getElementById('restantes')
const REINAS_COLOCADAS = document.getElementById('colocadas')


// var lockedCells = new Set()
var queens = 8
var placedQueens = []
var cells = document.querySelectorAll('td')
var ocupiedPDiagonals = []
var ocupiedSDiagonals = []
var ocupiedColumns = []
var ocupiedRows = []

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
    log_ocupied()
    queens--
}

function log_ocupied(){
    console.group('Ocupied')
    console.log(`Ocupied rows: ${ocupiedRows}`)
    console.log(`Ocupied columns: ${ocupiedColumns}`)
    console.log(`Ocupied principal diagonals: ${ocupiedPDiagonals}`)
    console.log(`Ocupied secondary diagonals: ${ocupiedSDiagonals}`)
    console.groupEnd()
}

function removeQueen(cell){
    cell.classList.remove(QUEEN_CLASS)

    let {row, column} = getCellLocation(cell)
    let index = placedQueens.findIndex((element) => element.row == row && element.column == column)
    placedQueens.splice(index,1)
    unlockQueenMovements(row, column)
    log_ocupied()
    queens++
}

function lockQueenMovements(row, column){
    lockColumn(column)
    lockRow(row)
    lockPrincipalDiagonal(row, column)
    lockSecondaryDiagonal(row, column)

}

function lockColumn(column){
    console.log('Locking columns')
    cells.forEach((cell) => {
        // console.log(cell.cellIndex, column)
        if (cell.cellIndex == column && !cell.classList.contains(QUEEN_CLASS)){
            lockCell(cell)

        }
    })
    ocupiedColumns.push(column)
}

function lockRow(row){
    console.log('Locking rows')
    cells.forEach((cell) => {
        if (cell.parentElement.rowIndex == row && !cell.classList.contains(QUEEN_CLASS)){
            lockCell(cell)

        }
    })

    ocupiedRows.push(row)
}

function lockPrincipalDiagonal(row,column){
    let difference = row - column
    
    cells.forEach(cell => {
        let currentCellDifference = cell.parentElement.rowIndex - cell.cellIndex

        if (difference == currentCellDifference && !cell.classList.contains(QUEEN_CLASS)){
            lockCell(cell)

        }

    })
    ocupiedPDiagonals.push(difference)
}

function lockSecondaryDiagonal(row, column){
    let addition = row + column

    cells.forEach(cell => {
        let currentCellAddition = cell.parentElement.rowIndex + cell.cellIndex

        if (addition == currentCellAddition && !cell.classList.contains(QUEEN_CLASS)){
            lockCell(cell)

        }

    })
    ocupiedSDiagonals.push(addition)
}

function lockCell(cell){
    cell.classList.add(LOCKED_CLASS)
    // lockedCells.add(cell)
    // console.log(lockedCells)
}

function unlockQueenMovements(row, column){
    unlockColumn(column)
    unlockRow(row)
    unlockPrincipalDiagonal(row, column)
    unlockSecondaryDiagonal(row, column)
}

function unlockColumn(column){
    removeElementFromArray(column, ocupiedColumns)
    cells.forEach(
        cell => {
            if (cell.cellIndex == column)
                unlockCell(cell)
        }
    )
}

function unlockRow(row){
    removeElementFromArray(row, ocupiedRows)
    cells.forEach(
        cell => {
            if (cell.parentElement.rowIndex== row)
                unlockCell(cell)
        }
    )
}

function unlockPrincipalDiagonal(row, column){
    let difference = row - column
    removeElementFromArray(difference, ocupiedPDiagonals)
    cells.forEach(
        cell => {
            let currentDifference = cell.parentElement.rowIndex - cell.cellIndex
            if (currentDifference == difference)
                unlockCell(cell)
        }
    )
}

function unlockSecondaryDiagonal(row, column){
    let addition = row + column
    removeElementFromArray(addition, ocupiedSDiagonals)
    cells.forEach(
        cell => {
            let currentAddition = cell.parentElement.rowIndex + cell.cellIndex
            if (currentAddition == addition)
                unlockCell(cell)
        }
    )

}

function unlockCell(cell){
    let {row, column} = getCellLocation(cell)
    let pDiagonalId = row - column
    let sDiagonalId = row + column

    if (ocupiedPDiagonals.includes(pDiagonalId))    return
    if (ocupiedSDiagonals.includes(sDiagonalId))    return
    if (ocupiedColumns.includes(column))    return
    if (ocupiedRows.includes(row))  return

    cell.classList.remove(LOCKED_CLASS)

}

function refreshScore(value){
    REINAS_RESTANTES.innerText = `Reinas restantes: ${value}`
    REINAS_COLOCADAS.innerText = `Reinas colocadas: ${(8-value)}`
    
}

function getCellLocation(cell){
    return {row: cell.parentElement.rowIndex, column: cell.cellIndex}
}

function removeElementFromArray(value, array){
    let index = array.findIndex(element => element == value)
    array.splice(index,1)
}

// function loadScript(url){
//     let head = document.getElementsByTagName('head')[0]
//     let script = document.createElement('script')
//     script.type = 'text/javascript'
//     script.src = url
//     head.appendChild(script)
// }