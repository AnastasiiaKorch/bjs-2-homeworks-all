function parseCount(arg){
    let number = Number.parseInt(arg)
    if (isNaN(number)){
        throw new Error("Невалидное значение")
    }
    return number
}
function validateCount(arg) {
  try {
    return parseCount(arg);
  }
  catch(error) {
    return error
  }
}

// задача 2
class Triangle {
  constructor (a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if (a + b < c || a + c < b || b + c < a){
           throw new Error ("Треугольник с такими сторонами не существует")

    }
  }

    getPerimeter(){
    return this.a + this.b + this.c
    }

    getArea() {
        const p = this.getPerimeter() / 2
        const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))
        return + s.toFixed(3)
      }
}
function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c)
  }
  catch (error) {
    return {
      getPerimeter() {
        return "Ошибка! Треугольник не существует"
      },
      getArea() {
        return "Ошибка! Треугольник не существует"
      }
    }
  }
}