// Method overloading example

class Calculator {
    add(a: number, b: number): number 
    {
        return a + b;
    }

    addThree(a: number, b: number, c?: number): number {
        return a + b + c;
    }
}

const cal = new Calculator();

console.log("Adding 2 numbers:", cal.add(10, 20));
console.log("Adding 3 numbers:", cal.addThree(10, 20, 30));
