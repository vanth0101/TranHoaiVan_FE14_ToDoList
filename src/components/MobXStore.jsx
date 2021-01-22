import { makeAutoObservable } from "mobx"

class Timer {
    secondsPassed = 0;
    username = 'EOI.DC';
    constructor() {
      makeAutoObservable(this)
  }
  setUsername(value) {
    this.username = value;
  }
    increase() {
      this.secondsPassed += 1
    }
    reset() {
      this.secondsPassed = 0
    }
}
  
const myTimer = new Timer()

export default myTimer;