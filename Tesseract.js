const fs = require('fs');
const Tesseract = require('tesseract.js');

// Read image file
const image = fs.readFileSync('pan-card.jpg');

// Extract text from image using Tesseract.js
Tesseract.recognize(image, 'eng')
  .then(({ data }) => {
    const text = data.text;
    
    // Extract details from text using regular expressions
    const idNumberMatch = text.match(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/);
    const nameMatch = text.match(/NAME\n([^\n]+)/);
    const fatherNameMatch = text.match(/FATHER NAME\n([^\n]+)/);
    const dobMatch = text.match(/DOB\n([^\n]+)/);
    
    // Create JSON object with extracted details
    const details = {
      idType: 'panCard',
      idNumber: idNumberMatch ? idNumberMatch[0] : '',
      info: {
        name: nameMatch ? nameMatch[1] : '',
        fatherName: fatherNameMatch ? fatherNameMatch[1] : '',
        dob: dobMatch ? dobMatch[1] : '',
      }
    };
    
    // Log the extracted details
    console.log(details);
  })
  .catch((err) => {
    console.error(err);
  });
