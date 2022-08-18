class ScorePanel{
  score=0;
  level=1;
  scoreElement: HTMLElement;
  levelElement: HTMLElement;
  //最大等级
  maxLevel:number;
  //升级分数
  upScore:number;
  constructor(maxLevel:number=10,upScore:number=10){
      this.scoreElement = document.getElementById("score")!;
      this.levelElement = document.getElementById("level")!;
      this.maxLevel = maxLevel;
      this.upScore = upScore;
  }

  addScore(){
      this.score++;
      if(this.score%this.upScore==0){
          this.addLevel();
      }
      this.scoreElement.innerHTML = this.score.toString();
  }
  addLevel(){
      //等级上限10
      if(this.level<this.maxLevel){
      this.level++;
      this.levelElement.innerHTML = this.level.toString();
      }
  }


}

export default ScorePanel;