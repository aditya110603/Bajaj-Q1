const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// ...rest of your code


app.post('/bfhl', (req, res) => {
  const { data } = req.body;
  const userId = "17091999"; // Replace with dynamic value
  const email = "john@xyz.com";
  const rollNumber = "ABCD123";
  let numbers = [], alphabets = [];

  data.forEach(item => {
    if (!isNaN(item)) numbers.push(item);
    else if (item.match(/^[A-Za-z]$/)) alphabets.push(item);
  });

  const highestAlphabet = alphabets.length ? [alphabets.sort().pop()] : [];

  res.json({
    is_success: true,
    user_id: userId,
    email,
    roll_number: rollNumber,
    numbers,
    alphabets,
    highest_alphabet: highestAlphabet
  });
});

app.get('/bfhl', (req, res) => {
  res.json({ operation_code: 1 });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
