import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCQT0YTu3fS9Ki0tppVQi5OnvYUn-Dldzs',
  authDomain: 'problems-todo.firebaseapp.com',
  projectId: 'problems-todo',
  storageBucket: 'problems-todo.appspot.com',
  messagingSenderId: '857435758960',
  appId: '1:857435758960:web:6b0bdf7487a77e099aafb5'
};

firebase.initializeApp(firebaseConfig);

export default firebase;
