import { gql } from 'react-apollo';

export default gql`
    {
    getTweets{
        _id
        text
        createdAt
        updatedAt
        user{
            avatar
            username
            lastName
            firstName
            _id
        }
    }
    }
`;
