import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'

const CoinsScreen = (props) => {

  const handlePress = () => {
    console.log("go to details", props)

    props.navigation.navigate('CoinDetail')
  }

    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>CoinsScreen</Text>
        <Pressable style={styles.btn} onPress={handlePress} >
          <Text style={styles.btnText}>Ir a details</Text>
        </Pressable>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  titleText: {
    color: '#fff',
    textAlign: 'center'
  },
  btn: {
    padding: 8,
    backgroundColor: 'blue',
    borderRadius: 8,
    margin: 16
  },
  btnText: {
    color: '#fff',
    textAlign: 'center'
  }
})

export default CoinsScreen
