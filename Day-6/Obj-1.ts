

//Type method

type Fruit={

    name:string,

    price:number,

    getDetails:()=>string;

};
let fruit: Fruit = {
    name: "Mango",
    price: 50,
    getDetails: function () {
        return `${this.name} costs ${this.price}`;
    }
};

console.log(fruit.name, fruit.price, fruit.getDetails());
