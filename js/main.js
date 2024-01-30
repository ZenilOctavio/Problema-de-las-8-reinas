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
    cell.classList.remove(AVAILABLE_CLASS)
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


function fillDashboard(){
    let list = document.querySelector('section#soluciones > ul')
    
    for (let i = 0; i < 7; i++){
        list.innerHTML += `<li>
        <table>
            <tbody>
                <tr>
                    <td class="queen"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    
        <div>
            <button class="cargar">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 19H21V21H3V19ZM13 5.82843V17H11V5.82843L4.92893 11.8995L3.51472 10.4853L12 2L20.4853 10.4853L19.0711 11.8995L13 5.82843Z"></path></svg>
            </button>   
            <button class="eliminar">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>
            </button> 
        </div>  
    </li>`
    }
}
fillDashboard()