import React from "react";
import styles from "./Style";
import { View, TouchableOpacity, Text } from "react-native";

export default (Comp) => {
  return (
    <View style={styles.buttons}>
      {Comp.buttons.map((button) =>
        button === "=" ? (
          <TouchableOpacity
            onPress={() => Comp.action(button)}
            key={button}
            style={[styles.button, { backgroundColor: "#6833e4" }]}
          >
            <Text style={[styles.textButton, { color: "white", fontSize: 30 }]}>
              {button}
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => Comp.action(button)}
            key={button}
            style={styles.button}
          >
            <Text
              style={[
                styles.textButton,
                { color: typeof button === "number" ? "white" : "#28203e" },
              ]}
            >
              {button}
            </Text>
          </TouchableOpacity>
        )
      )}
    </View>
  );
};
