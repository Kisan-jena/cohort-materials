// ! We will use params here

const express = require('express');
const app = express();
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// Sum route using params
app.get('/sum/:a/:b', function (req, res) {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  res.json({
    ans: a + b,
  });
});

// Multiply route using params
app.get('/multiply/:a/:b', function (req, res) {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  res.json({
    ans: a * b,
  });
});

// Divide route using params
app.get('/divide/:a/:b', function (req, res) {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  if (b === 0) {
    return res.status(400).json({ error: 'Division by zero is not allowed' });
  }

  res.json({
    ans: a / b,
  });
});

// Subtract route using params
app.get('/sub/:a/:b', function (req, res) {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  res.json({
    ans: a - b,
  });
});
