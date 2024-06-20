import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { IHeaderProps, IHeaderTextProps } from '../../../Types/molecules/Header';
import BackIcon from '../../../icons/svg/back';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ROUTES } from '../../../constant';

const Header: React.FC<IHeaderProps> = ({ title = 'Banco' }) => {
  const navigation = useNavigation();
  const route = useRoute();

  const goBack = () => {
    navigation.goBack();
  };
  const hideBackIconRoutes = [ROUTES.FINANCIAL_PRODUCTS]; 
  const shouldShowBackIcon = () => {
    return !hideBackIconRoutes.includes(route.name);
  };

  return (
    <View style={styles.container}>
      {shouldShowBackIcon() && (
        <TouchableOpacity onPress={goBack} style={{padding: 10}} testID='backButton'>
          <BackIcon size={24} color="#5d6f9b" />
        </TouchableOpacity>
      )}
      <HeaderText text={title} />
    </View>
  );
};

const HeaderText: React.FC<IHeaderTextProps> = ({ text }) => {
  return <Text style={styles.title}>{text}</Text>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
    paddingHorizontal: 15,
    width: '100%',
  },
  backButton: {
    padding: 10,
    position: 'absolute',
    left: 0,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5d6f9b',
    textAlign: 'center',
  },
});

export default Header;
