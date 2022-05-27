import React from 'react';
import { Alert, StyleSheet, Text } from 'react-native';

//Packages 
import { CardField, CardFieldInput, CardForm, CardFormProps, CardActionError, CardFormView, useStripe } from '@stripe/stripe-react-native';
import FormButton from '../components/form-button/FormButton';
import StripeButton from '../components/stripe-button/StripeButton';

//Components
import StripeCardFeild from '../components/stripe-card-field/StripeCardFeild';


/*----PaymentScreen---CreateTokenScreen(------
  PaymentSreen - Payment-4KSl6nIza4MRWpc3LfWr1
*/ 

export default function PayemtScreen() {
  const { createToken } = useStripe();

  const _createToken = async (  ) => {
    const { error, token } = await createToken(
      type === 'Card'
        ? { type: 'Card', name: 'David Wallace', currency: 'eur' }
        : {
            type: 'BankAccount',
            accountNumber: '000123456789',
            routingNumber: '110000000', // Routing number is REQUIRED for US bank accounts
            country: 'US',
            currency: 'usd',
          }
    );

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
      console.log(`Error: ${JSON.stringify(error)}`);
    } else if (token) {
      Alert.alert(
        'Success',
        `The token was created successfully! token: ${token.id}`
      );
    }
  };

  return (
    <>
    <StripeCardFeild>
      <StripeButton
        variant="primary"
        onPress={() => _createToken('BankAccount')}
        title="Create a token from a bank account"
        accessibilityLabel="Create a token from a bank account"
      />
      <Text style={styles.or}>OR</Text>
      <CardField
        cardStyle={styles.inputStyles}
        style={styles.cardField}
        postalCodeEnabled={false}
      />
      <StripeButton
        variant="primary"
        onPress={() => _createToken('Card')}
        title="Create a token from a card"
        accessibilityLabel="Create a token from a card"
      />
    </StripeCardFeild>
    <CardForm style={styles.cardField} />
    </>
  );
}

const styles = StyleSheet.create({
  cardField: {
    width: '100%',
    height: 200,
    marginVertical: 30,
  },
  or: {
    textAlign: 'center',
    marginTop: 30,
  },
  inputStyles: {
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    borderColor: '#000000',
    borderRadius: 8,
    fontSize: 14,
    placeholderColor: '#999999',
  }
});

// const inputStyles: CardFieldInput.Styles = {
//   borderWidth: 1,
//   backgroundColor: '#FFFFFF',
//   borderColor: '#000000',
//   borderRadius: 8,
//   fontSize: 14,
//   placeholderColor: '#999999',
// };

// import type { BillingDetails } from '@stripe/stripe-react-native';
// import React, { useState } from 'react';
// import { Alert, StyleSheet, TextInput, View, Text, Switch } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import { useConfirmPayment } from '@stripe/stripe-react-native';
// import Button from '../components/Button';
// import PaymentScreen from '../components/PaymentScreen';
// import { API_URL } from '../Config';
// import { colors } from '../colors';

// export default function IdealPaymentScreen() {
//   const [email, setEmail] = useState('');
//   const { confirmPayment, loading } = useConfirmPayment();
//   const [bankName, setBankName] = useState<string | undefined>();
//   const [saveIban, setSaveIban] = useState(false);

//   const fetchPaymentIntentClientSecret = async () => {
//     const response = await fetch(`${API_URL}/create-payment-intent`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         email,
//         currency: 'eur',
//         items: [{ id: 'id' }],
//         request_three_d_secure: 'any',
//         payment_method_types: ['ideal'],
//       }),
//     });
//     const { clientSecret, error } = await response.json();

//     return { clientSecret, error };
//   };

//   const handlePayPress = async () => {
//     const { clientSecret, error: clientSecretError } =
//       await fetchPaymentIntentClientSecret();

//     if (clientSecretError) {
//       Alert.alert(`Error`, clientSecretError);
//       return;
//     }

//     const billingDetails: BillingDetails = {
//       name: 'John Doe',
//       email: 'john@example.com',
//     };

//     const { error, paymentIntent } = await confirmPayment(
//       clientSecret,
//       {
//         paymentMethodType: 'Ideal',
//         paymentMethodData: {
//           billingDetails,
//           bankName,
//         },
//       },
//       { setupFutureUsage: saveIban ? 'OffSession' : undefined }
//     );

//     if (error) {
//       Alert.alert(`Error code: ${error.code}`, error.message);
//       console.log('Payment confirmation error', error.message);
//     } else if (paymentIntent) {
//       Alert.alert(
//         'Success',
//         `The payment was confirmed successfully! currency: ${paymentIntent.currency}`
//       );
//       console.log('Success from promise', paymentIntent);
//     }
//   };

//   return (
//     <PaymentScreen>
//       <TextInput
//         autoCapitalize="none"
//         placeholder="E-mail"
//         keyboardType="email-address"
//         onChange={(value) => setEmail(value.nativeEvent.text)}
//         style={styles.input}
//       />
//       <Picker
//         selectedValue={bankName}
//         onValueChange={(itemValue) => setBankName(itemValue)}
//       >
//         <Picker.Item label="Optional - choose your bank" />
//         <Picker.Item label="ABN Amro" value="abn_amro" />
//         <Picker.Item label="ASN Bank" value="asn_bank" />
//         <Picker.Item label="bunq B.V." value="bunq" />
//         <Picker.Item label="Handelsbanken" value="handelsbanken" />
//         <Picker.Item label="ING Bank" value="ing" />
//         <Picker.Item label="Knab" value="knab" />
//         <Picker.Item label="Moneyou" value="moneyou" />
//         <Picker.Item label="Rabobank" value="rabobank" />
//         <Picker.Item label="Regiobank" value="regiobank" />
//         <Picker.Item label="Revolut" value="revolut" />
//         <Picker.Item label="SNS Bank" value="sns_bank" />
//         <Picker.Item label="Triodos Bank" value="triodos_bank" />
//         <Picker.Item label="Van Lanschot" value="van_lanschot" />
//       </Picker>
//       <Button
//         variant="primary"
//         onPress={handlePayPress}
//         title="Pay"
//         accessibilityLabel="Pay"
//         loading={loading}
//       />
//       <View style={styles.row}>
//         <Switch
//           onValueChange={(value) => setSaveIban(value)}
//           value={saveIban}
//         />
//         <Text style={styles.text}>Save IBAN during payment</Text>
//       </View>
//     </PaymentScreen>
//   );
// }

// const styles = StyleSheet.create({
//   cardField: {
//     width: '100%',
//     height: 50,
//     marginVertical: 30,
//   },
//   row: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 20,
//   },
//   text: {
//     marginLeft: 12,
//   },
//   input: {
//     height: 44,
//     borderBottomColor: colors.slate,
//     borderBottomWidth: 1.5,
//     marginBottom: 20,
//   },
// });