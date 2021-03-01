import Styled from 'styled-components/native';

export const Container = Styled.ScrollView.attrs(() => ({
    horizontal: true,
    contentContainerStyle: {
        alignItems: 'center',
        paddingLeft: 16,
    },
}))`
    background: #1e222b;
    height: 130px;
`;

export const Option = Styled.TouchableOpacity`
    width: 80px;
    margin-right: 16px;
    align-items: center; 
`;

export const Img = Styled.Image``;
export const Label = Styled.Text`
    text-align: center;
    color: #fff;
    font-weight: bold;
    margin-top: 8px;
    font-size: 14px;
    
    
`;

