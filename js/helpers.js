function getCellLocation(cell){
    return {row: cell.parentElement.rowIndex, column: cell.cellIndex}
}

function removeElementFromArray(value, array){
    let index = array.findIndex(element => element == value)
    array.splice(index,1)
}

function log_locked(){
    console.group('locked')
    console.log(`locked rows: ${lockedRows}`)
    console.log(`locked columns: ${lockedColumns}`)
    console.log(`locked principal diagonals: ${lockedPDiagonals}`)
    console.log(`locked secondary diagonals: ${lockedSDiagonals}`)
    console.groupEnd()
}