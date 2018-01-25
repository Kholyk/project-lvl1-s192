const toString = num => String(num);
const len = str => str.length;
const head = str => str.substr(0, 1);
const tail = str => str.substr(1, str.length);


const min = (num) => {
  const string = toString(num);
  const length = len(string);

  if (length === 1) {
    return Number(string);
  }
  if (Number(head(string)) < Number(min(tail(string)))) {
    return Number(head(string));
  }
  return Number(min(tail(string)));
};

const max = (num) => {
  const string = toString(num);
  const length = len(string);
  if (length === 1) {
    return Number(string);
  }
  if (Number(head(string)) > Number(max(tail(string)))) {
    return Number(head(string));
  }
  return Number(max(tail(string)));
};

const asc = (num) => {
  const string = toString(num);
  const length = len(string);
  if (length === 1) {
    return string;
  }
  if (Number(head(string)) < Number(max(tail(string)))) {
    return head(string).concat(asc(tail(string)));
  }
  return asc(tail(string)).concat(head(string));
};

export { min, max, asc };
