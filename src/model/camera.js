import {api} from '../service/api';
export function initialState () {
  
};
export const reducers = { 

};

export const effects = {
  async getPicList(date) {
    let data = await api.get('/camera/list/' + date);
    return data;
  },
 
};