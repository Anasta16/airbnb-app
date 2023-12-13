import { ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

const Header = () => {
  return (
    <View>
      <ImageBackground 
        style={{ 
            width: '100%', 
            height: 540
        }}
        source={{
           uri:  "https://wallpapersmug.com/download/1280x900/3126d4/outing-campfire-tent-night.jpg",
        }}>
            <View style={{ 
                    backgroundColor: "white",
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 30,
                    width: 220,
                    padding: 6,
                    borderRadius: 16,
                    marginLeft: "auto",
                    marginRight: "auto",
                }}>
                <AntDesign 
                    name="search1" 
                    size={18} 
                    color="#C71585" 
                />
                <TextInput 
                    placeholder="Where do you want to go?"
                    style={{
                        color: "red",
                        fontSize: 16,
                        paddingHorizontal: 10
                    }}
                />
            </View>

            <Pressable
                style={{
                    backgroundColor: "white",
                    width: 120,
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "auto",
                    marginBottom: "auto",
                    padding: 10,
                    borderRadius: 16,
                }}
            >
                <Text
                    style={{
                        color: "#C71585",
                        backgroundColor: "white",
                        textAlign: "center",
                        fontSize: 17,
                        fontWeight: "bold",
                    }}
                >
                    I'm flexible
                </Text>
            </Pressable>

            <View
                style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginBottom: 20
                }}
            >
                <Text
                    style={{
                        color: "white",
                        fontSize: 26,
                        fontWeight: "bold",
                    }}
                >
                    Not sure where to Go?
                </Text>
                <Text
                    style={{
                        color: "white",
                        fontSize: 26,
                        fontWeight: "bold",
                        textAlign: "center",
                    }}
                >
                    Perfect
                </Text>
            </View>
        </ImageBackground>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})