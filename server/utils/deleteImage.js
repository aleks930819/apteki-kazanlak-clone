import fs from 'fs';
import path from 'path';

const deleteImage = (filename) => {
  const filePath = path.join('images/', filename);

  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
};

export default deleteImage;
