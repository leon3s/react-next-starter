import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100vw',
    height: '100vh',
    backgroundColor: '#f3f3f3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 400,
    borderRadius: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#f3f3f3',
    height: 30,
    padding: 10,
    fontSize: 14,
  },
});
