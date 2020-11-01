import store from '../redux/store';
import types from '../redux/types';

const { dispatch } = store;

const addZeroAfterPoint = n => {
  if (n > 1) {
    return `0${addZeroAfterPoint(n - 1)}`;
  }
  return '0';
};

export const toCrop = amount => {
  const max = amount || 0;
  return function (string) {
    const symb = +string < 0 ? '-' : '';
    const value = `${string}.${addZeroAfterPoint(max)}`.replace(',', '.');
    if (max) {
      const reg = new RegExp(`\\d+(?:\\.\\d{0,${max}})?`);
      return symb + value.match(reg)[0];
    }
    const reg = new RegExp(`\\d+(?:\\.\\d{0)?`);
    return symb + value.match(reg)[0];
  };
};

export const firstLatterToUppercase = word => {
  if (typeof word === 'string') {
    if (word && !word?.trim().length) return;
    if (word) return word?.charAt(0).toUpperCase() + word.slice(1);
  }
};

export const cropNumber = number => {
  if (number || number === 0) {
    if (number >= 1) {
      return toCrop(2)(number);
    }
    if (number > 0 && number < 1) {
      return toCrop(6)(number);
    }
    return toCrop(2)(number);
  }
};

export const cropNumberToInt = number => {
  if (number || number === 0) {
    return toCrop(-1)(number);
  }
};

export const pushToMiddle = (word, symb) => {
  // check if uses in futures Chart, may be not nedded
  if (word) {
    const lpart = word.slice(0, word.length / 2);
    const rpart = word.slice(word.length / 2);
    return lpart + symb + rpart;
  }
};

export const hideEmail = string => {
  if (string) {
    const splittedString = string.split('@');
    const { length } = splittedString[0];
    const stars = '***';
    const firstThreeLetters = splittedString[0].slice(-length, 2);
    const result = firstThreeLetters + stars + splittedString[1];
    return result;
  }
};

export const intNumberValidation = text => {
  if (text === '') return true;
  const regExp = /^\d{1,8}$/;
  if (!regExp.test(text)) return false;
  return true;
};

export const numberValidation = text => {
  if (text === '') return true;
  const regExp = /^(?:[0-9]{1,8}[\.][0-9]{1,6}|[0-9]{1,8}[\.]|[0-9]{1,8})$/;
  if (!regExp.test(text)) return false;
  return true;
};

export const amountValidation = (before = 8, after = 8) => {
  return function (text) {
    if (text === '') return true;
    const regExp = new RegExp(
      `^(?:[0-9]{1,${before}}[\.][0-9]{1,${after}}|[0-9]{1,${before}}[\.]|[0-9]{1,${before}})$`,
    );
    if (!regExp.test(text)) return false;
    return true;
  };
};

export const empty = text => {
  if (!text || text.length === 0) return true;
  return false;
};

export const passwordValid = password => {
  if (password.length < 8) return false;
  // const regExp = /(?=^.{8,25}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]).*$/;
  const regExp = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
  if (!regExp.test(password)) return false;
  return true;
};

export const passwordConfirm = (password, confirmPassword) => {
  if (confirmPassword.length <= 8) return false;
  if (password !== confirmPassword) return false;
  const regExp = /(?=^.{8,32}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
  if (!regExp.test(password)) return false;
  return true;
};

export const emailValid = email => {
  if (email.length === 0) return false;
  // const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}))$/;
  const regExp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  if (!regExp.test(email)) return false;
  return true;
};

export const phoneValid = phone => {
  if (phone.length === 0) return false;
  const regExp = /^[\+][1-9]{1}[\d]{9,13}$/;
  if (!regExp.test(phone)) return false;
  return true;
};

const hostname = window?.location?.hostname;
const protocol = window?.location?.protocol;

export const wsUrl = () => {
  if (hostname === '127.0.0.1') {
    return `ws://${hostname}:8980`;
  }
  if (protocol === 'http:' && hostname !== 'localhost') {
    return `ws://${hostname}:8850`;
  }
  if (protocol === 'https:') {
    return `wss://${hostname}:8443`;
  }
  return 'ws://204.236.192.248:8850';
};

export const range = (start, end) => {
  const arr = [];
  for (let i = start; i <= end; i += 1) {
    arr.push(i);
  }
  return arr;
};

export const addZero = value => String(value).padStart(2, '0');

export const toBase64 = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

export const sortingColumnTable = ({ sort, data, setState }) => {
  if (!sort?.sort && !sort?.order) return;
  const newData = data.sort((itemA, itemB) => {
    if (sort?.sort === 'desc') {
      return (itemA[sort.order] || itemA.asset[sort.order]) <
        (itemB[sort.order] || itemB.asset[sort.order])
        ? -1
        : 1;
    }
    if (sort?.sort === 'asc') {
      return (itemA[sort.order] || itemA.asset[sort.order]) <
        (itemB[sort.order] || itemB.asset[sort.order])
        ? 1
        : -1;
    }
    return 0;
  });
  setState(newData);
};

export const checkType = type => {
  switch (type) {
    case 'input':
      return 'Deposit';
    case 'output':
      return 'Withdrawal';
    default:
      return '-';
  }
};

export const statusText = status => {
  switch (status) {
    case 'confirmed':
      return 'Confirmed';
    case 'unconfirmed':
      return 'Unconfirmed';
    case 'completed':
      return 'Completed';
    case 'pending':
      return 'Pending';
    case 'waiting':
      return 'Waiting';
    case 'processed':
      return 'Processed';
    case 'canceled':
      return 'Canceled';
    case 'rejected':
      return 'Rejected';
    case 'in_progress':
      return 'In progress';
    default:
      return 'not Status';
  }
};

export const changeContract = contract => {
  dispatch({ type: types.SET_CURRENT_CONTRACT_START, payload: contract });
  dispatch({ type: types.FUTURES_SELECT_CONTRACT, payload: contract });
};

export const cropUsdt = (pair, price) => {
  if (pair.toLowerCase().includes('usdt')) {
    return cropNumber(price);
  }

  return toCrop(6)(price);
};
