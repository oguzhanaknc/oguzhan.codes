import md2json from "md-2-json";
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import Firebase from "firebase";

Firebase.initializeApp({
  apiKey: process.env.VUE_APP_APIKEY,
  authDomain: process.env.VUE_APP_AUTHDOMAIN,
  projectId: process.env.VUE_APP_PROJECTID,
  storageBucket: process.env.VUE_APP_STOREAGEBUTCKET
});
export const db = Firebase.firestore();

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function(code) {
    return hljs.highlightAuto(code).value;
  },
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

//json to markdown
export function j2m(jsondata, options) {
  var thump = JSON.parse(jsondata);
  thump = md2json.toMd(thump);
  if (!options) {
    thump = marked(thump);
  }

  return thump;
}
// markdown to json
export function m2j(mdata) {
  return new Promise(function(resolve) {
    resolve(JSON.stringify(md2json.parse(mdata)));
  });
}

export function justMarkdown(data) {
  return marked(data);
}

export function login(email, password) {
  return new Promise(function(resolve, reject) {
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        console.log(user.user.uid);

        resolve(user.user);
      })
      .catch(function(error) {
        console.log(error);
        reject(error);
      });
  });
}

export function getUser() {
  return new Promise(function(resolve) {
    Firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        resolve(true);
      } else {
        console.log("üye yok");
        resolve(false);
      }
    });
  });
}
export function logout() {
  Firebase.auth()
    .signOut()
    .then(function() {
      window.location.reload();
    })
    .catch(function(error) {
      alert(error.message);
    });
}
export function getSlugs() {
  let posts = [];
  Firebase.firestore()
    .collection("Posts")
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        posts.push(doc.data());
      });
    });
  return posts;
}
