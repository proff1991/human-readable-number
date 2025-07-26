module.exports = function toReadable(number) {
  var first = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'sevene', 'eight', 'nine'];
  var secondBefore20 = ['', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',];
  var secondAfter20 = ['',
    '',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety'
  ];

  return number === 0 ? 'zero' : String(number).split('').reverse().map((char,index,array)=> {

    if(index === 0 && array[1] !== '1'){
      return first[char];
    }else if(index === 0 && array[1] === '1'){
      return '';
    }else if(index === 1 && char === '1'){
      return secondBefore20[char];
    }else if(index === 1){
      return secondAfter20[char];
    }else if(index === 2){
      return `${first[char]} hundred`;
    }

  }).reverse().join('');

  throw new Error('Not implemented');
};
