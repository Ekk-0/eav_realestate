import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"

// headers: {
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
//     'X-RapidAPI-Key': '0a6f4585b3msh4b128f83236a1fep1be571jsnf08efe1c7fcb'
//   }

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': '0a6f4585b3msh4b128f83236a1fep1be571jsnf08efe1c7fcb'
        }
    });

    return data;
}
