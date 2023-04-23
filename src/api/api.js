import axios from 'axios';
const KEY = '34322980-08373f8358d1fe63d0b7301a8';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const fetchImages = async (query, currentPage) => {
    const { data } = await axios.get(`https://pixabay.com/api/?q=${query}&page=${currentPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,);

    return data;
};
export default fetchImages;