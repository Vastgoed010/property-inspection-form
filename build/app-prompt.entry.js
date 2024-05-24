import { r as registerInstance, e as createEvent, h } from './index-1e0c6758.js';

const appPromptCss = ":host{display:inline-block}app-prompt button{background:#5851ff;color:white;margin:8px;border:none;font-size:13px;font-weight:700;text-transform:uppercase;padding:16px 20px;border-radius:2px;box-shadow:0 8px 16px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);outline:0;letter-spacing:0.04em;transition:all 0.15s ease;cursor:pointer}app-prompt button:hover{box-shadow:0 3px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);transform:translateY(1px)}app-prompt .popup{position:fixed;width:80%;background-color:white;box-shadow:0px 0px 21px 1px rgb(121, 120, 120);z-index:999;top:50%;transform:translateY(-50%);left:10%;align-items:center;justify-content:center;display:flex;flex-direction:column;padding:1em;box-sizing:border-box}app-prompt .popup__overlay{background-color:rgba(0, 0, 0, 0.438);position:fixed;z-index:998;left:0;right:0;top:0;bottom:0}app-prompt .popup button{width:100%}app-prompt .ghost{background-color:rgb(207, 207, 207) !important;color:black}app-prompt input{border:1px solid rgb(88, 88, 88);border-radius:4px;padding:0.8em 0.8em;margin:1em 1em;width:100%;box-sizing:border-box}app-prompt i{font-size:26px;margin:0;height:1em;width:1em}";

let AppPrompt = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.save = createEvent(this, "save", 7);
    this.text = 'Name:';
    this.value = 'Hallway 1';
    this.buttonText = '';
    this.buttonIcon = '';
    this.showPopup = false;
  }
  render() {
    return (h("div", null, h("button", { onClick: () => {
        this.showPopup = true;
        setTimeout(() => {
          this.inputElement.focus();
          setTimeout(() => {
            this.inputElement.select();
          }, 200);
        }, 200);
      } }, this.buttonText ? h("div", null, this.buttonText) : "", this.buttonIcon ? h("i", { class: `far fa-${this.buttonIcon}` }) : ""), this.showPopup ? (h("div", { class: "popup__overlay" }, h("div", { class: "popup" }, this.text, h("input", { type: "text", value: this.value, onChange: e => (this.value = e.target.value), ref: el => (this.inputElement = el), onKeyDown: e => {
        if (e.key === "Enter") {
          //@ts-ignore
          this.save.emit(e.target.value);
          this.showPopup = false;
        }
      } }), h("button", { onClick: () => {
        this.save.emit(this.value);
        this.showPopup = false;
      } }, "Save"), h("button", { class: "ghost", onClick: () => (this.showPopup = false) }, "Cancel")))) : ('')));
  }
};
AppPrompt.style = appPromptCss;

export { AppPrompt as app_prompt };
