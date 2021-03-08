import {Capitalize, ReverseString, Calculator, CaesarCipher, Analysis} from './component/ForJustTesting';

test('frist letter is capitalize', ()=>{

  const value = Capitalize('capital');
  expect(value).toBe('Capital');

})

test('reverse strings',()=>{
  const value = ReverseString('any');
  expect(value).toBe('yna')
})

test('calculator', () =>{

  const concat = Calculator.add(5,5);
  const subtract = Calculator.subtract(5,5);
  const multiply = Calculator.multiply(5,5);
  const divide = Calculator.divide(5,5);

  expect(concat).toEqual(10);
  expect(subtract).toEqual(0);
  expect(multiply).toEqual(25);
  expect(divide).toEqual(1);

})

test('caesar cipher', ()=>{
  const value = CaesarCipher('learning',18);
  expect(value).toEqual('dwsgfafb')
})

test('analysis serie of numbers', () => {
  
  const value = Analysis([8,107,300,-41,150, 21]);

  expect(value.average).toEqual(90.83333333333333);
  expect(value.max).toEqual(300);
  expect(value.min).toEqual(-41);
  expect(value.length).toEqual(6);

})