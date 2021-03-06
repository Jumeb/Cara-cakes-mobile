import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {Actions} from 'react-native-router-flux';

import {ReviewCard, Spacer} from '../../Components';
import styles from './Review.style';
import bakers from '../../../resources/Dummy/bakers.json';
import theme from '../../../resources/Colors/theme';

const Review = () => {
  const [notify, setNotify] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setNotify(false);
    }, 2000);
  });

  const gradient_colors = [
    {start: theme.mix_primary_color_1, end: theme.mix_primary_color_2},
    {start: theme.mix_primary_color_3, end: theme.mix_primary_color_4},
    {start: theme.mix_primary_color_5, end: theme.mix_primary_color_6},
    {start: theme.mix_primary_color_11, end: theme.mix_primary_color_12},
    {start: theme.mix_primary_color_9, end: theme.mix_primary_color_10},
    {start: theme.mix_primary_color_7, end: theme.mix_primary_color_8},
    {start: theme.mix_primary_color_13, end: theme.mix_primary_color_14},
    {start: theme.mix_primary_color_15, end: theme.mix_primary_color_16},
  ];

  let rank = 0;
  const rotate = () => {
    if (rank === 8) {
      rank = 0;
    }
    return rank++;
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={bakers}
        renderItem={({item, key}) => (
          <ReviewCard
            baker={item}
            color={gradient_colors[rotate()]}
            onPress={() => Actions.reviews()}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={Spacer}
      />
    </SafeAreaView>
  );
};

export default Review;
