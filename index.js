const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();

// For verification of ownership.
app.get('/.well-known/acme-challenge/:content', function(req, res) {
  res.send('5YnDWGVdfydZZiJFQAVVWxOlVpKNeJAPdpBJqm9D_d0.Ek4VEvIErrAU_ZV1NikHZVoxZXSoMZOU3vOLpk4mS48')
})

// Listen on the given port.
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
