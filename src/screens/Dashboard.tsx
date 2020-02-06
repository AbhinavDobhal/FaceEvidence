import React, {memo, useState} from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import ExamScreen from '../screens/ExamScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Dashboard = () => {
  const [tab, setTab] = useState({
    index: 0,
    routes: [
      {
        key: 'exam',
        title: 'EXAM',
        icon: 'map-marker-radius',
        color: '#3F51B5',
      },

      {key: 'profile', title: 'PROFILE', icon: 'account-circle'},
    ],
  });

  const _renderScene = BottomNavigation.SceneMap({
    exam: ExamScreen,
    profile: ProfileScreen,
  });
  const _onTabPressed = (index: number) => {
    setTab({...tab, index: index});
  };
  return (
    <BottomNavigation
      navigationState={tab}
      onIndexChange={_onTabPressed}
      renderScene={_renderScene}
    />
  );
};

export default memo(Dashboard);
