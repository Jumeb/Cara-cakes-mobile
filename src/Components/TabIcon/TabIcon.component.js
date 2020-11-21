import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';

import theme from '../../../resources/Colors/theme';
import styles from './TabIcon.styles';

const TabIcon = ({title, activeTabIndex, selected, element}) => {
  let icon = '';
  let index = -1;
  if (title === 'events') {
    icon = 'ios-home';
    index = 0;
  }
  if (title === 'review') {
    icon = 'ios-chatbubbles-sharp';
    index = 2;
  }
  if (title === 'settings') {
    icon = 'ios-cog-outline';
    index = 3;
  }
  if (title === 'orders') {
    icon = 'ios-receipt-outline';
  }
  if (title === 'bakers') {
    icon = 'ios-book-outline';
    index = 1;
  }

  console.log('focused', activeTabIndex);

  return (
    <TouchableOpacity
      style={styles.tabTab}
      onPress={() => Actions[title]()}
      key={element.key}>
      <Icons
        name={icon}
        size={20}
        color={
          activeTabIndex === index ? theme.primary_color : theme.light_grey
        }
      />
      <Text
        style={
          activeTabIndex === index
            ? styles.tabTabTextSelected
            : styles.tabTabText
        }>
        {title.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
};

export default TabIcon;
