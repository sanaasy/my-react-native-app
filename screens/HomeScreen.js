import React from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import Icon from "../assets/react.png";
// import { AppLoading } from 'expo';
// import { useFonts, Staatliches_400Regular } from '@expo-google-fonts/staatliches';

const HomeScreen = (props) => {
  // let [fontsLoaded] = useFonts({
  //   Staatliches_400Regular,
  // });
    
  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // } else {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={Icon} />
      <Text style={styles.appName}>RNCONF</Text>
      <Text style={styles.description}>
        The best React Native conference, powered by Shopify
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          props.navigation.navigate("Schedule");
        }}
      >
        <Text style={styles.buttonText}>See schedule</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 24
    },
    image: {
        width: 70,
        height: 70,
        marginBottom: 8
    },
    appName: {
        fontSize: 60,
        fontWeight: "700",
        color: "#0abde3"
    },
    description: {
        paddingHorizontal: 48,
        textAlign: "center",
        marginBottom: 48,
    },
    button: {
        backgroundColor: "#54a0ff",
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold"
    }
});

export default HomeScreen;