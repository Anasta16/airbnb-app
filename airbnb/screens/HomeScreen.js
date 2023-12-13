import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Cards from '../components/Cards'

const HomeScreen = () => {
  return (
    <View>
        <Header />
        
        <Cards />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})