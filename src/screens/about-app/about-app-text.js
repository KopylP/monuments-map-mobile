import React from "react";
import { useLocate } from "../../components/hooks/locate-hooks";
import uk from "./markdown/uk/about-app";
import pl from "./markdown/pl/about-app";
import ru from "./markdown/ru/about-app";
import en from "./markdown/en/about-app";
import { Text, View } from "react-native";
import Markdown from "react-native-markdown-display";

export default function AboutAppText() {
  const { culture } = useLocate();
  let text = null;
  switch (culture.code) {
    case "uk-UA":
      text = uk;
      break;
    case "en-GB":
      text = en;
      break;
    case "pl-PL":
      text = pl;
      break;
    case "ru-RU":
      text = ru;
      break;
    default:
      text = ua;
  }

  return (
    <View style={{flex: 1}}>
      <Markdown
        style={{
          text: {
            fontSize: 15,
          },
          bullet_list_icon: {
            marginLeft: 10,
            marginRight: 10,
            marginTop: 7,
            borderRadius: 3,
            borderWidth: 1,
            width: 6,
            height: 6,
            backgroundColor: "black",
          },
        }}
      >
        {text}
      </Markdown>
    </View>
  );
}
