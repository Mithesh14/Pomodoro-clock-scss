class Pomodoro {
  constructor() {
    this.buttons = {
      start: $('#start'),
      reset: $('#reset'),
      sessionUp: $('#sessionup'),
      sessionDown: $('#sessiondown')
    }
    this.sessionInput = $('#sessioninput')
    this.minutes = 14
    this.countdown
    this.playing = false
    
    this.registerEvents()  
  }
  registerEvents() {
    this.buttons.sessionDown.on('click', () => {
      if (this.playing === true) {
        return
      }
      if (this.minutes > 1) {
        this.minutes--
        $('#minutes').html(this.minutes < 10 ? '0' + this.minutes : this.minutes)
      }
    })
    this.buttons.sessionUp.on('click', () => {
      if (this.playing === true) {
        return
      }
      if (this.minutes < 50) {
        this.minutes++
        $('#minutes').html(this.minutes < 10 ? '0' + this.minutes : this.minutes)
      }
    })
    this.buttons.reset.on('click', () => {
      $('#minutes').html(this.minutes < 10 ? '0' + this.minutes : this.minutes)
      $('#seconds').html('00')
      this.playing = false
      clearInterval(this.countdown)
    })
    
    this.buttons.start.on('click', () => {
      const duration = this.minutes * 60
      this.startCount(duration)
    })
  }
  startCount(duration) {
    this.playing = true
    this.countdown = setInterval(() => {
      let minutes = parseInt(duration / 60, 10)
      let seconds = parseInt(duration % 60, 10)
      
      minutes = minutes < 10 ? '0' + minutes : minutes
      seconds = seconds < 10 ? '0' + seconds : seconds
      
      $('#minutes').html(minutes)
      $('#seconds').html(seconds)
      
      if (--duration < 0) {
        clearInterval(this.countdown)
        
        this.playing = false
        return
      }
    }, 1000)
  }

}

const clock = new Pomodoro()