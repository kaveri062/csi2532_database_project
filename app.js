const express = require('express');
const app = express();
const PORT = 3000;

// Update hotel route
app.put('/hotels/:hotelId', (req, res) => {
    const hotelId = req.params.hotelId;
    const updateQuery = 'UPDATE hotels  WHERE id = ${hotelId}';
    client.query(updateQuery, [hotelId])
        .then(result => {
            // Handle successful update
            res.send(`Hotel with ID ${hotelId} updated successfully`);
        })
        .catch(error => {
            // Handle error
            console.error('Error updating hotel:', error);
            res.status(500).send('Error updating hotel');
        });
});

// Delete hotel route
app.delete('/hotels/:hotelId', (req, res) => {
    const hotelId = req.params.hotelId;
    const deleteQuery = 'DELETE FROM hotels WHERE id = ${hotelId}';
    client.query(deleteQuery, [hotelId])
        .then(result => {
            // Handle successful deletion
            res.send(`Hotel with ID ${hotelId} deleted successfully`);
        })
        .catch(error => {
            // Handle error
            console.error('Error deleting hotel:', error);
            res.status(500).send('Error deleting hotel');
        });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
