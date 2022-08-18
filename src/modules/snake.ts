class Snake {
  head: HTMLElement
  bodies: HTMLCollection
  element: HTMLElement
  constructor() {
    this.element = document.getElementById('snake')!
    this.head = document.querySelector('#snake>div')!
    this.element = document.getElementById('snake')!
    this.bodies = this.element.getElementsByTagName('div')
  }

  get X() {
    return this.head.offsetLeft
  }
  get Y() {
    return this.head.offsetTop
  }
  set X(value: number) {
    if (this.X == value) {
      return
    }
    //判断是否撞墙
    if (value < 0 || value > 290) {
      throw new Error('撞墙了')
    }
    //判断是否在掉头
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft == value) {
      // throw new Error('不可以掉头')
      if (value > this.X) {
        value = this.X - 10
      } else {
        value = this.X + 10
      }
    }
    this.moveBody()
    this.head.style.left = value + 'px'
    this.checkHeadBody()
  }
  set Y(value: number) {
    if (this.Y == value) {
      return
    }
    //判断是否撞墙
    if (value < 0 || value > 290) {
      throw new Error('撞墙了')
    }
    //判断是否在掉头
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop == value) {
      // throw new Error('不可以掉头')
      if (value > this.Y) {
        value = this.Y - 10
      } else {
        value = this.Y + 10
      }
    }
    this.moveBody()
    this.head.style.top = value + 'px'
    this.checkHeadBody()
  }
  addBody() {
    this.element.insertAdjacentHTML('beforeend', '<div></div>')
  }
  moveBody() {
    for (let i = this.bodies.length - 1; i > 0; i--) {
      ;(this.bodies[i] as HTMLElement).style.left = (this.bodies[i - 1] as HTMLElement).offsetLeft + 'px'
      ;(this.bodies[i] as HTMLElement).style.top = (this.bodies[i - 1] as HTMLElement).offsetTop + 'px'
    }
  }
  checkHeadBody() {
    for (let i = 1; i < this.bodies.length; i++) {
      if (this.head.offsetLeft == (this.bodies[i] as HTMLElement).offsetLeft && this.head.offsetTop == (this.bodies[i] as HTMLElement).offsetTop) {
        throw new Error('撞到了自己')
      }
    }
  }
}

export default Snake
