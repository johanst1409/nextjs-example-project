interface PokemonHeaderProps {
    name: string;
    image: string;
}

const PokemonHeader: React.FC<PokemonHeaderProps> = ({ name, image }) => {
    return (
        <>
            <img src={image} alt={name} />
            <h1>{name}</h1>
        </>
    );
};

export default PokemonHeader;
