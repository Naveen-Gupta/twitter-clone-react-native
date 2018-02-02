import React from 'react';
import styled from 'styled-components/native';
import { SimpleLineIcons, Entypo } from '@expo/vector-icons';
import { colors } from '../../utils/constants';
import Touchable from '@appandflow/touchable';

const ICON_SIZE = 20;


const Root = styled.View`
    height: 40;
    flexDirection: row;
`;

const Button = styled(Touchable).attrs({
    feedback: 'opacity'
}) `
    flex: 1;
    flexDirection: row;
    alignItems: center;
    justifyContent: space-around;
    paddingHorizontal: 32px;
`;

const ButtonText = styled.Text`
    fontWeight: 500;
    fontSize: 14;
    color: ${ props => props.theme.LIGHT_GRAY};
`;

const favoritesCount = 5;
const retweetCount = 4;
const tweetCount = 3;
const isFavorites = true;

function FeedCardBottom() {
    return (
        <Root>
            <Button>
                <SimpleLineIcons name="bubble" size={ICON_SIZE} color={colors.LIGHT_GRAY} />
                <ButtonText>
                    {tweetCount}
                </ButtonText>
            </Button>
            <Button>
                <Entypo name="retweet" size={ICON_SIZE} color={colors.LIGHT_GRAY} />
                <ButtonText>
                    {retweetCount}
                </ButtonText>
            </Button>
            <Button>
                <Entypo name="heart" size={ICON_SIZE} color={isFavorites ? colors.RED : colors.LIGHT_GRAY} />
                <ButtonText>
                    {favoritesCount}
                </ButtonText>
            </Button>
        </Root>
    );
}

export default FeedCardBottom;