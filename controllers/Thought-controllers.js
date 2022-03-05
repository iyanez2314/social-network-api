const { Thought } = require('../models');

const thoughtController ={ 
    // * Get all thoughts 
    getThoughts(req, res){
        Thought.find({})
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    // * GET thought by ID
    getThoughtById({ params }, res){
        Thought.findOne({ _id: params.id })
        .then(dbThoughtData => {
            if(!dbThoughtData){
                res.status(404).json({ message: 'No thought found with this id!' })
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.json(err));
    }, 

    // * Create a Thought 
    addThought({ params, body }, res){
        console.log(body);
        Thought.create(body)
        .then(({ _id }) => {
            return User.findOneAndUpdate(
                { _id: params.userId },
                { $push: { thoughts: _id } },
                { new: true }
            );
        })
        .then(dbThoughtData => {
            if(!dbThoughtData){
                res.status(404).json({ message: 'No pizza Found with this id!' })
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.json(err));
    },
    
    // * Update a thought 
    updateAThought({ params, body }, res){
        Thought.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true})
        .then(dbThoughtData => {
            if(!dbThoughtData){
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
    },

    // * Delete a thought 
    deleteThought({ params }, res){
        Thought.findOneAndDelete({ _id: params.id })
        .then(dbThoughtData => {
            if(!dbThoughtData){
                res.status(404).json({ message: 'No thought found with this id!' })
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.status(400).json(err));
    }

}

module.exports = thoughtController;