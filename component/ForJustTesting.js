

  export const Capitalize = (strTesting) => {
    
    let str = strTesting.replace(strTesting[0],strTesting[0].toUpperCase());
    
    return str;
  }

  export const ReverseString = (strTesting) => {

    let element = '';
    for (let index = strTesting.length-1; index >= 0; index--) {
      element += strTesting[index]
    }

    return element;
  }

  export const Calculator = {
    
    add :(a, b)=>{
      return(a+b);
    },
    
    divide:(a,b) => {
      return (a/b);
    },

    subtract:(a,b) => {
      return (a-b);
    },

    multiply:(a, b) =>{
      return (a*b);
    }
  }

  export const CaesarCipher = (string, code) =>{

    const alphabet = 'abcdefjhigklmnopqrstuvwxyz'

    let caesar = '';

    Array.from(string).forEach((element) => {

      let place = alphabet.indexOf(element);

      let index = place + code >25 ? place + code - 26 : place + code < -1 ? place + code + 26 : place + code;

      let alpha = alphabet[index];

      return caesar += alpha;
    });

    return caesar;

  }

  export const Analysis = ([...arg]) =>{

    let obj = {
      average: 0,
      min: arg[0],
      max: 0,
      length: arg.length
    }

    let sum = 0;

    for (let index = 0; index < arg.length; index++) {

      let num = arg[index];

      obj.max = num > obj.max ? num : obj.max;

      obj.min = num < obj.min ? num : obj.min;

      sum +=num;

    }

    obj.average = sum / arg.length;

    return obj;
  }