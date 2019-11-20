import Header from './header';
import Content from './content';
import Controls from './controls';

class Dashboard {
  constructor() {
    let container = document.getElementById('container');
    let header = new Header();
    let content = new Content();
    let controls = new Controls();
    container.innerHTML += header.getHtml();
    container.innerHTML += controls.getControls();
    container.innerHTML += content.getContent();

  }
}

export default Dashboard;