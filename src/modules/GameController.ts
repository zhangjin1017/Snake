import Snake from "./snake";
import Food from "./food";
import ScorePanel from "./ScorePanel";
class GameController{
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    direction:String='';
    isLived:boolean = true;
    constructor(){
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel(10,2);
        this.init();
    }
    init(){
      document.addEventListener("keydown", this.keydownHandler.bind(this));
      this.run();
     
    }
    keydownHandler(e: KeyboardEvent){
      this.direction = e.key;
    }
    run(){
      let X = this.snake.X;
      let Y = this.snake.Y;

      switch(this.direction){
        case 'ArrowUp':
          Y-=10;
          break;
        case 'ArrowDown':
          Y+=10;
          break;
        case 'ArrowLeft':
          X-=10;
          break;
        case 'ArrowRight':
          X+=10;
          break;
      }
      // this.snake.moveBody();
      this.CheckEat(X,Y);
      try{
        this.snake.X = X;
        this.snake.Y = Y;
      }catch(e){
        this.isLived = false;
        alert(e);
        return;
      }
      

      this.isLived&&setTimeout(this.run.bind(this),300-(this.scorePanel.level-1)*30);
    }
    //吃到食物
    CheckEat(X:number,Y:number){
      if(this.food.X == X && this.food.Y == Y){
        this.snake.addBody();
        this.food.change();
        this.scorePanel.addScore();
      }
    }
}

export default GameController;