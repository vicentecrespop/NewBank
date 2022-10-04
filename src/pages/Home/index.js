import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movements from "../../components/Movements";
import Actions from "../../components/Actions";

const list = [
    {
        id: 1,
        label: 'Boleto conta de Luz',
        value: '300,90',
        date: '17/09/2022',
        type: 0 // gastos
    },
    {
        id: 2,
        label: 'Pix cliente X',
        value: '2500,00',
        date: '07/07/2022',
        type: 1 // receita / entrada
    },
    {
        id: 3,
        label: 'Salário',
        value: '7200,99',
        date: '22/09/2022',
        type: 1 // receita / entrada
    },
]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name='Vicente Crespo Pinto'/>
        <Balance saldo='9.250.90' gastos='-567.00'/>
        <Actions />
        <Text style={styles.title}>Ultimas Movimentações</Text>
        <FlatList 
            style={styles.list}
            data={list}
            keyExtractor={item => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <Movements data={item}/>}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14
  }
})