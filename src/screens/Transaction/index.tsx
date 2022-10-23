import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, SafeAreaView, ScrollView } from "react-native";

import styles from "./styles";

import TransactionHistory from "../../components/TransactionHistory";
import HeaderBar from "../../components/HeaderBar";
import Trade from "../../components/Trade";

import { SIZES } from "../../constants";

const Transaction = ({ route }) => {
  const [selectedCurrency, setSelectedCurrency] = useState();
  const { navigate } = useNavigation();

  useEffect(() => {
    const { currency } = route.params;
    setSelectedCurrency(currency);
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderBar right={false} onPress={() => navigate("CryptoDetail")} />
      <ScrollView>
        <View style={{ flex: 1, paddingBottom: SIZES.padding }}>
          <Trade
            icon={selectedCurrency?.image}
            currency={selectedCurrency?.currency}
            code={selectedCurrency?.code}
            crypto={selectedCurrency?.wallet.crypto}
            value={selectedCurrency?.wallet.value}
            onPress={() => console.log("Trade")}
          />
          <TransactionHistory
            customContainerStyle={{ ...styles.shadow }}
            history={selectedCurrency?.transactionHistory}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Transaction;
