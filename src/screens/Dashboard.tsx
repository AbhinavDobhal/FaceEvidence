import React, {memo, useState} from 'react';
import {BottomNavigation, Text} from 'react-native-paper';

const PhotoGallery = () => <Text>Music</Text>;
const PhotoGallery1 = () => <Text>Music1</Text>;
const PhotoGallery2 = () => <Text>Music2</Text>;

const Dashboard = () => {
  const [tab, setTab] = useState({
    index: 0,
    routes: [
      {key: 'album', title: 'Album', icon: 'image-album', color: '#6200e1'},
      {key: 'test', title: 'Album', icon: 'image-album', color: '#6100ee'},
      {key: 'favorites', title: 'Favorites', icon: 'heart', color: '#00696b'},
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

export default memo(Dashboard);
