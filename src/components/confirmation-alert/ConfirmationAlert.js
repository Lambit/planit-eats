import { View } from 'react-native';
import React from 'react';
import { Button, Paragraph, Dialog, Portal, Provider, Text } from 'react-native-paper';

/*-----ConfirmationAlert-----
    A modal to be implimented utilized throughout web app.
*/ 

const ConfirmationAlert = ({ onPress, onDismiss, visible, text }) => {
    return (
        <Provider>
          <View>
            <Button onPress={onPress} />
            <Portal>
              <Dialog visible={visible} onDismiss={onDismiss} style={{backgroundColor: 'seashell', backfaceVisibility: 'hidden'}}>
                <Dialog.Title style={{color: 'black'}}>Alert</Dialog.Title>
                <Dialog.Content>
                  <Paragraph style={{color: 'black'}}>{text}</Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                  <Button onPress={onPress}>
                      <Text>BACK</Text>
                    </Button>
                </Dialog.Actions>
              </Dialog>
            </Portal>
          </View>
        </Provider>
      );
    };

export default ConfirmationAlert;