import axios from "axios";

const KEY = '33451170-da7868fa9d2d9191c176f5359';
const URL = 'https://pixabay.com/api/';
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal';
const SAFESEARCH = 'true';


const fetchPixabayApi = async (inputValue, page = 1, perPage) => {
    const response = await axios.get(`${URL}?key=${KEY}&q=${inputValue}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFESEARCH}&page=${page}&per_page=${perPage}`);
    return response.data
}

export { fetchPixabayApi };