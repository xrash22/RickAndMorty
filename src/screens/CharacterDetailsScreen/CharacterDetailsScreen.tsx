import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useLayoutEffect, useState } from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { RootStackParams, SCREEN_NAMES } from '../../router';
import { useNavigation } from '../../hooks';
import styled from 'styled-components/native';
import { theme } from '../../themes';
import { Icon, Text, View } from '../../components';
import { CollapseView, PressableStyled } from './styles';

export const CharacterDetailsScreen = () => {
  const [showEpisodes, setShowEpisodes] = useState(false);
  const navigation = useNavigation();
  const { params } =
    useRoute<RouteProp<RootStackParams, SCREEN_NAMES.CHARACTER_DETAILS>>();
  const {
    name,
    image,
    status,
    species,
    type,
    gender,
    origin,
    location,
    episode,
  } = params.character;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          width={300}
          height={300}
          source={{ uri: image }}
          style={{ alignSelf: 'center' }}
        />
        <View style={styles.cardDetails}>
          <View>
            <Text fontSize="sm">Status</Text>
            <Text fontSize="lg" bold>
              {status}
            </Text>
          </View>
          <View>
            <Text fontSize="sm">Specie</Text>
            <Text fontSize="lg" bold>
              {species}
            </Text>
          </View>
          <View>
            <Text fontSize="sm">Gender</Text>
            <Text fontSize="lg" bold>
              {gender}
            </Text>
          </View>
        </View>

        <View style={{ marginBottom: 8 }}>
          <Text fontSize="sm">Gender</Text>
          <Text bold fontSize="lg">
            {gender}
          </Text>
        </View>
        <View style={{ marginBottom: 8 }}>
          <Text fontSize="sm">Origin</Text>
          <Text bold fontSize="lg">
            {origin.name}
          </Text>
        </View>
        <View style={{ marginBottom: 8 }}>
          <Text fontSize="sm">Location</Text>
          <Text bold fontSize="lg">
            {location.name}
          </Text>
        </View>

        {type !== '' && (
          <>
            <Text fontSize="sm">Type</Text>
            <Text bold fontSize="lg">
              {type}
            </Text>
          </>
        )}
        {episode.length && (
          <>
            <PressableStyled
              showEpisodes={showEpisodes}
              onPress={() => setShowEpisodes(prev => !prev)}>
              <Text>Episodes</Text>
              <Icon
                source={require('../../assets/arrow.png')}
                width={24}
                height={24}
              />
            </PressableStyled>
            {showEpisodes && (
              <CollapseView>
                {episode.map(e => (
                  <Text style={{ marginVertical: 4 }} key={e}>
                    {e}
                  </Text>
                ))}
              </CollapseView>
            )}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    marginHorizontal: 24,
  },
  cardDetails: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginVertical: 12,
  },
  episodes: {
    backgroundColor: theme.colors['blue-1'],
    paddingVertical: 4,
    paddingLeft: 4,
  },
});

const CardDetails = styled(View)``;
