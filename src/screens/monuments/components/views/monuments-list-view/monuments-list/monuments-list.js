import React from "react";
import { FlatList, View } from "react-native";
import { connect } from "react-redux";
import { changeSelectedMonument } from "../../../../../../redux/actions/selected-monument-actions";
import MonumentListItem from "./monuments-list-item";
import { useNavigation } from "@react-navigation/native";

function MonumentsList({ monuments, transition }) {
  
  const navigation = useNavigation();

  const handlePress = (monument, imageBase64) => {
    const shareId = `item-${monument.id}`;
    if (!transition) {
      navigation.navigate("Detail", {
        monument,
        shareId,
        imageBase64,
      });
    }
  };

  const renderItem = ({ item }) => {
    return <MonumentListItem monument={item} onPress={handlePress} />;
  };
  return (
    <FlatList
      style={{ flex: 1 }}
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 20,
      }}
      renderItem={renderItem}
      data={monuments}
      keyExtractor={(item) => item.id + ""}
      ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
    />
  );
}

const bindStateToProps = ({
  monuments: { monuments },
  transition: { transition },
}) => ({ monuments, transition });
const bindDispatchToProps = { changeSelectedMonument };

export default connect(bindStateToProps, bindDispatchToProps)(MonumentsList);
