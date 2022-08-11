const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json());

const {getTextParagraph} = require('./controller')

app.get("/api/image",(req, res) => {
    const images = ['https://www.wikihow.com/images/thumb/d/df/Measure-a-Tablespoon-Step-6.jpg/aid9636661-v4-728px-Measure-a-Tablespoon-Step-6.jpg.webp']
        res.status(200).send(images)
    })

app.get("/api/textParagraph", getTextParagraph);
app.post("/api/textParagraph", getTextParagraph);

app.listen(5050, () => {
    console.log('listening on port 5050')
})
