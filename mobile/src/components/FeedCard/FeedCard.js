import React, { Component } from 'react';
import styled from 'styled-components/native';

import FeedCardHeader from './FeedCardHeader';
import FeedCardBottom from './FeedCardBottom';

const Root = styled.View`
    minHeight: 180;
    backgroundColor: ${ props => props.theme.WHITE};
    width: 100%;
    shadowColor: ${props => props.theme.SECONDARY};
    shadowOffset: 0px 2px;
    shadowRadius: 2;
    shadowOpacity: 0.1;
    marginVertical: 5px;
`;

const CardContentContainer = styled.View`
    flex: 1;
    padding: 10px 20px 10px 5px;
`;

const CardContentText = styled.Text`
    fontSize: 14;
    textAlign: left;
    fontWeight: 500;
    color: ${props => props.theme.SECONDARY};
`;

const text = 'Lhjfsdjjfjsdafjjdasfjdsjfhjahkj';

function FeedCard({ text, user }) {
    return (
        <Root>
            <FeedCardHeader { ...user } />
            <CardContentContainer>
                <CardContentText>
                    {text}
                </CardContentText>
            </CardContentContainer>
            <FeedCardBottom />
        </Root>
    );
}

export default FeedCard;