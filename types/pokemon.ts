export interface PokemonListItemInterface {
    name: string;
    url: string;
}

export interface PokemonInterface {
    name: string;
    image: string;
    id: string;
    types: PokemonTypeInterface[];
}

export interface PokemonTypeInterface {
    type: {
        name: string;
    }
}