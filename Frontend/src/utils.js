import moment from 'moment';

export const getHHMM = () => (moment().format('HH:mm'));

export const getYYYYMMDD = () => (moment().format('YYYY-MM-DD'));

export const parseDate = (date) => (moment(date).format('YYYY-MM-DD'));

export const getLabel = (race) => (`${race.race_location}${race.race_number}R`);