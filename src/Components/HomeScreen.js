/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import {Block, TextView, Button} from './MyComponents';
import LineargGradient from 'react-native-linear-gradient';
const W = Dimensions.get('window').width;
export default function HomeScreen() {
  return (
    <Block block>
      <LineargGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        locations={[0, 0.3, 0.6]}
        style={styles.lineargGradient}
        colors={['#6C7FDF', '#C56AE0']}>
        <Image source={require('./images/map.png')} />
      </LineargGradient>
      <Block block style={styles.stayhome}>
        <TextView
          h4
          style={{
            textShadowColor: 'rgba(0, 0, 0, 0.2)',
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: 10,
          }}
          color="rgba(255,255,255,0.8)">
          Stay Home
        </TextView>
        <TextView
          style={{
            left: 20,
            textShadowColor: 'rgba(0, 0, 0, 0.2)',
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: 10,
          }}
          h4
          color="rgba(255,255,255,0.8)">
          Stay Safe
        </TextView>
      </Block>
      <Image style={styles.img} source={require('./images/doctors.png')} />
      <Block>
        <Block
          height={400}
          color="rgba(250,250,250,0.99)"
          style={styles.boxCase}>
          <Block padding={20}>
            <Block justifyContent="space-between" direction="row">
              <Block>
                <TextView h6>Viet Nam Case Update</TextView>
                <TextView>Update Jully 1</TextView>
              </Block>
              <Button textColor="blue">See details</Button>
            </Block>

            <Block direction="row" style={{marginTop: 15}}>
              <Block block>
                <Block middle>
                  <Block
                    width={35}
                    height={35}
                    middle
                    centered
                    borderRadius={35}
                    color="#ED922020">
                    <Block
                      height={20}
                      width={20}
                      borderWidth={4}
                      borderRadius={20}
                      borderColor="#ED9220"
                    />
                  </Block>
                  <TextView
                    style={{
                      textShadowColor: 'rgba(0, 0, 0, 0.1)',
                      textShadowOffset: {width: -1, height: 2},
                      textShadowRadius: 5,
                    }}
                    padding={10}
                    color="#ED9220"
                    h2>
                    333
                  </TextView>
                  <TextView color="#40404040" h7 bold>
                    Confirmed
                  </TextView>
                </Block>
              </Block>

              <Block block>
                <Block middle>
                  <Block
                    width={35}
                    height={35}
                    middle
                    centered
                    borderRadius={35}
                    color="#ff000020">
                    <Block
                      height={20}
                      width={20}
                      borderWidth={4}
                      borderRadius={20}
                      borderColor="#ff0000"
                    />
                  </Block>
                  <TextView
                    style={{
                      textShadowColor: 'rgba(0, 0, 0, 0.1)',
                      textShadowOffset: {width: -1, height: 2},
                      textShadowRadius: 5,
                    }}
                    padding={10}
                    color="#ff0000"
                    h2>
                    0
                  </TextView>
                  <TextView color="#40404040" h7 bold>
                    Death
                  </TextView>
                </Block>
              </Block>

              <Block block>
                <Block middle>
                  <Block
                    width={35}
                    height={35}
                    middle
                    centered
                    borderRadius={35}
                    color="#52A65820">
                    <Block
                      height={20}
                      width={20}
                      borderWidth={4}
                      borderRadius={20}
                      borderColor="#52A658"
                    />
                  </Block>
                  <TextView
                    style={{
                      textShadowColor: 'rgba(0, 0, 0, 0.1)',
                      textShadowOffset: {width: -1, height: 2},
                      textShadowRadius: 5,
                    }}
                    padding={10}
                    color="#52A658"
                    h2>
                    321
                  </TextView>
                  <TextView color="#40404040" h7 bold>
                    Recovered
                  </TextView>
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  lineargGradient: {
    position: 'absolute',
    height: 900,
  },
  img: {
    top: -80,
    left: 50,
    width: '30%',
    height: '30%',
  },
  stayhome: {
    flex: 1,
    top: 110,
    left: 155,
  },
  boxCase: {
    left: 10,
    width: W - 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    top: -80,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 50,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,

    elevation: 10,
  },
});
