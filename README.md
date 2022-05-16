### Nextjs Firebase-v9-cloud-messaging

In firebase, You have to generate

1.  [Generate VapidKey](https://stackoverflow.com/questions/54996206/firebase-cloud-messaging-where-to-find-public-vapid-key#:~:text=Vapid%20Key%20is%20%22Voluntary%20Application,tab%2C%20click%20Generate%20Key%20Pair. "Generate VapidKey") and applied in file "./firebase/firebase.js"
2.  You have to add config variables. "./firebase/firebase.js" and "./public/firebase-messaging-sw.js"
3.  After, you execute de npm run dev. It will appear the token in the console, you can use that token to send a [test message. ](https://firebase.google.com/docs/cloud-messaging/js/first-message "test message. ") and it will send the foreground and background notification.
