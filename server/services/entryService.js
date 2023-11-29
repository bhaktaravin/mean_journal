var Entry = require('../model/entry');

exports.getAll = async function(req, res) {
    try{
        const entries = await Entry.find(); 
        return entries;
    } catch(err) {
        res.send('Error generating - ', err);
    }
}

exports.createEntry = async function(data){
    var newEntry = new Entry({
        title: data.title, 
        body: data.body,
        createdOn: Date.now(),
        updatedOn: Date.now()
    })

    try {
        var savedEntry = await newEntry.save(); 
        return savedEntry;
    } catch(e) {
        throw Error("Error while creating")
    }
}