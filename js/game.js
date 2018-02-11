var BattleShip = {};
var player1 = {player : '', board : ''};
var player2 = {player : '', board : ''};

function setupGame(event){
  event.stopPropagation();
  player1.player = new BattleShip.Player('human', `Player 1`);
  player1.board = new BattleShip.GameBoard(player1.player);
  player1.board.setId('player1Board');
  askPlayerToPlacePieces(player1);
  if( $('#numberOfPlayers').val() >= 2 ){
    for(let player = 2; player <= $('#numberOfPlayers').val(); player++){
      eval('player'+player).player = new BattleShip.Player('human', `Player ${player}`);
      eval('player'+player).board = new BattleShip.GameBoard(eval('player'+player).player);
      eval('player'+player).board.setId(`player${player}Board`);
      askPlayerToPlacePieces(eval('player'+player));
    }
  }
  else{
    /* you will want to change this a little if you have more than 2 players */
    player2.player = new BattleShip.Player();
    player2.board = new BattleShip.GameBoard(player2.player);
  }
}

function askPlayerToPlacePieces(player){
  
  $('#'+player.board.getId()+' td').not('.navigation').on('click',function(event){
    event.stopPropagation();
    let currentPiece = player.board.getCurrentlyPlacingPiece();
    if($(this).hasClass(currentPiece)){
      $(this).removeClass(currentPiece);
    } else{
      $(this).addClass(currentPiece);
    }
    let allThisPiecePlaced = player.board.placePiece(currentPiece,getLocationsForPlacedPiece(player.board,currentPiece));
    if(allThisPiecePlaced){
      let message = player.board.getCurrentlyPlacingPieceMessage();
      console.log(message);
      if(message.length > 0){
        $('#messageCenter').html(message);
      }
      else{
        $('#'+player.board.getId()+' td').not('.navigation').off('click');
        return false;
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