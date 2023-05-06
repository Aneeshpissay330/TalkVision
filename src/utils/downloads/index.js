import RNFS from 'react-native-fs';

const fileExists = async (filePath) => {
  try {
    const stats = await RNFS.stat(filePath);
    return stats.isFile();
  } catch (error) {
    console.log(error);
    return false;
  }
};

const downloadVideo = async (url, fileName, onProgress) => {
  const cacheDir = RNFS.CachesDirectoryPath;
  const downloadDest = `${cacheDir}/${fileName}`;
  const exists = await fileExists(downloadDest);
  console.log(exists);
  if (exists) {
    return downloadDest;
  }
  else {
    const options = {
        fromUrl: url,
        toFile: downloadDest,
        progress: onProgress,
      };
    
      await RNFS.downloadFile(options).promise;
      return downloadDest;
  }
};

export const formatDuration = (durationInSeconds) => {
  const minutes = Math.floor(durationInSeconds / 60);
  const seconds = Math.floor(durationInSeconds % 60);
  const formattedDuration = `${minutes}:${String(seconds).padStart(2, '0')}`;
  return formattedDuration;
};

export default downloadVideo;
