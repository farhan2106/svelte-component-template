// needed for ie 11
import '@webcomponents/custom-elements'; 

// Lib stuff
import './assets/styles/main.sass';
import SomeComponent from './SomeComponent.svelte';

const scriptTag = document.querySelector('script[data-id=SomeComponent][data-var-name]');
if (scriptTag) {
  const varName = scriptTag.getAttribute('data-var-name') || 'SomeComponent';
  (window as any)[varName] = SomeComponent
}

export default SomeComponent;
