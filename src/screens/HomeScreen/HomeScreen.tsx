import React, { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { useCharacters } from '../../hooks';
import { Card, FilterModal, Header, ModalRef, Text } from '../../components';
import useStore from '../../store/store';
import { Footer } from './styles';

export const HomeScreen = () => {
  const filters = useStore(state => state.filters);
  const { loading, characters, getCharacters, getCharactersByQuery, clear } =
    useCharacters();
  const modalRef = useRef<ModalRef>(null);
  const [textName, setTextName] = useState('');
  const [loadingSearch, setLoadingSearch] = useState(false);

  useEffect(() => {
    const isValidName = textName !== '';
    setLoadingSearch(isValidName);
    const timeId = setTimeout(() => {
      isValidName &&
        getCharactersByQuery({ name: textName }).then(() =>
          setLoadingSearch(false),
        );
    }, 500);

    if (!isValidName) {
      clear();
    }

    return () => clearTimeout(timeId);
  }, [textName]);

  useEffect(() => {
    if (filters.status) {
      setTextName('')
      getCharactersByQuery(filters);
    }
    clear();
  }, [filters]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header
        value={textName}
        onChangeText={setTextName}
        onPressFilter={() => modalRef?.current?.openModal()}
      />
      {!loadingSearch && (
        <FlatList
          numColumns={2}
          data={characters}
          renderItem={({ item }) => <Card {...item} />}
          keyExtractor={item => item.id.toString()}
          onEndReachedThreshold={0.1}
          contentContainerStyle={{ gap: 15 }}
          columnWrapperStyle={{ gap: 20 }}
          ListFooterComponent={() =>
            textName === '' && (
              <Footer onPress={getCharacters}>
                <Text>Load more</Text>
              </Footer>
            )
          }
        />
      )}
      {loading ||
        (loadingSearch && <ActivityIndicator size="large" style={{ flex: 1 }} />)}
      <FilterModal ref={modalRef} />
    </SafeAreaView>
  );
};
