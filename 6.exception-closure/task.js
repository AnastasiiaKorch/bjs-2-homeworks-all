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
  constructor (A, B, C) {
    this.A = A;
    this.B = B;
    this.C = C;
    if (A + B < C || A + C < B || B + C < A){
           throw new Error ("Треугольник с такими сторонами не существует")

    }
  }

    getPerimeter(){
    return this.A + this.B + this.C
    }

    getArea() {
        const p = this.getPerimeter() / 2
        const s = Math.sqrt(p * (p - this.A) * (p - this.B) * (p - this.C))
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