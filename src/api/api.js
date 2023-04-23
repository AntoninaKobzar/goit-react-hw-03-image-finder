    import axios from 'axios';


    const fetchImages = async (query, page) => {
    const response = await axios.get('https://pixabay.com/api/', {
        method: 'get',
        params: {
        key: '34322980-08373f8358d1fe63d0b7301a8',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 12,
        page: page,
        },
    });
    return response.data.hits;
    };
    export default fetchImages;