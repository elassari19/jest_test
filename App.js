import React from 'react';
import {Capitalize, ReverseString, Calculator, CaesarCipher, Analysis} from './component/ForJustTesting';


const App = () => {

  let obj = Analysis([8,107,300,-41,150, 21])

  return (
<div>
    <span>any = </span>
    {Capitalize('any')}
    <br/>
    <span>dont worry = </span>
    {ReverseString('dont worry')}
    <br/>
    <span>5+3 = </span>
    {Calculator.add(3,5)}
    <br/>
    <span>3-5 = </span>
    {Calculator.subtract(3,5)}
    <br/>
    <span>3/5 = </span>
    {Calculator.divide(3,5)}
    <br/>
    <span>3*5 = </span>
    {Calculator.multiply(3,5)}
    <br/>
    <span>learning = </span>
    {CaesarCipher('learning',18)}
    <br/>
    <span>average = </span>
    {obj.average}
    <br/>
    <span>length = </span>
    {obj.length}
    <br/>
    <span>max = </span>
    {obj.max}
    <br/>
    <span>min = </span>
    {obj.min}
  
  </div>  )
}

export default App

