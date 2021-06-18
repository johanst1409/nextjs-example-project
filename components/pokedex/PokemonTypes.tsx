interface PokemonTypesProps {
    types: {
        type: {
            name: string;
        }
    }[]
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