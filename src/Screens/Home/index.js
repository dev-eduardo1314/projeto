import React from 'react';
import Icon  from 'react-native-vector-icons/MaterialIcons';

import Suggestions from '../../Components/Suggestions';
import Activities from '../../Components/Activities';

import {
    Wrapper,
    Container,
    Header,
    BalanceContainer,
    BalanceTitle,
    Balance
} from './styled';


export default function Home() {
    return(
        <Wrapper>
            <Container>
                <Header>
                    <Icon
                        name='qr-code-scanner'
                        size={30}
                        color={"#10c86e"}
                    />
                    <BalanceContainer>
                        <BalanceTitle>Meu Saldo</BalanceTitle>
                        <Balance>R$: 25.000,00</Balance>
                    </BalanceContainer>
                    <Icon
                        name='card-giftcard'
                        size={30}
                        color={"#10c86e"}
                    />
                </Header>
                <Suggestions />
                <Activities />
            </Container>
        </Wrapper>
    )
}

