import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Homepage from './src/screens/homepage/Homepage'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const App = () => {
  return (
    <SafeAreaProvider style={{ flex: 1}}>
      <SafeAreaView style={{ flex: 1}} edges={['right', 'top', 'left']}>
        <Homepage />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({})