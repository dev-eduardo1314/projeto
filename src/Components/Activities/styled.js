import Styled from 'styled-components/native';

export const Container = Styled.View`
    margin-top: 25px;
    padding: 0 16px;
`;

export const Header = Styled.View`
    
`;
export const Title = Styled.Text`
    color: #fff; 
    font-size: 18px;
    font-weight: bold;
    
`;

export const Card = Styled.View`
    background: #1e222b;
    border-radius: 8px;
    margin-top: 20px;
    padding: 20px;   
`;

export const CardHeader = Styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Avatar = Styled.Image``;

export const Description = Styled.Text`
    color: #fff; 
    font-size: 16px;
    margin-left: 15px;    
`;

export const Bold = Styled.Text`
    color: #fff; 
    font-size: 18px;
    font-weight: bold;
`;

export const UserName = Styled.Text`
    color: #fff; 
    font-size: 20px; 
`;

export const CardBody = Styled.View`
    margin-top: 20px;
`;

export const CardFooter = Styled.View`
    margin-top: 15px;
    flex-direction: row;
    justify-content: space-between;
`;

export const Details = Styled.View`
    flex-direction: row;
    align-items: center;
    
`;

export const Divider = Styled.View`
    width: 2px;
    height: 15px;
    background: rgba(255, 255, 255, 0.4); 
    margin: 0 10px;
    
`;


export const Value = Styled.Text`
   color: #f75175;
   font-size: 14px;
   font-weight: bold;   
`;

export const Date = Styled.Text`
   color: #fff;
   font-size: 14px;
   margin-left: 5px;  
`;

export const Actions = Styled.View`
    flex-direction: row;
`;

export const Option = Styled.TouchableOpacity`
   margin-left: 5px;  
    flex-direction: row;
   
`;

export const OptionLabel = Styled.Text`
   color: #fff;
   font-size: 14px;
   margin-left: 7px;  
`;

