const ironman = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        city: 'New York',
        postalCode: 'ABC123',
    }
};

/* El operador spread no crea un nuevo objeto, solo copia las propiedades del objeto original, 
pero si el objeto tiene propiedades anidadas, estas se copian por referencia */

const spiderman = { ...ironman };

spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';
spiderman.age = 25;
spiderman.address.city = 'Madrid';

console.log("OPERADOR SPREAD");
console.log(ironman, spiderman);

/* El operador structuredClone crea un nuevo objeto, copia las propiedades del objeto original, 
y las propiedades anidadas se copian por valor */

const spiderman2 = structuredClone(ironman);
spiderman2.firstName = 'Peter';
spiderman2.lastName = 'Parker';
spiderman2.age = 40;
spiderman2.address.city = 'Paris';

console.log("STRUCTURED CLONE");
console.log(ironman, spiderman2); 