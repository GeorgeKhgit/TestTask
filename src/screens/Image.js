import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export const ImageItem = ({route}) => {
  const {detailinfo} = route.params;
  console.log(detailinfo);
  return (
    <View style={styles.container}>
      <Image style={styles.containerImage} source={{uri: detailinfo}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  containerImage: {
    width: '100%',
    height: '100%',
  },
});
