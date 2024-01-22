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