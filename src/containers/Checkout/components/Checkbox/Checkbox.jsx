import React from 'react';
import styled from 'styled-components';
import Checkbox from '@material-ui/core/Checkbox';

const CheckContainer = styled.div`
  margin-top:10px;
  margin-bottom: 10px;
`;


const Label = styled.span`

padding: 0em;

`;

export default function CheckInput(props) {
    const [state, setState] = React.useState({
        checked: false,
      });
    
      const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
      };
    
    return (
        <CheckContainer>
     <Checkbox
        checked={state.checked}
        onChange={handleChange('checked')}
        onClick={props.hide}
        value="checked"
        style={{color:"green"}}
    />
    <Label>Do you have a gift card?</Label>
        </CheckContainer>
    )
}
