import { useState, useEffect } from "react";
import { firebaseCloudMessaging } from "../firebase/firebase";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false);
  if (mounted) {
    firebaseCloudMessaging.onMessage();
  }
  useEffect(() => {
    firebaseCloudMessaging.init();
    const setToken = async () => {
      const token = await firebaseCloudMessaging.tokenInlocalforage();
      if (token) {
        setMounted(true);
        // not working
      }
    };
    const result = setToken();
    console.log("result", result);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
