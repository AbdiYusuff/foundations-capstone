const express = require('express');
const app = express();
const cors = require('cors')


app.use(cors())
app.use(express.json());

const axios = require('axios');

async function createImage() {
  const payload = { html: "<div>Test</div>",
  css: "div { background-color: blue; }" };

  let headers = { auth: {
    username: 'user-id',
    password: 'api-key'
  },
  headers: {
    'Content-Type': 'application/json'
  }
  }
  try {
    const response = await axios.post('https://hcti.io/v1/image', JSON.stringify(payload), headers);
    console.log(response.data.url);
  } catch (error) {
    console.error(error);
  }
}

createImage();



pp.listen(5050, () => {
    console.log('listening on port 5050')
})
