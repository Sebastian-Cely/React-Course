const myArray: number[] = [1, 2, 3, 4, 5, 6];

const myArray2 = [...myArray];

myArray2.push(7);

console.log(myArray, myArray2);

// La recomendación de este ejemplo es no permitir que
// React infiera el tipo de datos preferiblemente, ni
// dejar estos tan abiertos. 