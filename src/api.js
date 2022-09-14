import axios from 'axios';

export function getProductList() {
  return axios.get('https://dummyjson.com/products');
}
export const getProductData = async (id) => {
  return await axios.get('https://dummyjson.com/products/' + id).then((r) => {
    return r.data;
  });
};
