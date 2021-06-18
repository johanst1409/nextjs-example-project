import { PokemonTypeInterface } from "../../types/pokemon";

interface PokemonTypesProps {
    types: PokemonTypeInterface[]
}

const PokemonTypes: React.FC<PokemonTypesProps> = ({ types }) => {
    return (
        <ul>
            {types.map(type => {
                return (
                    <li>{type.type.name}</li>
                )
            })}
        </ul>
    )
}

export default PokemonTypes;