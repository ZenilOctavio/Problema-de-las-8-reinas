function getCellLocation(cell){
    return {row: cell.parentElement.rowIndex, column: cell.cellIndex}
}

function removeElementFromArray(value, array){
    let index = array.findIndex(element => element == value)
    array.splice(index,1)
}

function log_ocupied(){
    console.group('Ocupied')
    console.log(`Ocupied rows: ${ocupiedRows}`)
    console.log(`Ocupied columns: ${ocupiedColumns}`)
    console.log(`Ocupied principal diagonals: ${ocupiedPDiagonals}`)
    console.log(`Ocupied secondary diagonals: ${ocupiedSDiagonals}`)
    console.groupEnd()
}