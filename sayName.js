//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
var Person = function(name, age){
    this.name = name;
    this.age = age;
};

//Now create three instances of Person with data you make up

  //code here
var zach = new Person('zach andrews',10);
var alisha = new Person('alisha nielson', 20);
var thor = new Person('thor', 1000);

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
var Person = function(name, age, sayName){
    this.name = name;
    this.age = age;
    this.sayName = function(){
        alert(this.name);
    }
};