import moment from 'moment';

export const getHHMM = () => (moment().format('HH:mm'));

export const getLabel = (race) => (`${race.race_location}${race.race_number}R`);