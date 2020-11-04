import * as React from "react";
import { Text, View, SafeAreaView } from "react-native";

import Carousel from "react-native-snap-carousel";
import { Dimensions } from "react-native";

export default class MonumentsCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 3,
      carouselItems: [
        {
          title: "Item 1",
          text: "Text 1",
        },
        {
          title: "Item 2",
          text: "Text 2",
        },
        {
          title: "Item 3",
          text: "Text 3",
        },
        {
          title: "Item 4",
          text: "Text 4",
        },
        {
          title: "Item 5",
          text: "Text 5",
        },
      ],
    };
  }

  _renderItem({ item, index }) {
    return (
      <View
        style={{
          backgroundColor: "red",
          borderRadius: 5,
          height: 300,
          padding: 50,
          marginLeft: 25,
          marginRight: 25,
        }}
      >
        <Text style={{ fontSize: 30 }}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    );
  }

  render() {
    const screenWidth = Math.round(Dimensions.get("window").width);
    return (
        <Carousel
          layout={"default"}
          ref={(ref) => (this.carousel = ref)}
          data={this.state.carouselItems}
          sliderWidth={screenWidth}
          itemWidth={screenWidth}
          firstItem={2}
          renderItem={this._renderItem}
          onSnapToItem={(index) => this.setState({ activeIndex: index })}
        />
    );
  }
}
