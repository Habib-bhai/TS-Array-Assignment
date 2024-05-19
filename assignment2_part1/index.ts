// PART 1: BASIC ARRAYS - PRODUCT INVENTORY

// AT FIRST, Declared a type Alias Named Product
type Product = {
    name: string,
    priceInRupees: number,
    color: string,
    inventory: {
        stock: number,
        colorOptions: ["red", "green", "blue"]
    }

}

// Created Array of objects, each object has type "Product" which we have created just above as our Type Alias
let arrayOfProducts: Product[] = [{
    name: "T-Shirt",
    priceInRupees: 2500,
    color: "red",
    inventory: {
        stock: 100,
        colorOptions: ["red", "green", 'blue']
    }
},
{
    name: "Sneakers",
    priceInRupees: 4500,
    color: "blue",
    inventory: {
        stock: 50,
        colorOptions: ["red", "green", 'blue']
    }
}, {
    name: "P-cap",
    priceInRupees: 1500,
    color: "green",
    inventory: {
        stock: 150,
        colorOptions: ["red", "green", 'blue']
    }
}]


// The function basically takes the product objects one by one which we have created above in an array & a color using which it will change the color property and will increase or decrease the price of the Product.
const changeColor = (ProductDetails: Product, newColor: string)=> { 
    let adjustedColor = newColor.toLowerCase()
    ProductDetails.color = adjustedColor

    // I've created this object to get the percentages i.e. if the product is in red color we have to increase price by 10%, which is equal to 0.1, this object will help in making the percentage calculaation easy.
    const price = {
        red: 0.1, //for 10%
        blue: 0.05, // for 5%
        green: 0.15 // for 15%
    }

    // Now here are the conditions, which will check the color and based on the color it will increase of decrease the price, plus it will also display other details about the product like product name,its availabe stock & color options
    if(adjustedColor === "red"){
        ProductDetails.priceInRupees += price[adjustedColor] * ProductDetails.priceInRupees // At this stage the "price" object is helping us, we just have to multiply the price increment we have defined for each color with the price and have to add it in the price the product already have, without the "price obj" we first have to know what 10% is equal to than multiply it with the price, but storing that percent value inside object makes our calculation more intuitive.
        
        console.log(`Product Name is: ${ProductDetails.name}`);
        console.log(`The price for the product in ${adjustedColor} color is: ${ProductDetails.priceInRupees}`);
        console.log(`We have ${ProductDetails.inventory.stock} pieces of this product`);
        console.log(`Here are it's available colors: ${ProductDetails.inventory.colorOptions}\n`);
        
        
        
    }

    else if(adjustedColor === "blue"){
        ProductDetails.priceInRupees -= price[adjustedColor] * ProductDetails.priceInRupees 
        
        console.log(`Product Name is: ${ProductDetails.name}`);
        console.log(`The price for the product in ${adjustedColor} color is: ${ProductDetails.priceInRupees}`);
        console.log(`We have ${ProductDetails.inventory.stock} pieces of this product`);
        console.log(`Here are it's available colors: ${ProductDetails.inventory.colorOptions}\n`);
    }
    else if(adjustedColor === "green"){
        ProductDetails.priceInRupees += price[adjustedColor] * ProductDetails.priceInRupees 
        
        console.log(`Product Name is: ${ProductDetails.name}`);
        console.log(`The price for the product in ${adjustedColor} color is: ${ProductDetails.priceInRupees}`);
        console.log(`We have ${ProductDetails.inventory.stock} pieces of this product`);
        console.log(`Here are it's available colors: ${ProductDetails.inventory.colorOptions}`);
    }
else {
    console.error("you have selected a color which isn't available");
    
}

}


arrayOfProducts.forEach( obj=> {
    changeColor(obj,"BLUE")
})