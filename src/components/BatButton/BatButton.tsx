import React, { useState } from 'react';
import {Text, Pressable } from 'react-native';

import { styles } from './styles';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePass from '../../services/passwordService';

export function BatButton() {
    const [pass, setPass] = useState('')

    function handleGeneratorButton(){
        let generateToken = generatePass()
        setPass(generateToken)
    }
  return (
    <>
        <BatTextInput pass={pass} />

        <Pressable
            onPress={handleGeneratorButton}
            style={styles.button}
        >
            <Text style={styles.text}>GENERATE</Text>
        </Pressable>

        <Pressable
            style={styles.button}
        >
            <Text style={styles.text}>⚡ COPY</Text>
        </Pressable>

    </>
  );
}