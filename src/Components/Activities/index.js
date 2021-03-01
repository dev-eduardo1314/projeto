import React from 'react'

import {
    Container,
    Header,
    Title,
    Card,
    CardHeader,
    Avatar,
    Description,
    Bold,
    CardBody,
    UserName,
    CardFooter,
    Details,
    Value,
    Divider,
    Date,
    Actions,
    Option,
    OptionLabel,

} from './styled'

import avatar from '../../images/avatar.png'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Activities() {
    return (
        <Container>
            <Header>
                <Title>Atividades</Title>
            </Header>
            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Description>
                        <Bold>Você </Bold> Pagou a <Bold> @Julia Oliveira </Bold>
                    </Description>
                </CardHeader>
                <CardBody>
                    <UserName>
                        Eduardo Santos
                    </UserName>
                </CardBody>
                <CardFooter>
                    <Details>
                        <Value>
                            R$ 2.500,00
                        </Value>
                        <Divider />
                        <Icon
                            name="lock"
                            size={18}
                            color="#fff"
                        />
                        <Date>
                            Há 1 Hora
                        </Date>
                    </Details>
                    <Actions>
                        <Option>
                            <Icon
                                name="chat-bubble"
                                size={18}
                                color="#fff"
                            />
                            <OptionLabel>0</OptionLabel>
                        </Option>

                        <Option>
                            <Icon
                                name="favorite"
                                size={18}
                                color="#fff"
                            />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                    </Actions>
                </CardFooter>
            </Card>
        </Container>
    )

}
