import axios from "axios";

const searchImages = async ( term ) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization: 'Client-ID vDCF9LcLxKz6s4AhNJKPrdt-Uv8U3Stvp9j-Trfwof0',
        },
        params:{
            query: term ,
        }
    });
    // console.log(response);
    return response.data.results ;
} ;

export default searchImages ;