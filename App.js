import React, { useState } from "react";
import { View, TextInput, Text, Button, Image, Clipboard } from "react-native";
import { toArabicReplacement } from "./arabicConversionRules";
import img from "./assets/palestine.png";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [convertedText, setConvertedText] = useState("");

  const convertText = () => {
    let converted = "";
    for (let i = 0; i < inputText.length; i++) {
      const char = inputText[i];
      const replacement = toArabicReplacement[char] || char;
      converted += replacement;
    }
    setConvertedText(converted);
    Clipboard.setString(convertedText);
  };

  return (
    <View
      style={{
        height: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image style={{ height: 200, width: 200 }} source={img} />
      <Text style={{ marginBottom: 10 }}>اللهم انصر فلسطين🇵🇸</Text>
      <Text style={{ marginBottom: 10 }}>لا تتوقف عن دعم فلسطين🇵🇸</Text>
      <Text style={{ marginBottom: 10 }}>
        النص بعد التحويل يتم نسخه تلقائيا
      </Text>
      <TextInput
        placeholder="اكتب النص هنا"
        onChangeText={(text) => setInputText(text)}
        value={inputText}
        style={{
          width: "70%",
          borderWidth: 2,
          borderBottomColor: "#E91E63",
          backgroundColor: "#FBD2E0",
          borderRightColor: "transparent",
          borderTopColor: "transparent",
          borderLeftColor: "transparent",
          marginBottom: 10,
        }}
      />
      <Button color={"#E91E63"} title="تحويل النص" onPress={convertText} />
      <Text style={{ marginTop: 10 }}>{convertedText}</Text>
    </View>
  );
}