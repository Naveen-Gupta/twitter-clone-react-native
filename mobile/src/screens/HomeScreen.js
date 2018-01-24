import React from 'react';
import styled from 'styled-components';

const Root = styled.View`

`;

const T = styled.Text``;

class HomeScreen extends Component {
    state = {}
    render() {
        return (
            <Root>
                <T>Hello World!</T>
            </Root>
        );
    }
}

export default HomeScreen;
