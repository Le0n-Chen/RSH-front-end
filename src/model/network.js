import { actions } from 'mirrorx';
import {api} from '../service/api';
export function initialState () {
  
};
export const reducers = { 

};

export const effects = {
  async getUserSumList(date) {
    let data = await api.get('/network/user/num/' + date);
    return data;
  },

  async getValidUser(date) {
    let data = await api.get('/network/user/allowed/' + date);
    return data;
  }
  
};