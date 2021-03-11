import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { changeSelectedMonument } from "../../../../../../redux/actions/selected-monument-actions";
import MonumentListItem from "./monuments-list-item";
import { useNavigation } from "@react-navigation/native";
import EmptyResult from "./empty-result";
import { VirtualizedList } from "react-native";
import Tags from "../../../../../../models/tags";

function MonumentsList({ monuments, loading, transition }) {
  if (monuments.length == 0 && !loading) return <EmptyResult />;

  const navigation = useNavigation();

  const removeEasterEggs = (monument) => {
    if (!monument.tags || monument.tags.length == 0) return true;
    return !monument.tags.includes(Tags.EASTER_EGG);
  };

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

  monuments = monuments.filter(removeEasterEggs);

  return (
    <VirtualizedList
      style={{ flex: 1 }}
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 20,
      }}
      renderItem={renderItem}
      data={monuments}
      getItemCount={() => monuments.length}
      keyExtractor={(item) => item.id + ""}
      windowSize={20}
      getItem={(data, index) => data[index]}
      ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
    />
  );
}

const bindStateToProps = ({
  monuments: { monuments, loading },
  transition: { transition },
}) => ({ monuments, transition, loading });
const bindDispatchToProps = { changeSelectedMonument };

export default connect(bindStateToProps, bindDispatchToProps)(MonumentsList);
