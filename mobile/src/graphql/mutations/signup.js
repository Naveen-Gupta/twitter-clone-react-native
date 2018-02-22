import { gql } from 'react-apollo';

export default gql`
    mutation signup(
        $email: String!,
        $fullName: String!,
        $password: String!,
        $avatar: String,
        $username: String
    ){
            signup(
                email: $email, 
                fullName: $fullName, 
                password: $password, 
                avatar: $avatar, 
                username: $username
            ){
            token
        }
    }
`;