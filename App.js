import { StyleSheet, FlatList, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

import feed from './src/utils/feed';
import Lista from './src/Lista';

export default function App() {
  const [feeder, setFeeder] = useState(feed);

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={require('./src/img/logo.png')}
            style={styles.logo}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={require('./src/img/send.png')}
            style={styles.send}
          />
        </TouchableOpacity>
      </View>

      <FlatList 
      showsHorizontalScrollIndicator={false}
      data={feeder}
      renderItem={(item) => <Lista data={item} />}
      keyExtractor={(item) => item.id}
      />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    marginTop: 40,
    height: 55,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    borderTopWidth: 0.2,
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 1,
  },
  send:{
    width: 23,
    height: 23
  },
});
