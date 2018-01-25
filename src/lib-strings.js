const min = num => {
  const string = String(num);
  const length = string.length;
  const head = (str) => string.substr(0, 1);
  const tail = (str) => string.substr(1, str.length);
  if (string.length === 1) {
    return Number(string);
  }
  if (Number(head(string)) < Number(min(tail(string)))) {
    return Number(head(string));
  } else {
    return Number(min(tail(string)));
  }
};

const max = num => {
  const string = String(num);
  const length = string.length;
  const head = (str) => string.substr(0, 1);
  const tail = (str) => string.substr(1, str.length);
  if (string.length === 1) {
    return Number(string);
  }
  if (Number(head(string)) > Number(max(tail(string)))) {
    return Number(head(string));
  } else {
    return Number(max(tail(string)));
  }
};

const asc = num => {
  const string = String(num);
  const length = string.length;
  const head = (str) => string.substr(0, 1);
  const tail = (str) => string.substr(1, str.length);
  if (string.length === 1) {
    return string;
  }
  if (Number(head(string)) < Number(max(tail(string)))) {
    return head(string).concat(asc(tail(string)));
  } else {
    return asc(tail(string)).concat(head(string));
  }
};

export {min, max, asc};
