const RUBLE_TITLES = ['рубль', 'рубля', 'рублей'];
const YEAR_TITLES = ['год', 'года', 'лет'];

const declOfNum = (number, titles) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
};

export const getSpaces = (number) => number.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');

export const getMoneyString = (money) => `${getSpaces(money)} ${declOfNum(money, RUBLE_TITLES)}`;

export const getYearString = (year) => `${year} ${declOfNum(year, YEAR_TITLES)}`;

export const getNumber = (str) => {

  if (typeof str === 'string') {
    return Number(str.replace(/\D+/g, ''));
  }

  return str;
};
