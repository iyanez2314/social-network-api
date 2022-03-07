const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            match:[/^([a-zA-z_-\d\s\S]){1,128}$/ , 'Please enter between 1-128 characters']
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => dateFormat(createdAtVal)
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const thougthSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            match:[/^([a-zA-z_-\d\s \W]){1,128}$/ , 'Please enter between 1-128 characters'] 
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: true
        },
        reaction: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);


thougthSchema.virtual('reactionCount').get(function(){
    return this.reaction.length;
});


const Thought = model('Thought', thougthSchema);

module.exports = Thought;