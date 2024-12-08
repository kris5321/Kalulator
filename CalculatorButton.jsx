import React from 'react';
import { TouchableOpacity, Text, StyleSheet, useWindowDimensions } from 'react-native';

const CalculatorButton = ({ title, onPress, backgroundColor, color, disabled, style }) => {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  const styles = isLandscape ? createLandscapeStyles() : createPortraitStyles();

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor },
        disabled && styles.disabledButton,
        style,
      ]}
      onPress={() => !disabled && onPress(title)}
      disabled={disabled}
    >
      {title !== '' && (
        <Text style={[styles.buttonText, { color }]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const createPortraitStyles = () =>
  StyleSheet.create({
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 100,
      flex: 1,
      borderWidth: 1,
      borderColor: '#555759',
    },
    buttonText: {
      fontSize: 30,
    },
    disabledButton: {
      backgroundColor: '#4e4e4e',
    },
  });

const createLandscapeStyles = () =>
  StyleSheet.create({
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 80,
      flex: 1,
      borderWidth: 1,
      borderColor: '#555759',
    },
    buttonText: {
      fontSize: 24,
    },
    disabledButton: {
      backgroundColor: '#4e4e4e',
    },
  });

export default CalculatorButton;
