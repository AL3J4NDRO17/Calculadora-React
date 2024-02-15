import { View } from "react-native-web";
import { Box, ButtonNumber } from "./Box";
import { styles } from "./Styles";
import React, { useState } from 'react';

export const Calculadora = () => {

    const [input, setInput] = useState('0');
    const [operator, setOperator] = useState('');
    const [prevInput, setPrevInput] = useState('');

    const handleButtonPress = (value) => {
        switch (value) {
            case 'C':
                setInput('0');
                setOperator('');
                setPrevInput('');
                break;
            case '<-':
                setInput((prevInput) => (prevInput.length > 1 ? prevInput.slice(0, -1) : '0'));
                break;
            case 'CE':
                setInput('0');
                setOperator('');
                setPrevInput('');
                break;
            case '=':
                performCalculation();
                break;
            case '+/-':
                setInput((prevInput) => (parseFloat(prevInput) * -1).toString());
                break;
            case '.':
                if (!input.includes('.')) {
                    setInput((prevInput) => prevInput + '.');
                }
                break;
            case '%':
                setInput((prevInput) => (parseFloat(prevInput) / 100).toString()); // Calcular el porcentaje
                break;
            case 'sqrt':
                setInput((prevInput) => (Math.sqrt(parseFloat(prevInput))).toString());
                break;
            case 'x²':
                setInput((prevInput) => (Math.pow(parseFloat(prevInput), 2)).toString());
                break;
            case '1/x':
                setInput((prevInput) => (1 / parseFloat(prevInput) * 0.1).toString());
                break;
            default:
                if (value.match(/[0-9]/)) {
                    handleNumberPress(value);
                } else if (value.match(/[\+\-\*\/]/)) {
                    handleOperatorPress(value);
                }
                break;
        }
    };



    const handleNumberPress = (value) => {
        setInput((prevInput) => (prevInput === '0' ? value : prevInput + value));
    };

    const handleOperatorPress = (value) => {
        if (operator && prevInput && input !== 'Error') {
            performCalculation();
        }
        setOperator(value);
        setPrevInput(input);
        setInput('0');
    };

    const performCalculation = () => {
        try {
            const num1 = parseFloat(prevInput);
            const num2 = parseFloat(input);
            if (!isNaN(num1) && !isNaN(num2)) {
                switch (operator) {
                    case '+':
                        setInput((num1 + num2).toString());
                        break;
                    case '-':
                        setInput((num1 - num2).toString());
                        break;
                    case '*':
                        setInput((num1 * num2).toString());
                        break;
                    case '/':
                        if (num2 !== 0) {
                            setInput((num1 / num2).toString());
                        } else {
                            setInput('Error');
                        }
                        break;
                    default:
                        break;
                }
            }
        } catch (error) {
            setInput('Error');
        }
        setOperator('');
        setPrevInput('');
    };

    return (
        <View>
            <Box value={input} />
            <View style={styles.groupButton}>
                <View style={styles.row}>
                    <ButtonNumber text={' % '} colorA={'#e0e0e0'} ColorB={'#eac195'} onPress={() => handleButtonPress('%')} />
                    <ButtonNumber text={'CE'} colorA={'#e0e0e0'} ColorB={'#eac195'} onPress={() => handleButtonPress('CE')} />
                    <ButtonNumber text={' C '} colorA={'#e0e0e0'} ColorB={'#eac195'} onPress={() => handleButtonPress('C')} />
                    <ButtonNumber text={'DEL'} colorA={'#e0e0e0'} ColorB={'#eac195'} onPress={() => handleButtonPress('<-')} /> {/* Cambiado a 'DEL' */}
                </View>
                <View style={styles.row}>
                    <ButtonNumber text={'1/x'} colorA={'#e0e0e0'} ColorB={'#eac195'} onPress={() => handleButtonPress('1/x')} />
                    <ButtonNumber text={' x²'} colorA={'#e0e0e0'} ColorB={'#eac195'} onPress={() => handleButtonPress('x²')} />
                    <ButtonNumber text={'√ '} colorA={'#e0e0e0'} ColorB={'#eac195'} onPress={() => handleButtonPress('sqrt')} />
                    <ButtonNumber text={' / '} colorA={'#e0e0e0'} ColorB={'#eac195'} onPress={() => handleButtonPress('/')} />
                </View>
                <View style={styles.row}>
                    <ButtonNumber text={' 7 '} colorA={'#e0e0e0'} ColorB={'#eac195'} onPress={() => handleButtonPress('7')} />
                    <ButtonNumber text={' 8 '} colorA={'#e0e0e0'} ColorB={'#eac195'} onPress={() => handleButtonPress('8')} />
                    <ButtonNumber text={' 9 '} colorA={'#e0e0e0'} ColorB={'#eac195'} onPress={() => handleButtonPress('9')} />
                    <ButtonNumber text={' * '} colorA={'#e0e0e0'} ColorB={'#eac195'} onPress={() => handleButtonPress('*')} />
                </View>
                <View style={styles.row}>
                    <ButtonNumber text={' 4 '} colorA={'#e0e0e0'} ColorB={'#eac195'} onPress={() => handleButtonPress('4')} />
                    <ButtonNumber text={' 5 '} colorA={'#e0e0e0'} ColorB={'#eac195'} onPress={() => handleButtonPress('5')} />
                    <ButtonNumber text={' 6 '} colorA={'#e0e0e0'} ColorB={'#eac195'} onPress={() => handleButtonPress('6')} />
                    <ButtonNumber text={' - '} colorA={'#e0e0e0'} ColorB={'#eac195'} onPress={() => handleButtonPress('-')} />
                </View>
                <View style={styles.row}>
                    <ButtonNumber text={' 1 '} colorA={'#e0e0e0'} ColorB={'#eac195'} onPress={() => handleButtonPress('1')} />
                    <ButtonNumber text={' 2 '} colorA={'#e0e0e0'} ColorB={'#eac195'} onPress={() => handleButtonPress('2')} />
                    <ButtonNumber text={' 3 '} colorA={'#e0e0e0'} ColorB={'#eac195'} onPress={() => handleButtonPress('3')} />
                    <ButtonNumber text={' + '} colorA={'#e0e0e0'} ColorB={'#eac195'} onPress={() => handleButtonPress('+')} />
                </View>
                <View style={styles.row}>
                    <ButtonNumber text={'+/-'} colorA={'#e0e0e0'} ColorB={'#eac195'} onPress={() => handleButtonPress('+/-')} />
                    <ButtonNumber text={' 0 '} colorA={'#e0e0e0'} ColorB={'#eac195'} onPress={() => handleButtonPress('0')} />
                    <ButtonNumber text={' . '} colorA={'#e0e0e0'} ColorB={'#eac195'} onPress={() => handleButtonPress('.')} />
                    <ButtonNumber text={' = '} colorA={'#e0e0e0'} ColorB={'#eac195'} onPress={() => handleButtonPress('=')} />
                </View>
            </View>
        </View>
    );
}