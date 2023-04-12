# Indian-ID-OCR-Script
README for Indian ID OCR Script

Overview:

This is a Node.js script that extracts details from a government ID image such as Aadhar, Pan Card, and Driving License using Optical Character Recognition (OCR) technology. The script returns the extracted details in JSON format.

Prerequisites:

Node.js should be installed on your system.
Tesseract.js library should be installed for OCR functionality. You can install it by running npm install tesseract.js in your terminal.
Usage:

Clone the repository using the command git clone https://github.com/your-username/indian-id-ocr-script.git.
Navigate to the project directory using the command cd indian-id-ocr-script.
Place the image of the government ID in the same directory as the script.
Modify the index.js file to extract details from the specific type of government ID image you have. Refer to the sample code in the previous answer for reference.
Run the script using the command node index.js.
The script will output the extracted details in JSON format.
Example Output:

{
idType: "panCard",
"idNumber": "EJAPS0276M",
"info": {
"name": "Monika Mahadev Shinde",
"fatherName": "Mahadev Shinde",
"dob": "31/10/1992",
}
}

Note: This is a sample output for a pan card image. The output will vary depending on the type of government ID and the details extracted.

License:

This project is licensed under the MIT License - see the LICENSE file for details.
