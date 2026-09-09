import { View, Text, View } from "react-native";

export function EstruturaJSX() {
  return (
    <View>
      <Text>Exemplo de retorno único</Text>
      {/*Retorno único com fragmnet*/}
      <View>
        <>
          <Text></Text>
          {/*Exemplo de SelfClose*/}
          <View />
        </>
      </View>
    </View>
  );
}
