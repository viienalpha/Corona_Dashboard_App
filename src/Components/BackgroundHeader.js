/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import LineargGradient from 'react-native-linear-gradient';
const W = Dimensions.get('window').width;

export default function BackgroundHeader() {
    return (
        <LineargGradient start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0, 0.5, 0.6]}
            style={styles.lineargGradient}
            colors={['#6C7FDF', '#C56AE0']}
        />
    );
}

const styles = StyleSheet.create({
    lineargGradient: {
        height: (W * 3) / 4,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
});
