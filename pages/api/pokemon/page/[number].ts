import { NextApiRequest, NextApiResponse } from "next";
import { PokemonListItemInterface } from "../../../../types/pokemon";

interface DataInterface {
    pokemon: PokemonListItemInterface[];
}

const handler = async (request: NextApiRequest, response: NextApiResponse<DataInterface>) => {
    const pageNumber = parseInt(request.query.number instanceof Array ? request.query.number.join("") : request.query.number);
    const pageSize = parseInt(process.env.PAGE_SIZE ?? "20");
    const offset = pageSize * (pageNumber - 1);

    const result = await fetch(`${process.env.API_HOST}/pokemon?limit=${pageSize}&offset=${offset}`).then(response => response.json());

    response.status(200).json(result);
}

export default handler;