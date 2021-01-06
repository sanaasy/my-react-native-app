import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const DetailsScreen = (props) => {
    const talkData = props.navigation.state.params.talkData;

    return (
      <View style={styles.container}>
        <View style={styles.talkDetails}>
          <Text style={styles.title}>{talkData.title}</Text>
          <Text style={styles.time}>{talkData.time}</Text>
          <Text style={styles.description}>{talkData.description}</Text>
        </View>
        {talkData.speaker && (
          <View style={styles.speaker}>
            <Image
              style={styles.avatar}
              source={{ uri: talkData.speaker.avatar }}
            />
            <View>
              <Text style={styles.speakerName}>{talkData.speaker.name}</Text>
              <Text style={styles.speakerRole}>{talkData.speaker.role}</Text>
            </View>
          </View>
        )}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    talkDetails: {
      paddingVertical: 48,
      paddingHorizontal: 24,
      borderBottomWidth: StyleSheet.hairlineWidth,
    //   Dimensions are normalized to logical units. So a thickness of 1 can look different (will look like 3 units 
    // wide on a super retina display), so we can use StyleSheet.hairlineWidth instead.
      borderBottomColor: "#ccc"
    },
    title: {
      fontSize: 36,
      fontWeight: "700"
    },
    time: {
      fontWeight: "700",
      marginTop: 16
    },
    description: {
      marginTop: 8
    },
    speaker: {
      padding: 16,
      borderRadius: 8,
      shadowOffset: { width: 0, height: 15 },
      shadowOpacity: 0.25,
      shadowRadius: 28,
      elevation: 3,
      shadowColor: "#000",
      flexDirection: "row",
      backgroundColor: "#fff",
      marginTop: 24,
      marginHorizontal: 24,
      alignItems: "center"
    },
    avatar: {
      height: 80,
      width: 80,
      borderRadius: 80,
      marginRight: 16
    },
    speakerName: {
      fontSize: 16,
      fontWeight: "700",
      marginBottom: 4
    },
    speakerRole: {
      fontSize: 11
    }
  });

export default DetailsScreen;