const express = require('express');
const router = express.Router();
const mongodbConnection = require('./db2');

router.post('/', async (req, res) => {
    console.log('Received data:', 'get savefile info');
    const saveData = req.body;
    console.log('Received data:', saveData);
    const {
        file_id,
        content
    } = req.body;
    try {
        const fileCollection = mongodbConnection.collection('file');
        const result = await fileCollection.updateOne(
            { file_id: file_id },
            { $set: { content: content } }
        );
        console.log('Update Result:', result);

        return res.status(200).json({ message: 'File content updated successfully' });
    } catch (error) {
        console.error('Error while updating file content:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;