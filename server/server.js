const express = require('express');

const app = express();

app.listen(9999, () => {
  console.log('Starting app at port 9999');
});