import md2json from "md-2-json";
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import Firebase from "firebase";
Firebase.initializeApp({
  apiKey: "AIzaSyDa95ChY-s_-MGYnRv_QsCysuWLnXF_LVk",
  authDomain: "oguzhancodes.firebaseapp.com",
  projectId: "oguzhancodes",
  storageBucket: "oguzhancodes.appspot.com"
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
