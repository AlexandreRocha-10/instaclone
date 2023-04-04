import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';

export default function Lista({ data }) {
    const [liked, setliked] = useState(require('../img/like.png'));

    const onPressLike = () => {
      return liked ? setliked(require('../img/likeada.png')) : setliked(require('../img/like.png'));

    };

    return(
      <View style={styles.areaFeed}>
        
        <View style={styles.viewPerfil}>
          <Image
          source={{ uri: data.item.imgperfil }}
          style={styles.fotoPerfil} 
          />

          <Text style={styles.nomeUsuario}>
          {data.item.nome} 
          </Text>
        </View>
        
        <Image
        resizeMode="cover"
        style={styles.fotoPublicacao}
        source={{ uri: data.item.imgPublicacao }} 
        />
            
        <View style={styles.areaBtn}>

            <TouchableOpacity
            onPress={onPressLike}
            >
              <Image
              source={liked}
              style={styles.iconelike} 
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnSend}>
              <Image
              source={require('../img/send.png')}
              style={styles.iconelike} 
              />
            </TouchableOpacity>

        </View>
        
        <View style={styles.viewRodape}>

            <Text style={styles.nomeRodape}>
              {data.item.nome}
            </Text>

            <Text style={styles.descRodape}>
              {data.item.descricao}
            </Text>
        </View>

      </View>
    );
};

const styles = StyleSheet.create({
  nomeUsuario:{
    fontSize: 22,
    textAlign: 'left',
    color: '#000000',
  },
  fotoPerfil:{
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  fotoPublicacao:{
    flex:1,
    height: 400,
    alignItems: 'center'
  },
  viewPerfil:{
    flexDirection: 'row',
    flex:1,
    alignItems: 'center',
    padding: 8,
  },
  areaBtn:{
    flexDirection: 'row',
    padding: 5
  },
  iconelike:{
    width: 33,
    height: 33,
  },
  btnSend:{
    paddingLeft: 5,
  },
  viewRodape:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  descRodape:{
    paddingLeft: 5,
    fontSize: 15,
    color: '#000'
  },
  nomeRodape:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: 5
  }
});