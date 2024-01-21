import AsyncStorage from "@react-native-async-storage/async-storage";

export async function saveAccessToken(accessToken: string) {
  await AsyncStorage.setItem("access_token", accessToken);
}

export async function saveRefreshToken(refreshToken: string) {
  await AsyncStorage.setItem("refresh_token", refreshToken);
}

export async function removeTokens() {
  await AsyncStorage.removeItem("access_token");
  await AsyncStorage.removeItem("refresh_token");
}
export async function saveTokens(accessToken: string, refreshToken: string) {
  await saveAccessToken(accessToken);
  await saveRefreshToken(refreshToken);
}

export async function getAccessToken() {
  const accessToken = await AsyncStorage.getItem("access_token");
  return accessToken;
}

// Function to get the refresh token from your storage
export async function getRefreshToken() {
  // Implement your logic to retrieve the refresh token
  // Example using AsyncStorage:
  const refreshToken = await AsyncStorage.getItem("refresh_token");
  return refreshToken;
}
