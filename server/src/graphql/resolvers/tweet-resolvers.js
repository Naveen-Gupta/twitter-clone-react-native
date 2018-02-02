import Tweet from '../../models/Tweet';
import { requireAuth } from '../../services/auth';

export default {
    getTweet: async (_, { _id }, context) => {
        try {
            await requireAuth(context.user);
            return Tweet.findById(_id)
        } catch (err) {
            throw err;
        }
    },
    getTweets: async (_, args, context) => {
        try {
            // await requireAuth(context.user);
            return Tweet.find({}).sort({ createdAt: -1 })
        } catch (err) {
            throw err;
        }
    },
    getUserTweets: async (_, args, context) => {
        try {
            await requireAuth(context.user);
            return Tweet.find({ user: context.user._id }).sort({ createdAt: -1 })
        } catch (err) {
            throw err;
        }
    },
    createTweet: async (_, args, context) => {
        try {
            await requireAuth(context.user);
            return Tweet.create({ ...args, user: context.user._id })
        } catch (err) {
            throw err;
        }
    },
    updateTweet: async (_, { _id, ...rest }, context) => {
        try {
            await requireAuth(context.user);
            const tweet = await Tweet.findOne({ _id, user: context.user._id });
            if (!tweet) {
                throw new Error('Not found!')
            }

            Object.entries(rest).forEach(([key, value]) => {
                tweet[key] = value;
            });

            return tweet.save();
        } catch (err) {
            throw err;
        }
    },
    deleteTweet: async (_, { _id }, context) => {
        try {
            await requireAuth(context.user);
            const tweet = await Tweet.findOne({ _id, user: context.user._id });
            if (!tweet) {
                throw new Error('Not found!')
            }

            await tweet.remove();
            return {
                message: 'Deleted successfully'
            }
        } catch (err) {
            throw err;
        }
    }
}