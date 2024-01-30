import AsyncStorage from "@react-native-async-storage/async-storage";

export async function storeIpData(ip: string, port: string) {
  await AsyncStorage.setItem("ip", ip);
  await AsyncStorage.setItem("port", port);
}

export async function getIpData() {
  const ip = await AsyncStorage.getItem("ip");
  const port = await AsyncStorage.getItem("port");
  return { ip, port };
}

export async function removeIpData() {
  await AsyncStorage.removeItem("ip");
  await AsyncStorage.removeItem("port");
}
