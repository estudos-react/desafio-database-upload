import path from 'path';
import crypt from 'crypto';
import multer from 'multer';

const tempFolder = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  directory: tempFolder,

  storage: multer.diskStorage({
    destination: tempFolder,
    filename(request, file, callback) {
      const fileHash = crypt.randomBytes(10).toString('HEX');
      const filename = `${fileHash}-${file.originalname}`;

      return callback(null, filename);
    },
  }),
};
