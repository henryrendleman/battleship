BattleShip.Player = class{

  constructor(opponentType){
    if(opponentType === 'undefined'){
      this.PlayerType = 'computer';
    }

  }
  //this is where you will make your own placement function
  getPlacementForPiece(pieceName){
    let returnLocation = {location : '' , direction : ''};
    switch(pieceName) {
      case 'carrier':
        returnLocation.direction = 'horizontal';
        returnLocation.location = '4:5';
        break;
      case 'battleship':
        returnLocation.direction = 'vertical';
        returnLocation.location = '5,10';
        break;
      case 'submarine':
        returnLocation.direction = 'vertical';
        returnLocation.location = '2:5';
        break;
      case 'cruiser':
        returnLocation.direction = 'horizontal';
        returnLocation.location = '8,2';
        break;
      case 'destroyer':
        returnLocation.direction = 'horizontal';
        returnLocation.location = '10,8';
        break;
    }
    return returnLocation;
  }

  //this is where you will make your own move functionality
  getNextMove(){

  }

}