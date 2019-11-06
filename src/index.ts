// needed for ie 11
import '@webcomponents/custom-elements'; 

// Lib stuff
import './assets/styles/main.sass';
import Lib from './Lib.svelte';

new Lib({
  target: document.body,
  props: {
    name: 'User'
  }
});
