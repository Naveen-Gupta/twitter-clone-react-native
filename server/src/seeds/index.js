import faker from 'faker';

import Tweet from '../models/Tweet';
import User from '../models/User';


const TOTAL_USERS = 3;
const TOTAL_TWEETS = 3;

export default async () => {
    try {
        await Tweet.remove();
        await User.remove();

        await Array.from({ length: TOTAL_USERS }).forEach(
            async (_, i) => {
                const user = await User.create({
                    username: faker.internet.userName(),
                    firstName: faker.name.firstName(),
                    lastName: faker.name.lastName(),
                    email: faker.internet.email(),
                    avatar: `https://randomuser.me/portraits/men/${i}.jpg`,
                    password: 'htp@1234'
                });

                await Array.from({ length: TOTAL_TWEETS }).forEach(
                    async () => await Tweet.create({ text: faker.lorem.sentence(), user: user._id })
                );
            });
    }
    catch (error) {
        throw error;
    }
}