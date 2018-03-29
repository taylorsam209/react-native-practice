import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList, SectionList } from 'react-native';
import img from "./assets/watch.jpg";

const rows = [
  { id: 0, text: "Row one" },
  { id: 1, text: "Row two" },
  { id: 2, text: "Row three" }
];

const extractKey = ({ id }) => id;

const sections = [
  {
    id: 0,
    title: "First Header",
    data: [
      {id: 0, text: "Let's be friends"},
      {id: 1, text: "Coding is great"},
      {id: 2, text: "I like turtles"}
    ]
  },
    {
      id: 1,
    title: "Second Header",
    data: [
      {id: 3, text: "We are different from the others"},
      {id: 4, text: "I like Second section!"},
      {id: 5, text: "Make this the greatest day!!!!"}
    ]
  }
];

const sectionKey = ({id}) => id;

class App extends Component {

  renderItem = ({ item }) => {
    return (
      <Text style={styles.row}>
        {item.text}
      </Text>
    )
  }

  sectionRenderItem =({item}) => {
    return(
      <Text style={styles.row}>
      {item.text}
      </Text>
    )
  }

  renderSectionHeader = ({section}) => {
    return(
      <Text style={styles.header}>
      {section.title}
      </Text>
    )
  }

  render() {
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
          <Text>This is my first react native code!</Text>
          <View style={styles.flex}>
            <View style={styles.box}>
              <Text style={styles.text}> I am a box</Text>
            </View>
          </View>
          <Image
            style={styles.image}
            source={img}
          />
        </View>
        <View style={styles.boxLarge} />
        <View style={styles.boxSmall} />
        <View style={styles.boxLarge} />
        <ScrollView horizontal>
          <View style={styles.boxSmall} />
          <View style={styles.boxSmall} />
          <View style={styles.boxSmall} />
        </ScrollView>

        <FlatList
          style={styles.list}
          data={rows}
          renderItem={this.renderItem}
          keyExtractor={extractKey}
        />

          <SectionList
        style={styles.list}
        sections={sections}
        renderItem={this.sectionRenderItem}
        renderSectionHeader={this.renderSectionHeader}
        keyExtractor={sectionKey}
      />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: 'cornflowerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 20
  },
  text: {
    color: "red",
    fontSize: 24,
    padding: 10,
    backgroundColor: "whitesmoke"
  },
  image: {
    height: 200,
    width: 200,
    margin: 20
  },
  boxSmall: {
    width: 200,
    height: 200,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'skyblue',
  },
  boxLarge: {
    width: 300,
    height: 300,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'steelblue',
  },
  list: {
    marginTop: 20,
    flex: 1
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
    color: "white",
    fontSize: 20
  },
  header: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'steelblue',
    color: 'white',
    fontWeight: 'bold',
  }
});

export default App;