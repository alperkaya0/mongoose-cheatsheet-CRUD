const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB");//Creates fruitsDB database if there is no database named 'fruitsDB'

const fruitSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Please don't skip the name part"]
    },
    rating : {
        type : Number,
        min : 1,
        max : 10
    },
    review : String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name : "Apple",
    rating : 7,
    review : "Hehe spam."
});

//CREATE ONE
//fruit.save(); //This creates a new Peach, and if there is no fruits collection, will create that too


/* Relation Example
const personSchema = new mongoose.Schema( {
    name : {
        type : String,
        required : [true, "Please don't skip the name part"]
    },
    age : Number,
    favoriteFruit : fruitSchema
});

const Person = mongoose.model("Person", personSchema);

let updatedApple = fruit;

Fruit.find(function(err,fruits) {
    if (err) {
        console.log(err);
    } else {
        fruits.forEach(element => {
            if (element.name === "Updated Apple") {
                updatedApple = element;
                const person = new Person({
                    name : "John",
                    age : 37,
                    favoriteFruit : updatedApple
                });
                
                person.save();
            }
        });
    }
})
*/

/* READ
Fruit.find(function(err,fruits) {
    mongoose.connection.close();
    if (err) {
        console.log(err);
    }else {
        fruits.forEach(element => {
            console.log(element.name);
        })
    }
});
*/

/* DELETE ONE ELEMENT
Fruit.deleteOne({_id : "6206ff657cc874329da9e632"},function(err) {
    if (err) {
        console.log(err);
    }else {
        console.log("Successfully deleted, 6206ff657cc874329da9e632");
    }
});
*/

/* UPDATE ONE ELEMENT
Fruit.updateOne({_id : "6206e21ca7101e9104b6eb24"}, {name : "Updated Apple"}, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfuly updated 6206e21ca7101e9104b6eb24");
    }
});
*/

/* DELETE MANY ELEMENTS
Fruit.deleteMany({review : "Hehe spam."},function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully deleted spams.");
    }
});
*/