import React from 'react';
import { View, Text } from 'react-native';

// STYLES
import FooterStyles from './../styles/FooterStyles';

const Footer = () => {
  return (
    <View style={FooterStyles.container}>
      <Text style={FooterStyles.text}>v3.3.0</Text>
    </View>
  );
};

export default Footer;
