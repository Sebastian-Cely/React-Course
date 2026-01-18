const person = {
    name: ' Tony',
    age: 45,
    key: 'Ironman'
};

const { name: ironmanName, age, key } = person;

// const name = person.name;
// const age = person.age;
// const key = person.key;

console.log({ ironmanName, age, key });

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
}

const useContext = ({ name, age, key, rank = 'sin rango' }: Hero) => {

    return {
        keyName: key,
        user: {
            name,
            age,
        },
        rank: rank,
    }
}

const context = useContext(person);

const { keyName, user: { name }, rank } = context;

// Es preferible usar la desestructuracion de objetos anidados
// de la forma normal, como a continuación: 

// const { name } = context.user;

console.log({ keyName, user: { name }, rank });

