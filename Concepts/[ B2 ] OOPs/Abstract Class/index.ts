abstract class Shape {
  display(shape: string) {
    console.log(`Shape : ${shape}`);
  }
  abstract area(radius: number): number;
}

class Circle extends Shape {
  area(radius: number): number {
    return 3.14 * Math.pow(radius, 2);
  }
}

const circle = new Circle();

circle.display("Circle");
console.log(`Area : ${circle.area(5)}`);
