import Snake from "./snake";
class Food {
  element: HTMLElement
  snake: Snake
  constructor() {
    this.element = document.getElementById('food')!
    this.snake=new Snake();
  }
  get X() {
    return this.element.offsetLeft
  }
  get Y() {
    return this.element.offsetTop
  }
  //修改食物位置
  change() {
    //食物不能生成在蛇身上
    let flag = true
    let X = Math.floor(Math.random() * 29) * 10
      let Y = Math.floor(Math.random() * 29) * 10
    while (flag) {
      
      for (let i = 0; i < this.snake.bodies.length; i++) {
        if ((this.snake.bodies[i] as HTMLElement).offsetLeft == X && (this.snake.bodies[i] as HTMLElement).offsetTop == Y) {
          flag = true
          break
        } else {
          flag = false
        }
      }
    }
    this.element.style.left = X + 'px'
    this.element.style.top = Y + 'px'

    //   this.element.style.left = Math.round(Math.random()*29)*10+"px";
    //   this.element.style.top = Math.round(Math.random()*29)*10+"px";
  }
}

export default Food
