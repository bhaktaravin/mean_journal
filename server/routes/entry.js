var express = require('express'); 
var router = express.Router(); 

var EntryController = require('../controller/entryController');
 
router.get('/', EntryController.getAll); 
router.post('/create', EntryController.createEntry);

module.exports = router;