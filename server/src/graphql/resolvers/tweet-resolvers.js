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
            await requireAuth(context.user);
            return Tweet.find({}).sort({ createdAt: -1 })
        } catch (err) {
            throw err;
        }
    },
    createTweet: async (_, args, context) => {
        try {
            await requireAuth(context.user);
            return Tweet.create(args)
        } catch (err) {
            throw err;
        }
    },
    updateTweet: async (_, { _id, ...rest }, context) => {
        try {
            await requireAuth(context.user);
            return Tweet.findByIdAndUpdate(_id, rest, { new: true })
        } catch (err) {
            throw err;
        }
    },
    deleteTweet: async (_, { _id }, context) => {
        try {
            await requireAuth(context.user);
            await Tweet.findByIdAndRemove(_id);
            return {
                message: 'Deleted succesfully'
            }
        } catch (err) {
            throw err;
        }
    }
}