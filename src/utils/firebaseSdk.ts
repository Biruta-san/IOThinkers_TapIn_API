import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadString } from "firebase/storage";


const {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
} = process.env;

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
};

const uploadFile = (fileBase64: string, fileName: string) => {
  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);
  const storageRef = ref(storage, `empresaIni/${fileName}`);
  
  uploadString(storageRef, fileBase64, 'base64').then((snapshot) => {
    console.log('Uploaded a base64 string!');
    // Handle success or error
  }).catch((error) => {
    console.error('Error uploading file:', error);
  });

};

uploadFile('', 'cyberpunk.png');