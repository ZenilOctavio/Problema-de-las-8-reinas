function reset(){
    cells.forEach(cell => {
        if (cell.classList.contains(QUEEN_CLASS)){
            removeQueen(cell)
        }
        queens = 8
        refreshScore(queens)
    })
}

function win(){
    confetti()
    window.modal.showModal()
}