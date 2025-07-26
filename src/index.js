module.exports = function toReadable(number) {
  const first = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const secondBefore20 = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const secondAfter20 = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  return number === 0
    ? 'zero'
    : String(number)
        .split('')
        .reverse()
        .map((char, index, array) => {
          if (index === 0 && array[1] !== '1') {
            return first[char];
          }
          if (index === 0 && array[1] === '1') {
            return '';
          }
          if (index === 1 && char === '1') {
            return secondBefore20[array[0]];
          }
          if (index === 1) {
            return secondAfter20[char];
          }
          return `${first[char]} hundred`;
        })
        .reverse()
        .join(' ')
        .replace(/\s+/g, ' ')
        .trim();
};
