var EntryService = require('../services/entryService');
 

exports.getAll = async function(req, res, next) {
    try {
        var entries = await EntryService.getAll(req,res); 
        return res.status(200).json({ status: 200, data: entries, message: "Successfully Found Entries"});


    }catch(e) {
        return res.status(400).json({ status: 404, message: e.message});

    }
}

exports.createEntry = async function(req, res, next){
    var entry = {
        title: req.body.title, 
        body: req.body.body,
        createdOn: Date.now(), 
        updatedOn: Date.now()
    }

    await EntryService.createEntry(entry); 

    return res.status(200).json({ status: 200, data:entry , message: "Entry Created" });

    
}

