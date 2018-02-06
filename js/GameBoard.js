
 BattleShip.GameBoard = class{

  constructor(Player){
    
    this.board = [Array(10),Array(10),Array(10),Array(10),Array(10),Array(10),Array(10),Array(10),Array(10),Array(10)];
    this.pieces = {
      carrier : 5,
      battleship : 4,
      cruiser : 3,
      submarine : 3,
      destroyer : 2,
    };
    //this is just so you know what options are for directions.
    this.directions = ['horizontal','vertical'];
    if(Player.PlayerType == 'computer'){
      for(piece in this.pieces){
        let newPlacement = getNewPlacementFor(piece);
        this.placePiece(piece , newPlacement.location, newPlacement.direction);
      }
    }
    
  }

  

  placePiece(pieceName,location,direction){

  }

  checkMove(moveLocation){

  }

  callMove(){
    let move = getNextMove();
    
  }

  showPiece(pieceName, startLocation, direction ){

  }

  showOpponentCall(callLocationColumn,callLocationRow){

  }

 }