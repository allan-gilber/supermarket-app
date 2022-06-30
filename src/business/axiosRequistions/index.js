import axios from 'axios';

const baseURL = 'http://localhost:3003';

export const getProducListByName = async searchInput => {
  const body = {filter: searchInput};
  return await axios
    .post(`${baseURL}/products/list/`,
      body
    )
    .then(response => {
      console.error(response);
      return response.data.data;
    })
    .catch(error => {
      console.log(error);
    });
};