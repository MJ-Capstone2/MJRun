import moment from 'moment';

export const getHHMM = () => (moment().format('HH:mm'));

export const getLabel = (race) => (`${race.location}${race.num}R`);