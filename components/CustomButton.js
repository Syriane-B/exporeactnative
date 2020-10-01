import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';


const CustomButton = props => {

    const { icon, label, ...rest } = props;

    return (
        <View 
        style={styles.container} >
            <Button
                {...rest}
                title={label}
                titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
                linearGradientProps={{
                    colors: ['#FF9800', '#F44336'],
                    start: [1, 0],
                    end: [0.2, 0],
                }}
                buttonStyle={{
                    borderWidth: 0,
                    borderColor: 'transparent',
                    borderRadius: 20,
                    width: 220,
                }}
                icon={{
                    name: icon,
                    type: 'antdesign',
                    size: 15,
                    color: '#e9f2f0',
                }}
                iconRight
                iconContainerStyle={{ marginLeft: 10, marginRight: -10, marginTop: 5 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    }
  });

export default CustomButton;