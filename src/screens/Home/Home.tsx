import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { BatLogo } from "../../components/BatLogo/BatLogo";

export default function Home() {
    return(
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <BatLogo />
            </View>
            <Text>Home works!!</Text>
        </View>
    )
}