
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
    this.placedPieces = [];
    //this is just so you know what options are for directions.
    this.directions = ['horizontal','vertical'];
    if(Player.PlayerType == 'computer'){
      for(piece in this.pieces){
        let newPlacement = getNewPlacementFor(piece);
        this.placePiece(piece , newPlacement.location, newPlacement.direction);
      }
    }
    
  }

  
  /**
   * 
   * @param {string} pieceName is the name of the piece
   * @param {array} locations is an array of locations on the board that it will fill
   */
  placePiece(pieceName,locations){
    let allPlaced = false;
    

    return allPlaced;
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

  getCurrentlyPlacingPiece(){
    $.each(allPieces,function(key,value) {
      if(!this.placedPieces.contains(key)){
        return key;
      }
    })
    return 'none';
  }

  getCurrentlyPlacingPieceMessage(){
    $.each(allPieces,function(key,value) {
      if(!this.placedPieces.contains(key)){
        return `Place the ${key} of ${value} pieces`;
      }
    })
    return '';
  }

 }