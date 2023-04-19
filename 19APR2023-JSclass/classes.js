class Animal {
    constructor(name){
        this.speed = 0;
        this.name = name;
    }
    run(speed){
        this.speed = speed;
        console.log(`${this.name} is running at ${this.speed} km per hour`)
    }
}
 class Rabbit extends Animal{}

 const rabbit = new Rabbit ("Teddy")
 console.log(rabbit)
 rabbit.run(15)