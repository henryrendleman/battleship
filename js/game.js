var BattleShip = {};
var player1 = {player : '', board : ''};
var player2 = {player : '', board : ''};

function setupGame(){
  player1.player = new BattleShip.Player('human', `Player 1`);
  player1.board = new BattleShip.GameBoard(player1.player);
  player1.board.setId('player1Board');
  askPlayerToPlacePieces(player1);
  // if( $('#numberOfPlayers').val() == 2 ){
  //   player2.player = new BattleShip.Player('human', `Player 2`);
  //   player2.board = new BattleShip.GameBoard(player2.player);
  // }
  // else{
  //   player2.player = new BattleShip.Player();
  //   player2.board = new BattleShip.GameBoard(computerPlayer);
  // }
}

function askPlayerToPlacePieces(player){
  
  $('#'+player.board.getId()+' td').not('.navigation').on('click',function(){
    let currentPiece = player.board.getCurrentlyPlacingPiece();
    if($(this).hasClass(currentPiece)){
      $(this).removeClass(currentPiece);
    } else{
      $(this).addClass(currentPiece);
    }
    let allThisPiecePlaced = player.board.placePiece(currentPiece,getLocationsForPlacedPiece(player.board,currentPiece));
    if(allThisPiecePlaced){
      let message = player.board.getCurrentlyPlacingPieceMessage();
      if(message.length){
        $('#messageCenter').html(message);
      }
      else{
        $('#'+player.board.getId()+' td').not('.navigation').off('click');
      }
    }
  });
  $('#messageCenter').html(player.board.getCurrentlyPlacingPieceMessage());

}

function getLocationsForPlacedPiece(board,pieceName){
  let positions = [];
  $('#'+board.getId()).find('.'+pieceName).each(function(){
    positions.push([parseInt($(this).parent().children().first().html()),$(this).prevAll().length-2]);
  })
  console.log(positions);
  return positions;
}