/*ChessBoard of 8 x 8 */
let board = ""
for (let row = 0; row < 8; row++) {
  for (let column = 0; column < 8; column++) {
    if ((row + column) % 2 === 0){
      board += " ";
    }else{
      board += "#"
    }
  }
  board += "\n"
}
console.log(board)