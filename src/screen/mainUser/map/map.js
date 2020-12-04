import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { BackgroundCarousel } from "../../../components";

const images = [
  "https://firebasestorage.googleapis.com/v0/b/simple-chat-app-c1480.appspot.com/o/tangkuban1.jpg?alt=media&token=06baf0f7-7b61-4521-b1e1-f86bf9cd7e04",
  "https://firebasestorage.googleapis.com/v0/b/simple-chat-app-c1480.appspot.com/o/tangkuban2.jpg?alt=media&token=1b331d9d-110a-41d4-8b21-17d2606e85e9",
  "https://firebasestorage.googleapis.com/v0/b/simple-chat-app-c1480.appspot.com/o/tangkuban3.jpg?alt=media&token=23a5f7f2-46ad-4e2e-97d8-f233202fec10",
  "https://firebasestorage.googleapis.com/v0/b/simple-chat-app-c1480.appspot.com/o/tangkuban4.jpg?alt=media&token=8b82ef81-2f6b-4f15-8548-1df273ed2282",
  "https://firebasestorage.googleapis.com/v0/b/simple-chat-app-c1480.appspot.com/o/tangkuban5.jpg?alt=media&token=079ecd88-1b3c-4231-9132-c8ed5434b9fb"
];
export default function map() {
  return (
    <View style={styles.container}>
      <BackgroundCarousel images={images} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
});
