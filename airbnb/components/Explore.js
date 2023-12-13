import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Explore = () => {

    const [places, setPlaces] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await axios.get("https://links.papareact.com/pyp");
              setPlaces(response.data);
            } catch (error) {
              console.error("Error fetching data:", error.message);
            }
          };
    
        fetchData();
      }, []);

  return (
    <View style={{
        padding: 10
    }}>
      <Text style={{fontSize: 18, fontWeight: "500"}}>Explore More</Text>

      <FlatList 
        data={places}
        renderItem={({item}) => {
            <View>{item.distance}</View>
        }}
      />
    </View>
  )
}

export default Explore

const styles = StyleSheet.create({})