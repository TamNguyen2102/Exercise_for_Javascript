import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `
        <h1>Welcome back</h1>
        <p>Lorem 50</p>
        <p><a href='/' data-link>View recent Dashboard</p>
        `;
  }
}
