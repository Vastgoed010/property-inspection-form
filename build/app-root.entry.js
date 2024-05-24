import { r as registerInstance, h } from './index-1e0c6758.js';

const appRootCss = "header{background:#5851ff;color:white;height:56px;display:flex;align-items:center;box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.26)}h1{font-size:1.2rem;font-weight:500;color:#fff;padding:0 12px}i{margin:0 0 0 1em}.spacer{flex-grow:1}.newform{background-color:rgb(68, 175, 125);height:3em;width:10em;padding:0}.language{background-color:rgb(53, 147, 170);height:3em;width:5em;padding:0}";

let AppRoot = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.selectedLanguage = "EN";
  }
  clearForm() {
    document.querySelector('app-home').clearForm();
  }
  switchLanguage() {
    if (this.selectedLanguage == "EN") {
      this.selectedLanguage = "NL";
      document.querySelector('app-home').switchLanguage("NL");
    }
    else {
      this.selectedLanguage = "EN";
      document.querySelector('app-home').switchLanguage("EN");
    }
  }
  render() {
    return (h("div", null, h("header", null, h("i", { class: "fas fa-home" }), h("h1", null, "Property Form"), h("div", { class: "spacer" }), h("button", { class: "newform", onClick: () => this.clearForm() }, "New"), h("button", { class: "language", onClick: () => this.switchLanguage() }, this.selectedLanguage)), h("main", null, h("stencil-router", null, h("stencil-route-switch", { scrollTopOffset: 0 }, h("stencil-route", { component: "app-home" }))))));
  }
};
AppRoot.style = appRootCss;

export { AppRoot as app_root };
