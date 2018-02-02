import React, { Component } from 'react';
import styled from 'styled-components/native';
import FeedCard from '../components/FeedCard/FeedCard';
import { graphql } from 'react-apollo';

import GET_TWEETS_QUERY from '../graphql/queries/getTweets';

const Root = styled.View`
    flex: 1;
    justifyContent: center;
    backgroundColor: #f2f2f2;
    paddingTop: 20px;
`;

const List = styled.ScrollView``;

class HomeScreen extends Component {
    state = {}
    render() {
        return (
            <Root>
                <List>
                    <FeedCard />
                    <FeedCard />
                    <FeedCard />
                    <FeedCard />
                    <FeedCard />
                    <FeedCard />
                </List>
            </Root>
        );
    }
}

export default HomeScreen;
