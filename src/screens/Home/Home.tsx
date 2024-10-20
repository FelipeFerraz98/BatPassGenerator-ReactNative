import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatTextInput } from "../../components/BatTextInput/BatTextInput";

export default function Home() {
    return(
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <BatLogo />
            </View>

            <View style={styles.inputContainer}>
                <BatTextInput />
            </View>
        </View>
    )
}