import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Cards = () => {
  return (
    <View
        style={{
            padding: 10
        }}
    >
      <Text
        style={{
            fontSize: 20,
            fontWeight: "600"
        }}
      >
        Inspiration for your next trip
      </Text>

    <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
    >
      <Pressable style={styles.pressableComponent} >
        <Image
            style={{
                width: 190,
                height: 150,
                borderTopRightRadius: 8,
                borderTopLeftRadius: 8,
            }}
            source={{
                uri: "https://i.pinimg.com/originals/b7/5f/da/b75fdaff1a53ea1cd53a7d1ac8b38c75.jpg",
            }}
        />
        <View style={styles.viewComponent}>
            <Text style={styles.textMain}>
                London
            </Text>
            <Text style={styles.textSub}>
                280m away
            </Text>
        </View>
      </Pressable>

      <Pressable style={styles.pressableComponent} >
        <Image
            style={{
                width: 190,
                height: 150,
                borderTopRightRadius: 8,
                borderTopLeftRadius: 8,
            }}
            source={{
                uri: "https://data.1freewallpapers.com/download/dream-house.jpg",
            }}
        />
        <View style={styles.viewComponent}>
            <Text style={styles.textMain}>
                Devonshire
            </Text>
            <Text style={styles.textSub}>
                500m away               
            </Text>
        </View>
      </Pressable>

      <Pressable style={styles.pressableComponent} >
        <Image
            style={{
                width: 190,
                height: 150,
                borderTopRightRadius: 8,
                borderTopLeftRadius: 8,
            }}
            source={{
                uri: "https://cutewallpaper.org/21/hdphoto-download/Downloadfull-hd-wallpaper-download-1080p-in-2019-Nature-.jpg",
            }}
        />
        <View style={styles.viewComponent}>
            <Text style={styles.textMain}>
                Cardiff
            </Text>
            <Text style={styles.textSub}>
                450m away
            </Text>
        </View>
      </Pressable>

      <Pressable style={styles.pressableComponent} >
        <Image
            style={{
                width: 190,
                height: 150,
                borderTopRightRadius: 8,
                borderTopLeftRadius: 8,
            }}
            source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6JaRuZKF_iJQOmWs6yAozQHmpnVNV17YJe9WWa3PTW78SkMHkm5D3Rfs-_JSAmNwS5wE&usqp=CAU",
            }}
        />
        <View style={styles.viewComponent}>
            <Text style={styles.textMain}>
                Inverness
            </Text>
            <Text style={styles.textSub}>
                600m away
            </Text>
        </View>
      </Pressable>
      </ScrollView>
    </View>
  )
}

export default Cards

const styles = StyleSheet.create({
    pressableComponent: {
        marginTop: 10,
        margin: 10
    },
    viewComponent: {
        backgroundColor: "orange",
        width: 190,
        padding: 10
    },
    textMain: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
    },
    textSub: {
        color: "white",
        fontSize: 14,
        fontWeight: "400"
    }
})