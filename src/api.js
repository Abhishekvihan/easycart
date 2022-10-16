import axios from 'axios';

export function getProductList(sortBy, search, page, sortType) {
  let params = {};

  if (sortBy) {
    params.sortBy = sortBy;
  }
  if (search) {
    params.search = search;
  }
  if (page) {
    params.page = page;
  }
  if (sortType) {
    params.sortType = sortType;
  }
  return axios
    .get('https://myeasykart.codeyogi.io/products/', {
      params,
    })
    .then(function (response) {
      return response.data;
    });
}
export const getProductData = (id) => {
  return axios.get('https://myeasykart.codeyogi.io/product/' + id).then((r) => {
    return r.data;
  });
};
