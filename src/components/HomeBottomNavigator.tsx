import React, {memo, useState} from 'react';
import {
  ScrollView,
  View,
  Image,
  Dimensions,
  StyleSheet,
  Platform,
} from 'react-native';
// import {theme} from '../core/theme';
import {BottomNavigation, Text} from 'react-native-paper';
type Props = {
  children: React.ReactNode;
};
const PhotoGallery = () => <Text>Music</Text>;
const PhotoGallery1 = () => <Text>Music1</Text>;
const PhotoGallery2 = () => <Text>Music2</Text>;
const HomeBottomNavigator = () => {
  const [tab, setTab] = useState({
    index: 0,
    routes: [
      {key: 'album', title: 'Album', icon: 'image-album', color: '#6200ee'},
      {key: 'test', title: 'Album', icon: 'image-album', color: '#6200ee'},
      {
        key: 'favorites',
        title: 'Favorites',
        icon: 'heart',
        color: '#00796b',
      },
    ],
  });

  const _renderScene = BottomNavigation.SceneMap({
    album: PhotoGallery,
    favorites: PhotoGallery1,
    test: PhotoGallery2,
  });
  const _onLoginPressed = (index: number) => {
    console.log(index);
    setTab({...tab, index: index});
  };

  return (
    <BottomNavigation
      navigationState={tab}
      onIndexChange={_onLoginPressed}
      renderScene={_renderScene}
    />
  );
};

const styles = StyleSheet.create({
  ...Platform.select({
    web: {
      content: {
        // there is no 'grid' type in RN :(
        display: 'grid' as 'none',
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
        gridRowGap: '8px',
        gridColumnGap: '8px',
        padding: 8,
      },
      item: {
        width: '100%',
        height: 150,
      },
    },
    default: {
      content: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 4,
      },
      item: {
        height: Dimensions.get('window').width / 2,
        width: '50%',
        padding: 4,
      },
    },
  }),
  photo: {
    flex: 1,
    resizeMode: 'cover',
  },
});
export default memo(HomeBottomNavigator);
