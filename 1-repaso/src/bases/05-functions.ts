function greet(name: string): string {
    return `Hello, ${name}`;
}

const greet2 = (name: string): string => {
    return `Hello, ${name}`;
}

const message = greet('Gokú');
const message2 = greet2('Vegeta');

console.log(message, message2);

function getUser() {
    return {
        uid: 'ABC-123',
        username: 'Gokú'
    };
}

const getUser2 = () => {
    return {
        uid: 'ABC-123',
        username: 'Vegeta'
    };
}

const user = getUser2();
console.log(user);