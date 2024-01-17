const QUEEN_CLASS = 'queen'
const REINAS_RESTANTES = document.getElementById('restantes')
const REINAS_COLOCADAS = document.getElementById('colocadas')

var queens = 8

document.querySelectorAll('td').forEach(
    element => {
        element.addEventListener('click', handleClick)
    }
)

function handleClick(event){
    let cell = event.target
    let {row, column} = getCellLocation(cell)

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
    cell.classList.add(QUEEN_CLASS)
    queens--
}


function refreshScore(value){
    REINAS_RESTANTES.innerText = `Reinas restantes: ${value}`
    REINAS_COLOCADAS.innerText = `Reinas colocadas: ${(8-value)}`
    
}

function getCellLocation(cell){
    return {row: cell.parentElement.rowIndex, column: cell.cellIndex}
}