const path = require('path');
const IncomingForm = require('formidable').IncomingForm;
const shortid = require('shortid');

module.exports = function upload(req, res) {
  const form = new IncomingForm();

  form.parse(req);

  form.on('fileBegin', (name, file) => {
    const fileName = path.parse(file.name).name;
    const extension = path.parse(file.name).ext;
    const uniqueName = `${fileName}_${shortid.generate()}${extension}`;
    
    file.path = (path.join(__dirname, '../uploads', uniqueName ));
  });

  form.on('file', (field, file) => {
    console.log('Uploaded ' + file.name);
  });

  form.on('end', () => {
    res.json();
  })
}