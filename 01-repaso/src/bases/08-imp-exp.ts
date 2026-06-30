import { heroes, type Hero, type Owner } from "../data/heroes.data";

const getHeroeById = (id: number): Hero | undefined => {
    return heroes.find(heroe => heroe.id === id);
}

// console.log(getHeroeById(2));

export const getHeroesByOwner = (owner: Owner) => {
    return heroes.filter(
        (heroe) => heroe.owner === owner);
}

console.log(getHeroesByOwner('DC'));
