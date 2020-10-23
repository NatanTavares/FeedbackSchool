import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';

interface IHeaderProps {
  title?: string;
  goBackIcon: boolean;
  menuIcon: boolean;
}

function Header(props: IHeaderProps) {
  const { title = null, goBackIcon, menuIcon } = props;
  
  return (
    <View style={styles.headerComponent}>
      <View style={styles.goBackIconPosition}>
        <AntDesign 
          name='arrowleft' 
          size={32} 
          color='white'
          style={!goBackIcon && styles.offVisibility}
        />
      </View>

      <View style={styles.titlePosition}>
        <Text style={styles.title}>
          {title}
        </Text>
      </View>

      <View style={styles.menuIconPosition}>
        <Entypo 
          name='menu' 
          size={32} 
          color='white'
          style={!menuIcon && styles.offVisibility}
        />
      </View>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  headerComponent: {
    
    flexDirection: 'row',
    backgroundColor: '#86A5FF',
    height: 150,
  },

  offVisibility: {
    display: 'none',
  },

  goBackIconPosition: {
    position: 'absolute',
    top: 48,
    left: 26,
  },
  
  titlePosition: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  menuIconPosition: {
    position: 'absolute',
    top: 48,
    right: 26,
  },

  title: {
    // nunito
    fontSize: 36,
    fontWeight: '700',
    color: '#FFF',
  },



});
