export const CreditInfo = {
  mortgage: {
    LABEL: 'Ипотечное кредитование',
    VALUE: 'mortgage',
    PRICE: {
      TITLE: 'недвижимости',
      MIN: 1200000,
      MAX: 25000000,
      STEP: 100000,
    },
    DOWN_PAYMENT: {
      MIN: 0.1,
      MAX: 1,
      STEP: 0.05,
    },
    TIME: {
      MIN: 5,
      MAX: 30,
      STEP: 1,
    },
  },
  car: {
    lABEL: 'Автомобильное кредитование',
    VALUE: 'car',
    PRICE: {
      TITLE: 'автомобиля',
      MIN: 500000,
      MAX: 5000000,
      STEP: 50000,
    },
    DOWN_PAYMENT: {
      MIN: 0.2,
      MAX: 1,
      STEP: 0.05,
    },
    TIME: {
      MIN: 1,
      MAX: 5,
      STEP: 1,
    },
  },
};
