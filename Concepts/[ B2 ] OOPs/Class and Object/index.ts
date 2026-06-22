class Parent {
  public A = 10;
  protected B = 20;
  private C = 30;
  display() {
    console.log(
      `In display() of Parent Class, A = ${this.A}, B = ${this.B} and C = ${this.C}`,
    );
  }
}

class Child extends Parent {
  show() {
    console.log(`In show() of Child Class, A = ${this.A} and B = ${this.B}`);
  }
}

const object = new Child();

object.display();
object.show();
console.log(`From Object, A = ${object.A}`);
