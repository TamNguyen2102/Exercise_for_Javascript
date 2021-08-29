import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Settings");
  }
  async getHtml() {
    return `
    <h1>You're viewing Setting</h1>
    <p>
        Fugiat voluptate et nisi Lorem cillum anim sit do eiusmod occaecat irure do. Reprehenderit anim fugiat sint exercitation consequat. Sit anim laborum sit amet Lorem adipisicing ullamco duis. Anim in do magna ea pariatur et.
    </p>
    <p>
        <a href="/settings" data-link>View Settings</a>.
    </p>
`;
  }
}
