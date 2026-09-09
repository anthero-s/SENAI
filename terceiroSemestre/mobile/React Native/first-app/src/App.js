
import { StyleSheet, View } from 'react-native';
import { ExpressoesJSX } from './view_examples/scaffold_view';

export default function App() {
  return (
    <View style={styles.container}>
      <ExpressoesJSX/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
