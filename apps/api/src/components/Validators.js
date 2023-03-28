// eslint-disable-next-line import/no-extraneous-dependencies
import mimeTypes from 'mime-types';

const allowedExts = ['gif', 'jpeg', 'jpg', 'png', 'svg', 'blob'];
const allowedMimeTypes = ['image/gif', 'image/jpeg', 'image/pjpeg', 'image/x-png', 'image/png', 'image/svg+xml'];

const PictureValidator = (value) => {
  // Check if the URL has a file extension
  const hasExtension = /\.[0-9a-z]+$/i.test(value);
  if (!hasExtension) {
    return true; // Allow URLs without file extensions
  }

  const fileExt = value.split('.').pop().toLowerCase();
  const mimeType = mimeTypes.lookup(value);

  return allowedExts.includes(fileExt) && allowedMimeTypes.includes(mimeType);
};

export default PictureValidator;
