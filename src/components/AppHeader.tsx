import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {Appbar, Title} from 'react-native-paper';
import {theme} from '../core/theme';

type Props = {
  titleText: React.ReactNode;
};

const AppHeader = ({titleText}: Props) => (
  <Appbar.Header style={styles.headerContainer}>
    <View style={styles.container}>
      <Title style={styles.title}>{titleText}</Title>
    </View>
  </Appbar.Header>
);

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: theme.colors.primary,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: theme.colors.surface,
  },
});
export default memo(AppHeader);
