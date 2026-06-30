const characterNames = ['Gokú', 'Vegeta', 'Trunks'];

// En la desestructuración de arrays importa el orden de los elementos

const [gokú, vegeta, trunks] = characterNames;

// Si se quiere desestructurar un valor en específico se puede usar la siguiente sintaxis

// const [, , trunks] = characterNames;

console.log(gokú, vegeta, trunks);

const returnsArrayFn = () => {
    // as const indica que los valores siempre tendrán este tipo de datos,
    // es decir que no se puede cambiar el valor de los elementos
    return ['ABC', 123] as const;
};

const [letters, numbers] = returnsArrayFn();

console.log(letters, numbers);

// Taller 1. 

const useState = (value: string) => {
    return [
        value,
        (name: string) => {
            console.log(name)
        }
    ] as const;
};

// Ejemplo de uso
const [name, setName] = useState('Gokú');
console.log(name);
setName('Vegeta');

