import axios from 'axios';
import moment from 'moment';

/* DATE */
export const getHHMM = () => (moment().format('HH:mm'));

export const getYYYYMMDD = () => (moment().format('YYYY-MM-DD'));

export const parseDate = (date) => (moment(date).format('YYYY-MM-DD'));

/* auth */

export const setAuthorizationToken = (token) =>{
  if(token){
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}
/* */
export const getLabel = (race) => (`${race.race_location}${race.race_number}R`);