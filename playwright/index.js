class TestComponent extends HTMLElement {
  internals

  constructor() {
    super();
    this.internals = this.attachInternals();
    this.internals.role = 'heading';
  }

  connectedCallback() {
    this.innerHTML = 'Mounted'
  }
}

customElements.define('test-component', TestComponent);
