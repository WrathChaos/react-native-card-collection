import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, Container, SettingsCard } from "react-native-card-collection";

export default class App extends React.Component {
  renderDeviceInfoContainers() {
    return (
      <View>
        <Container title="Device OS" subtitle="iOS" />
        <Container title="Screen Height" subtitle="896" />
        <Container title="Screen Width" subtitle="414" />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleStyle}>React Native Card Collection</Text>
        <Card>{this.renderDeviceInfoContainers()}</Card>
        <View style={{ marginTop: 32 }}>
          <SettingsCard />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: "15%",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  titleStyle: {
    fontSize: 24,
    fontWeight: "700",
    paddingBottom: 36
  }
});
