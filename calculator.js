function Calculator() {
  this.methods = {};

  this.addMethod = function(operation, func) {
    if (typeof operation !== 'string' || typeof func !== 'function') {
      throw new Error('INVALID_ARGUMENT');
    }
    this.methods[operation] = func;
  };

  this.calculate = function(expression) {
    if (typeof expression !== 'string') {
      throw new Error('INVALID_ARGUMENT');
    }

    const parts = expression.trim().split(' ');
    if (parts.length !== 3) {
      throw new Error('INVALID_ARGUMENT');
    }

    const [a, operation, b] = parts;

    const num1 = parseFloat(a);
    const num2 = parseFloat(b);
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error('INVALID_OPPERAND');
    }


    if (!(operation in this.methods)) {
      throw new Error('UNKNOWN_OPERATION');
    }

    return this.methods[operation](num1, num2);
  };
}


try {
  let calc = new Calculator();
  calc.addMethod('+', (a, b) => a + b);
  calc.addMethod('-', (a, b) => a - b);
  calc.addMethod('*', (a, b) => a * b);
  calc.addMethod('/', (a, b) => a / b);
  calc.addMethod('**', (a, b) => a ** b);

  console.log(calc.calculate('12 + 4')); // 16
  console.log(calc.calculate('2 ** 3')); // 8
} catch (error) {
  console.error(error.message);
}
