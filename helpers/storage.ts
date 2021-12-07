import AsyncStorage from '@react-native-async-storage/async-storage';

const writeData = async (key: string, data: any) => {
  const serialized = JSON.stringify(data);
  await AsyncStorage.setItem(key, serialized);
};

const readData = async (key: string) => {
  const data = await AsyncStorage.getItem(key);

  return data === null ? null : JSON.parse(data);
};

export default {writeData, readData};
