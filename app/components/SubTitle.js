import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

const SubTitle = ({title}) => (
    <View>
        <Text style={styles.subTitleText}>{title}</Text>
    </View>
);

const styles = StyleSheet.create({
    subTitleText:{
        color: "#000",
        fontSize: 18,
        fontWeight: "600"
    }
})

export default SubTitle;