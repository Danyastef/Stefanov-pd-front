function sum(...args) {
  if (args.length < 2) {
    throw new Error('INVALID_ARGUMENTS_COUNT');
  }


  for (const arg of args) {
    if (typeof arg !== 'number') {
      throw new Error('INVALID_ARGUMENT');
    }
  }


  return args.reduce((acc, num) => acc + num, 0);
}

try {
  console.log(sum(1, 2, 4)); 
} catch (error) {
  console.error(error.message);
}
