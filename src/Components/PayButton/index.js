import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    Button,
    Label
} from './styled';

export default function PayButton ({onPress}) {
    return(
        <TouchableWithoutFeedback onPress={onPress}>
            <Button
                colors={['#00fc6c', '#002aff']}
            >
                <Icon
                    name="attach-money"
                    color={'#fff'}
                    size={30}
                />
                <Label>
                    Pagar
                </Label>
            </Button>
        </TouchableWithoutFeedback>
    )
}
