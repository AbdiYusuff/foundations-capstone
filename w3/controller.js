module.exports = {
    getTextParagraph: (req, res) => {
        const textParagraph = {text: "Use the tip of your thumb as a guide for measuring a tablespoon.As a general rule, the tip of your finger should measure about 1 teaspoon while the tip of your thumb should equal about a tablespoon. Hold your thumb next to whatever you are measuring to portion out a similar amount. Adjust the amount slightly if you thumb is larger or smaller than average. Image and explanation are from WikiHow. "}

        res.status(200).send(textParagraph);
    },
}