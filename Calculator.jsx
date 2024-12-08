import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import CalculatorButton from './CalculatorButton';

const rowsPortrait = [
  [
    { backgroundColor: '#4e4e4e', title: 'AC', disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    { backgroundColor: '#4e4e4e', title: '', disable: true, borderColor: '#555759', color: '#e8e9ea', flex: 2, style: { width: '50%' } },
    { backgroundColor: '#ff9a00', title: '÷', disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
  ],
  [
    { backgroundColor: '#636466', title: '7', disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    { backgroundColor: '#636466', title: '8', disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    { backgroundColor: '#636466', title: '9', disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    { backgroundColor: '#ff9a00', title: '×', disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
  ],
  [
    { backgroundColor: '#636466', title: '4', disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    { backgroundColor: '#636466', title: '5', disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    { backgroundColor: '#636466', title: '6', disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    { backgroundColor: '#ff9a00', title: '-', disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
  ],
  [
    { backgroundColor: '#636466', title: '1', disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    { backgroundColor: '#636466', title: '2', disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    { backgroundColor: '#636466', title: '3', disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    { backgroundColor: '#ff9a00', title: '+', disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
  ],
  [
    { backgroundColor: '#636466', title: '0', disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 2 },
    { backgroundColor: '#636466', title: ',', disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    { backgroundColor: '#ff9a00', title: '=', disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
  ],
];

const rowsLandscape = [
 
  [
    { backgroundColor: '#4e4e4e', title: '(', disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    { backgroundColor: '#4e4e4e', title: ')', disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    { backgroundColor: '#4e4e4e', title: 'mc', disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    { backgroundColor: '#4e4e4e', title: 'm+', disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    { backgroundColor: '#4e4e4e', title: 'm-', disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    { backgroundColor: '#4e4e4e', title: 'mr', disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    { backgroundColor: '#4e4e4e', title: 'AC', disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    { backgroundColor: '#4e4e4e', title: '±', disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    { backgroundColor: '#4e4e4e', title: '%', disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    { backgroundColor: '#ff9a00', title: '÷', disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
  ],
  [
    { backgroundColor: '#4e4e4e', title: '2nd', disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    { backgroundColor: '#4e4e4e', title: 'x²', disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    { backgroundColor: '#4e4e4e', title: 'x³', disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    { backgroundColor: '#4e4e4e', title: 'xʸ', disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    { backgroundColor: '#4e4e4e', title: 'eˣ', disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    { backgroundColor: '#4e4e4e', title: '10ˣ', disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    { backgroundColor: '#636466', title: '7', disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    { backgroundColor: '#636466', title: '8', disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    { backgroundColor: '#636466', title: '9', disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    { backgroundColor: '#ff9a00', title: '×', disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
  ],
  [
    { backgroundColor: '#4e4e4e', title: '1/x',  disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    { backgroundColor: '#4e4e4e', title: '²√x',  disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    { backgroundColor: '#4e4e4e', title: '³√x',  disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    {  backgroundColor: '#4e4e4e',title: 'ʸ√x',  disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    {  backgroundColor: '#4e4e4e',title: 'ln',  disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    { backgroundColor: '#4e4e4e', title: 'log₁₀',  disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    {backgroundColor: '#636466', title: '4',  disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    { backgroundColor: '#636466',title: '5', disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    {backgroundColor: '#636466', title: '6', disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    { backgroundColor: '#ff9a00',title: '-',  disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
  ],
  [
    { backgroundColor: '#4e4e4e',title: 'x!',  disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    {backgroundColor: '#4e4e4e', title: 'sin', disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    {backgroundColor: '#4e4e4e', title: 'cos',  disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    { backgroundColor: '#4e4e4e',title: 'tan',  disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    { backgroundColor: '#4e4e4e',title: 'e',  disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    { backgroundColor: '#4e4e4e',title: 'EE',  disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    {backgroundColor: '#636466', title: '1',  disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    { backgroundColor: '#636466',title: '2',  disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    {backgroundColor: '#636466', title: '3',  disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    { backgroundColor: '#ff9a00',title: '+',  disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
  ],
  [
    { backgroundColor: '#4e4e4e',title: 'Rad', disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    {backgroundColor: '#4e4e4e', title: 'sinh', disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    { backgroundColor: '#4e4e4e',title: 'cosh', disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    {backgroundColor: '#4e4e4e', title: 'tanh', disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    {backgroundColor: '#4e4e4e', title: 'π', disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    {backgroundColor: '#4e4e4e', title: 'Rand', disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    {backgroundColor: '#636466', title: '0',disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 2},
    {backgroundColor: '#636466', title: ',',disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
    { backgroundColor: '#ff9a00',title: '=',disable: false, borderColor: '#555759', color: '#e8e9ea', flex: 1 },
  ],
];

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [isSecondValue, setIsSecondValue] = useState(false);
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState(null);

  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  const rows = isLandscape ? rowsLandscape : rowsPortrait;

  const handlePress = (value) => {
    if (value === 'AC') {
      setDisplay('0');
      setOperator(null);
      setFirstValue(null);
      setIsSecondValue(false);
    } else if (value === '=') {
      try {
       
        const sanitizedExpression = display
          .replace(/×/g, '*')
          .replace(/÷/g, '/');
  
        const result = eval(sanitizedExpression);
        setDisplay(result.toString());
      } catch (error) {
        setDisplay('Error');
      }
    } else if (value === '±') {
      setDisplay((prevDisplay) => {
        if (prevDisplay.startsWith('-')) {
          return prevDisplay.slice(1);
        } else {
          return '-' + prevDisplay;
        }
      });
    } else if (['sin', 'cos', 'tan', 'log₁₀', 'ln', 'π', '1/x', 'x²', 'x³', '²√x', '³√x', 'eˣ', '10ˣ'].includes(value)) {
      let result = 0;
      let inputValue = parseFloat(display);
  
      switch (value) {
        case 'sin':
          result = Math.sin(inputValue);
          break;
        case 'cos':
          result = Math.cos(inputValue);
          break;
        case 'tan':
          result = Math.tan(inputValue);
          break;
        case 'log₁₀':
          result = Math.log10(inputValue);
          break;
        case 'ln':
          result = Math.log(inputValue);
          break;
        case 'π':
          result = Math.PI;
          break;
        case '1/x':
          result = 1 / inputValue;
          break;
        case 'x²':
          result = Math.pow(inputValue, 2);
          break;
        case 'x³':
          result = Math.pow(inputValue, 3);
          break;
        case '²√x':
          result = Math.sqrt(inputValue);
          break;
        case '³√x':
          result = Math.cbrt(inputValue);
          break;
        case 'eˣ':
          result = Math.exp(inputValue);
          break;
        case '10ˣ':
          result = Math.pow(10, inputValue);
          break;
      }
      setDisplay(result.toString());
      setIsSecondValue(false);
    } else {
 
      setDisplay((prevDisplay) => (prevDisplay === '0' ? value : prevDisplay + value));
      setIsSecondValue(false);
    }
  };
  
  
  

  const styles = isLandscape ? createStylesLandscape() : createStylesPortrait();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{display}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {rows.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((button, buttonIndex) => (
              <CalculatorButton
                key={buttonIndex}
                title={button.title}
                onPress={handlePress}
                backgroundColor={button.backgroundColor}
                color={button.color}
                disabled={button.disable}
                style={{ flex: button.flex }}
              />
            ))}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

const createStylesPortrait = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f4f4f4',
    },
    displayContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      backgroundColor: '#4e4e4e',
      padding: 30,
    },
    displayText: {
      fontSize: 60,
      color: '#fff',
    },
    buttonContainer: {
      flex: 3,
      flexDirection: 'column',
    },
    row: {
      flexDirection: 'row',
      height: 90,
    },
  });

const createStylesLandscape = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f4f4f4',
    },
    displayContainer: {
      flex: 0.4,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      backgroundColor: '#4e4e4e',
      padding: 15,
    },
    displayText: {
      fontSize: 25,
      color: '#fff',
    },
    buttonContainer: {
      flex: 3,
      flexDirection: 'column',
    },
    row: {
      flexDirection: 'row',
      height: 55, 
  
    },
  });

export default Calculator;