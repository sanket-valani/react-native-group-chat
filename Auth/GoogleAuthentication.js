import * as Google from "expo-google-app-auth";
import { CLIENT_ID } from "../credentials";

export const signInWithGoogle = async () => {
  try {
    const result = await Google.logInAsync({
      androidClientId: CLIENT_ID,
      scopes: ["profile", "email"]
    });
    if (result.type === "success") {
      result.success = true;
      result.error = false;
      return result;
    } else {
      return { error: false, success: false, message: "Login process was cancelled" };
    }
  } catch (e) {
    return  { error: true, success:false, message: e };
  }
};