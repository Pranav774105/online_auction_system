import axios from 'axios';

const baseUrl = "http://localhost:8000"

/*axios.get('/BACKEND/Online_Auction_System.urls/')
    .then(response => console.log(response.data))
    .catch(error => console.error('Error:', error));
*/
export const register = (imageData) => {
    return axios.post(`${baseUrl}/images`, imageData)
    .then((response)=> response.data)
    .catch((error)=>{
        throw error;
    });
}

export const saveInformationToDB = (informationData) =>{
    const relUrl = baseUrl+'/information/productinformation/'
    return axios.post(relUrl, informationData)
}



export const fetchAllProductsFromDB = () =>{
    const relUrl = baseUrl+'/information/productinformation/'
    return axios.get(relUrl)
}
//`${baseUrl}/information/productinformation/${product_id}`  /images/productimages/

export const fetchProductFromDB = (productId) =>{
    const relUrl = `${baseUrl}/information/productinformation/${productId}`
    return axios.get(relUrl)
}

export const updateProductFromDB = (productId, informationData) =>{
    const relUrl = `${baseUrl}/information/productinformation/${productId}`
    return axios.put(relUrl, informationData)
}

export const deleteProductFromDB = (productId) =>{
    const relUrl = `${baseUrl}/information/productinformation/${productId}`
    return axios.delete(relUrl)
}