import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  onAuthStateChanged, 
  signOut, 
  User 
} from "firebase/auth";
import firebaseConfig from "../../firebase-applet-config.json";

// Initialize Firebase App
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Setup Google Auth Provider with Google Sheets and Google Drive scopes
const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/spreadsheets");
provider.addScope("https://www.googleapis.com/auth/drive.file");

// We request offline parameter to prompt consent in case we need it, though standard popup handles scoped session perfectly
provider.setCustomParameters({
  prompt: "consent",
  access_type: "online"
});

let isSigningIn = false;
let cachedAccessToken: string | null = null;

// Initialize Authentication Listener
export const initAuth = (
  onAuthSuccess: (user: User, token: string) => void,
  onAuthFailure: () => void
) => {
  return onAuthStateChanged(auth, async (user) => {
    if (user) {
      if (cachedAccessToken) {
        onAuthSuccess(user, cachedAccessToken);
      } else if (!isSigningIn) {
        // Clear session if we don't have token in memory
        cachedAccessToken = null;
        onAuthFailure();
      }
    } else {
      cachedAccessToken = null;
      onAuthFailure();
    }
  });
};

// Handle standard Google Sign In via Firebase Popup
export const googleSignIn = async (): Promise<{ user: User; accessToken: string } | null> => {
  try {
    isSigningIn = true;
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    if (!credential?.accessToken) {
      throw new Error("Failed to extract access token from Google Sign In credentials.");
    }
    cachedAccessToken = credential.accessToken;
    return { user: result.user, accessToken: cachedAccessToken };
  } catch (err: any) {
    console.error("Firebase Sign-In Error:", err);
    throw err;
  } finally {
    isSigningIn = false;
  }
};

// Log Out Helper
export const logOut = async () => {
  await signOut(auth);
  cachedAccessToken = null;
};

// Get the current access token
export const getAccessToken = (): string | null => {
  return cachedAccessToken;
};
