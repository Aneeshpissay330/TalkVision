import * as mime from 'react-native-mime-types';

export const getFilename = (file) => {
    return file.split('/').pop().split('#')[0].split('?')[0].replace(/\.[^/.]+$/, "");
}

export const getExtension = (file) => {
    return mime.extension(getMimeType(file));
}

export const getMimeType = (file) => {
    return mime.lookup(file);
}