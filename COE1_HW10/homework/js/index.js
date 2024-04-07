'use strict';


function PizzaException(log) {
    this.log = log;
}

function Pizza(size, type) {
    if (arguments.length !== 2) {
        throw new PizzaException("Required two arguments, given: " + arguments.length);
    }
    if (!Pizza.allowedSizes.includes(size) || !Pizza.allowedTypes.includes(type)) {
        throw new PizzaException("Invalid size or type");
    }

    this.size = size;
    this.type = type;
    this.extraIngredients = [];
}


Pizza.SIZE_S = 'S';
Pizza.SIZE_M = 'M';
Pizza.SIZE_L = 'L';

Pizza.TYPE_VEGGIE = 'Veggie';
Pizza.TYPE_MARGHERITA = 'Margherita';
Pizza.TYPE_PEPPERONI = 'Pepperoni';

Pizza.EXTRA_TOMATOES = 'Tomatoes';
Pizza.EXTRA_CHEESE = 'Cheese';
Pizza.EXTRA_MEAT = 'Meat';


Pizza.allowedSizes = [Pizza.SIZE_S, Pizza.SIZE_M, Pizza.SIZE_L];
Pizza.allowedTypes = [Pizza.TYPE_VEGGIE, Pizza.TYPE_MARGHERITA, Pizza.TYPE_PEPPERONI];
Pizza.allowedExtraIngredients = [Pizza.EXTRA_TOMATOES, Pizza.EXTRA_CHEESE, Pizza.EXTRA_MEAT];

Pizza.prototype.addExtraIngredient = function (ingredient) {
    if (arguments.length !== 1) {
        throw new PizzaException("addExtraIngredient method accepts only one parameter");
    }

    if (!Pizza.allowedExtraIngredients.includes(ingredient)) {
        throw new PizzaException("Invalid ingredient");
    }

    if (this.extraIngredients.includes(ingredient)) {
        throw new PizzaException("Duplicate ingredient");
    }

    this.extraIngredients.push(ingredient);
};


Pizza.prototype.removeExtraIngredient = function (ingredient) {
    if (arguments.length !== 1) {
        throw new PizzaException("removeExtraIngredient method accepts only one parameter");
    }

    if (!Pizza.allowedExtraIngredients.includes(ingredient)) {
        throw new PizzaException("Invalid ingredient");
    }

    if (!this.extraIngredients.includes(ingredient)) {
        throw new PizzaException("Ingredient not added");
    }

    this.extraIngredients = this.extraIngredients.filter(item => item !== ingredient);
};


Pizza.prototype.getSize = function () {
    return this.size;
};


Pizza.prototype.getPrice = function () {
    let basePrice = 0;
    switch (this.size) {
        case Pizza.SIZE_S:
            basePrice = 10;
            break;
        case Pizza.SIZE_M:
            basePrice = 15;
            break;
        case Pizza.SIZE_L:
            basePrice = 20;
            break;
    }

    if (this.type === Pizza.TYPE_PEPPERONI) {
        basePrice += 5;
    }

    basePrice += this.extraIngredients.length * 2;

    return basePrice;
};


Pizza.prototype.getPizzaInfo = function () {
    return {
        size: this.size.toUpperCase(),
        type: this.type.toUpperCase(),
        extraIngredients: this.extraIngredients.map(ingredient => ingredient.toUpperCase()),
        price: this.getPrice() + "UAH"
    };
};


try {
    let pizza = new Pizza(Pizza.SIZE_S, Pizza.TYPE_VEGGIE);
    pizza.addExtraIngredient(Pizza.EXTRA_MEAT);
    document.getElementById("output1").innerHTML="Price:" + pizza.getPrice()+" UAH";

    pizza.addExtraIngredient(Pizza.EXTRA_CHEESE);
    pizza.addExtraIngredient(Pizza.EXTRA_TOMATOES);
    document.getElementById("output2").innerHTML="Pizza with Extra Ingredients:" + pizza.getPrice()+" UAH";
    document.getElementById("output3").innerHTML="Is pizza large:  "+ (pizza.getSize() === Pizza.SIZE_L);
    pizza.removeExtraIngredient(Pizza.EXTRA_CHEESE);
    document.getElementById("output4").innerHTML="Extra ingredients:"+pizza.extraIngredients.length;
    console.log(pizza.getPizzaInfo());

    // let pizza2 = new Pizza(Pizza.SIZE_S);
    // console.log(pizza2);
    // let pizza3 = new Pizza(Pizza.SIZE_S, Pizza.SIZE_S);
    // console.log(pizza3);
    // let pizza4= new Pizza(Pizza.SIZE_S, Pizza.TYPE_VEGGIE);
    // pizza.addExtraIngredient(Pizza.EXTRA_MEAT);
    // pizza.addExtraIngredient(Pizza.EXTRA_MEAT);
    //console.log(pizza4);
    let pizza5 = new Pizza(Pizza.SIZE_M, Pizza.EXTRA_TOMATOES);
    pizza.addExtraIngredient(Pizza.EXTRA_CORN);
    console.log(pizza5);
    
} catch (error) {
    if (error instanceof PizzaException) {
        console.error("Error:", error.log);
    } else {
        console.error("Unexpected error:", error);
    }
}


