import React, { Component } from 'react';
import styled from 'styled-components/native';

import { fakeAvatarImage } from '../../utils/constants';

const AVATAR_SIZE = 40;
const AVATAR_RADIUS = AVATAR_SIZE / 2;
// con 
const createdAt = '1 day ago';
//const avatar = fakeAvatarImage;

const Root = styled.View`
    height: 50;
    flexDirection: row;
    alignItems: center;
`;

const AvatarImage = styled.Image`
    height: ${AVATAR_SIZE};
    width: ${AVATAR_SIZE};
    borderRadius:  ${AVATAR_RADIUS};
`;

const AvatarContainer = styled.View`
    flex: 0.2;
    alignSelf: stretch;
    paddingLeft: 5;
    justifyContent: center;
`;

const MetaContainer = styled.View`
    flex:1;
    alignSelf: stretch;
`;

const MetaTopContainer = styled.View`
    flex: 1;
    alignSelf: stretch;
    flexDirection: row;
    alignItems: center;
    justifyContent: flex-start;
`;

const MetaBottomContainer = styled.View`
    flex: 0.8;
    alignSelf: stretch;
    justifyContent: center;
    alignItems: flex-start;    
`;

const MetaFullname = styled.Text`
    fontSize: 16;
    fontWeight: bold;
    color: ${props => props.theme.SECONDARY};
`;

const MetaText = styled.Text`
    fontSize: 14;
    fontWeight: 600;
    color: ${props => props.theme.LIGHT_GRAY};
`;

function FeedCardHeader(firstName, lastName, username, avatar) {
    return (
        <Root>
            <AvatarContainer>
                <AvatarImage source={{ uri: avatar || fakeAvatarImage }} />
            </AvatarContainer>
            <MetaContainer>
                <MetaTopContainer>
                    <MetaFullname>{firstName} {lastName} </MetaFullname>
                    <MetaText style={{ marginLeft: 5 }}> @{username}</ MetaText>
                </MetaTopContainer>
                <MetaBottomContainer>
                    <MetaText> {createdAt} </ MetaText>
                </MetaBottomContainer>
            </MetaContainer>
        </Root>
    );
}

export default FeedCardHeader;