import React from 'react';
import {Text, Pressable } from 'react-native';

import { styles } from './styles';

export function BatButton() {

  return (
    <>
      <Pressable

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