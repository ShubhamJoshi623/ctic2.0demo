
import i18next from 'i18next';
import {initReactI18next} from "react-i18next";
import Backend from 'i18next-http-backend';


i18next
.use(Backend)
.use(initReactI18next)
.init({
    backend: {
        loadPath: 'https://my-json-server.typicode.com/ShubhamJoshi623/LangServer/title{{lng}}'
     },
  lng: 'en', // if you're using a language detector, do not define the lng optio
  debug: true,
  fallbackLng: "en",
//   resources: {
//     en: {
//       translation: {
//         "sampletext": "This is a sample text"
//       }
//     },
//     fr: {
//       translation: {
//         "sampletext": "Ceci est un exemple de texte"
//       }
//     }
//   }
});