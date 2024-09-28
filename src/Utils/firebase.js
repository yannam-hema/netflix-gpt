import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAMjQMpA35eSvvgHoqiBlpfFh6PF4MfDS4",
  authDomain: "netflix-gpt-aae7d.firebaseapp.com", // Use the default Firebase domain
  projectId: "netflix-gpt-aae7d",
  storageBucket: "netflix-gpt-aae7d.appspot.com",
  messagingSenderId: "470595125677",
  appId: "1:470595125677:web:3020e781b100af9058a124",
  measurementId: "G-F20DV8ZRYQ",
    "headers": [
      {
        "source": "/**",
        "headers": [
          {
            "key": "Content-Security-Policy",
            "value": "default-src 'self'; script-src 'self' 'https://*.firebaseapp.com';"
          }
        ]
      }
    ]
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
