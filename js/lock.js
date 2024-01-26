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
    lockedColumns.push(column)
}

function lockRow(row){
    console.log('Locking rows')
    cells.forEach((cell) => {
        if (cell.parentElement.rowIndex == row && !cell.classList.contains(QUEEN_CLASS)){
            lockCell(cell)

        }
    })

    lockedRows.push(row)
}

function lockPrincipalDiagonal(row,column){
    let difference = row - column
    
    cells.forEach(cell => {
        let currentCellDifference = cell.parentElement.rowIndex - cell.cellIndex

        if (difference == currentCellDifference && !cell.classList.contains(QUEEN_CLASS)){
            lockCell(cell)

        }

    })
    lockedPDiagonals.push(difference)
}

function lockSecondaryDiagonal(row, column){
    let addition = row + column

    cells.forEach(cell => {
        let currentCellAddition = cell.parentElement.rowIndex + cell.cellIndex

        if (addition == currentCellAddition && !cell.classList.contains(QUEEN_CLASS)){
            lockCell(cell)

        }

    })
    lockedSDiagonals.push(addition)
}

function lockCell(cell){
    cell.classList.remove(AVAILABLE_CLASS)
    cell.classList.add(LOCKED_CLASS)
}

function markAvailableOnes(){
    cells.forEach(cell => {
        if (!cell.classList.contains(LOCKED_CLASS) && !cell.classList.contains(QUEEN_CLASS)){
            cell.classList.add(AVAILABLE_CLASS)
        }
    })
}

function unMarkAvailableOnes(){
    cells.forEach(cell => {
        if (cell.classList.contains(AVAILABLE_CLASS)){
            cell.classList.remove(AVAILABLE_CLASS)
        }
    })
}