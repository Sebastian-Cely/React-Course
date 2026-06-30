function greet(name: string): string {
    return `Hola, ${name}`;
}

const greet2 = (name: string) => `Hola, ${name}`;

const message = greet('Gokú');
const message2 = greet2('Vegeta');

console.log(message, message2);

interface User {
    uid: string;
    username: string;
}

function getUser(): User {
    return {
        uid: 'ABC-123',
        username: 'Gokú'
    };
}

const getUser2 = () => ({
    uid: 'ABC-123',
    username: 'Vegeta'
});


const user = getUser();
const user2 = getUser2();
console.log(user, user2);

const mynumbers: number[] = [1, 2, 3, 4, 5];

// mynumbers.forEach(function (value) {
//     console.log(value);
// });

mynumbers.forEach((number) => console.log(number));