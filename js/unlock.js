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