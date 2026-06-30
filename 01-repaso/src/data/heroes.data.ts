// type Owner = 'DC' | 'Marvel';

export interface Hero { 
    id: number;
    name: string;
    owner: Owner;
}

// Estructura de tipos
//type Owner = 'DC' | 'Marvel'

// Estructura de enumeraciones
// enum Owner {
//     DC = 'DC',
//      Marvel = 'Marvel',
// }

export const Owner = {
    DC: 'DC',
    Marvel: 'Marvel'
} as const;

export type Owner = typeof Owner[keyof typeof Owner];

export const heroes: Hero[] = [
    {
        id: 1,
        name: 'Spiderman',
        owner: Owner.Marvel,
    },
    {
        id: 2,
        name: 'Batman',
        owner: Owner.DC,
    },
    {
        id: 3,
        name: 'Daredevil',
        owner: Owner.Marvel,
    },
    {
        id: 4,
        name: 'Robin',
        owner: Owner.DC,
    },
    {
        id: 5,
        name: 'Flash',
        owner: Owner.DC,
    }
];