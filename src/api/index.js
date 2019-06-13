import ApiRequest from './ApiRequest';

const expressApi = {
  test: {
    getTest: () => new ApiRequest('get', `/api/test/getTest`),
    postTest: () => new ApiRequest('post', `/api/test/postTest`),
    deleteTest: () => new ApiRequest('delete', `/api/test/deleteTest`),
  },
};

export default expressApi;