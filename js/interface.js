function reset(){
    cells.forEach(cell => {
        if (cell.classList.contains(QUEEN_CLASS)){
            removeQueen(cell)
        }
        refreshScore(queens)
    })
}

function win(){
    alert('Encontraste una solución')
}