

class Vacation{
  constructor(destination, length){
    this.destination = destination
    this.length = length
  }

  print(){
    console.log(`${this.destination} will take ${this.length} days.`)
  }
}

module.exports.Vacation = Vacation;
