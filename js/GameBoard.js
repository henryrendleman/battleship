
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
    this.boardId = '';
    //this is just so you know what options are for directions.
    this.directions = ['horizontal','vertical'];
    if(Player.PlayerType == 'computer'){
      for(piece in this.pieces){
        let newPlacement = getNewPlacementFor(piece);
        this.placePiece(piece , newPlacement.location, newPlacement.direction);
      }
    }
    
  }

  setId(id){
    this.boardId = id;
  }
  
  getId(){
    return this.boardId;
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
    let _this = this;
    let currentlyPlace = 'none';
    $.each(_this.pieces,function(key,value) {
      if(_this.placedPieces.indexOf(key) < 0){
        currentlyPlace = key;
        return false;
      }
    });
    return currentlyPlace;
  }

  getCurrentlyPlacingPieceMessage(){
    let _this = this;
    let message = '';
    $.each(_this.pieces,function(key,value) {
      if(_this.placedPieces.indexOf(key) < 0){
        message = `Place the ${key} of ${value} pieces`;
        return false;
      }
    })
    return message;
  }

 }