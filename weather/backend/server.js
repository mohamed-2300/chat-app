const express = require('express');
const { StreamChat } = require('stream-chat');
const app = express();
const port = 5000;

const apiKey = '7nhdjgkdmstq';
const apiSecret = '5q3ye3yxf8bjug8nxf8estq9af767ys2fpm74jnpu6xu9a73na48myzeqjhmztfm';


const client = StreamChat.getInstance(apiKey);

// Endpoint to generate token
app.get('/generate-token', (req, res) => {
  const token = client.createToken('student123'); // You can pass the user ID here
  res.json({ token });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
