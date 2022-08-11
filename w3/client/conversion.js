
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
  }

function TpsConverter(tsp) {
    document.getElementById("outputTbsp").innerHTML=tsp*.33;
  }

function TbspConverter(tbsp) {
    document.getElementById("outputTsp").innerHTML=tbsp*3;
  }


const paramsInput = document.getElementById('picBtn');
const paramstextParagraph = document.getElementById('textParagraphBtn')
const textHolder = document.getElementById('textHolder')


const displayPic = () => {
  document.getElementById('imageHolder').innerHTML=''
  axios.get('http://localhost:5050/api/image')
  .then(res =>{ 
    let image = document.createElement("img")
    image.setAttribute("src",res.data[0])
    document.getElementById('imageHolder').appendChild(image)
  })
}

const addToView = (text) => {
  textHolder.textContent = text
}

const getTextParagraph = () => {
  axios.get("http://localhost:5050/api/textParagraph/")
      .then(res => addToView(res.data.text))
};

paramsInput.addEventListener('click', displayPic)
paramstextParagraph.addEventListener('click', getTextParagraph)