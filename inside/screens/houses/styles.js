import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent : 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth : 0.5 ,
    borderColor : '#b3b3b3',
  },
  image: {
    height: 70,
    width: 80,
    resizeMode: 'contain',
  },
  middleContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  type: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  time: {
    color: '#5d5d5d',
  },
  rightContainer: {
    width: 100,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  prix: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 5,
  },
  iconContainer : {
    backgroundColor :'#DF062D',
    padding : 10 ,
    borderRadius : 25 ,
   },
});

export default styles;
