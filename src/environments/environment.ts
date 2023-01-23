export const environment = {
  firebase: (window as any).envConfig?.firebase || {
    apiKey: "AIzaSyCElEXkyicNJ5cta2GwJK9v4Rwzrrd45ck",
    authDomain: "avividlogo-dev.firebaseapp.com",
    projectId: "avividlogo-dev",
    storageBucket: "avividlogo-dev.appspot.com",
    messagingSenderId: "466177227653",
    appId: "1:466177227653:web:0dd955264b6085cc5ea2ec",
    measurementId: "G-8E3FQBZ149",
  },
  ui: {
    toast: {
      duration: 5000
    }
  }
};
