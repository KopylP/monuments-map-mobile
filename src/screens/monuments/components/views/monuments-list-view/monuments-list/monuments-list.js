import React from "react";
import { FlatList, View } from "react-native";
import { connect } from "react-redux";
import { changeSelectedMonument } from "../../../../../../redux/actions/selected-monument-actions";
import { DefaultTheme } from "../../../../../../theme/default-theme";
import MonumentListItem from "./monuments-list-item";

function MonumentsList({ monuments }) {
  const renderItem = ({ item }) => {
    return <MonumentListItem monument={item} />;
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

const bindStateToProps = ({ monuments: { monuments } }) => ({ monuments });
const bindDispatchToProps = { changeSelectedMonument };

export default connect(bindStateToProps, bindDispatchToProps)(MonumentsList);