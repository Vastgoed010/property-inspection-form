import { r as registerInstance, e as createEvent, h } from './index-1e0c6758.js';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function getDefaultExportFromNamespaceIfPresent (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') ? n['default'] : n;
}

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

function getAugmentedNamespace(n) {
	if (n.__esModule) return n;
	var a = Object.defineProperty({}, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var build = createCommonjsModule(function (module) {
module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n});},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n);}}function a(e){throw Error(e)}r.r(t);var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);}var t,r,o;return t=e,o=[{key:"rotateImage",value:function(e,t){var r=e.width,n=e.height,a=document.createElement("canvas"),o=a.getContext("2d");switch(a.width=r,a.height=n,t){case 2:o.transform(-1,0,0,1,r,0),o.translate(r,0),o.scale(-1,1);break;case 3:o.transform(-1,0,0,-1,r,n),o.translate(r,n),o.rotate(Math.PI);break;case 4:o.transform(1,0,0,-1,0,n),o.translate(0,n),o.scale(1,-1);break;case 5:o.transform(0,1,1,0,0,0),o.rotate(-.5*Math.PI),o.scale(-1,1);break;case 6:o.transform(0,1,-1,0,r,0),o.rotate(-.5*Math.PI),o.translate(-r,0);break;case 7:o.transform(0,-1,-1,0,r,n),o.rotate(-.5*Math.PI),o.translate(-r,n),o.scale(1,-1);break;case 8:o.transform(0,-1,1,0,0,n),o.rotate(.5*Math.PI),o.translate(0,-n);}return o.drawImage(e,0,0,r,n),a.toDataURL("image/".concat("JPEG"),100)}},{key:"b64toBlob",value:function(e){for(var t=atob(e.toString().replace(/^data:image\/(jpeg|jpg);base64,/,"")),r=[],n=0;n<t.length;n+=512){for(var a=t.slice(n,n+512),o=new Array(a.length),i=0;i<a.length;i++)o[i]=a.charCodeAt(i);var u=new Uint8Array(o);r.push(u);}return new Blob(r,{type:"image/jpeg"})}},{key:"getOrientation",value:function(e,t){var r=new FileReader;r.onload=function(e){var r=new DataView(e.target.result);if(65496!=r.getUint16(0,!1))return t(-2);for(var n=r.byteLength,a=2;a<n;){var o=r.getUint16(a,!1);if(a+=2,65505==o){if(1165519206!=r.getUint32(a+=2,!1))return t(-1);var i=18761==r.getUint16(a+=6,!1);a+=r.getUint32(a+4,i);var u=r.getUint16(a,i);a+=2;for(var c=0;c<u;c++)if(274==r.getUint16(a+12*c,i))return t(r.getUint16(a+12*c+8,i))}else {if(65280!=(65280&o))break;a+=r.getUint16(a,!1);}}return t(-1)},r.readAsArrayBuffer(e.slice(0,65536));}},{key:"createRotatedImage",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"base64",n=arguments.length>2?arguments[2]:void 0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:a,i=null,u=null,c=new FileReader;t?t.type&&!t.type.includes("image")?o("File Is NOT Image"):(c.readAsDataURL(t),c.onload=function(){var a=new Image;a.src=c.result,a.onload=function(){e.getOrientation(t,(function(t){!function(t,a){-2==t?o("Image is NOT JPEG"):-1==t&&o("Image is NOT have a exif code"),u=e.rotateImage(a,t),i=e.b64toBlob(u),n("blob"===r?i:u);}(t,a);}));};},c.onerror=function(e){o(e);}):o("File Not Found!");}},{key:"createRotatedImageAsync",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"base64";return new Promise((function(n,a){e.createRotatedImage(t,r,n,a);}))}}],(r=null)&&n(t.prototype,r),o&&n(t,o),e}();t.default={createRotatedImage:function(e,t,r){return o.createRotatedImage(e,t,r)},createRotatedImageAsync:function(e,t){return o.createRotatedImageAsync(e,t)}};}]);
});

const Rotator = /*@__PURE__*/getDefaultExportFromCjs(build);

const appPhotoCss = "app-photo input{display:none}app-photo button{background:#5851ff;color:white;margin:8px;border:none;font-size:13px;font-weight:700;text-transform:uppercase;padding:16px 20px;border-radius:2px;box-shadow:0 8px 16px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);outline:0;letter-spacing:0.04em;transition:all 0.15s ease;cursor:pointer}app-photo button:hover{box-shadow:0 3px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);transform:translateY(1px)}app-photo .popup{position:fixed;width:80%;background-color:white;box-shadow:0px 0px 21px 1px rgb(121, 120, 120);z-index:999;top:50%;transform:translateY(-50%);left:10%;align-items:center;justify-content:center;display:flex;flex-direction:column;padding:1em;box-sizing:border-box}app-photo .popup__overlay{background-color:rgba(0, 0, 0, 0.438);position:fixed;z-index:998;left:0;right:0;top:0;bottom:0}app-photo .popup button{width:100%}app-photo .ghost{background-color:rgb(207, 207, 207) !important;color:black}app-photo i{font-size:26px;margin:0;height:1em;width:1em}";

let AppPhoto = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.imageSelected = createEvent(this, "imageSelected", 7);
    this.text = '+ Add Photo';
    this.icon = '';
    this.showPopup = false;
  }
  readImage(e) {
    this.showPopup = false;
    const inputElement = e.target;
    const files = inputElement.files;
    console.log('Files', files);
    for (let i = 0; i < files.length; i++) {
      try {
        const file = files[i];
        const uri = Rotator.createRotatedImageAsync(file, 'base64');
        console.log(uri);
        uri.then(uri => {
          console.log('uri', uri);
          this.imageSelected.emit(uri);
        }, error => {
          console.log('error with exif, trying normal way', error);
          var reader = new FileReader();
          reader.readAsDataURL(files[i]);
          reader.onload = () => {
            console.log(reader.result);
            this.imageSelected.emit(reader.result);
          };
          reader.onerror = function (error) {
            console.log('Error: ', error);
          };
        });
      }
      catch (err) {
        console.log(err);
      }
    }
    // Autorotating script to negate EXIF orientation (pdfkit/pdfmake dont support EXIF)
    // Rotator.createRotatedImage(
    //   files[0],
    //   'base64',
    //   uri => {
    //     console.log('uri', uri);
    //     this.imageSelected.emit(uri);
    //   },
    //   error => {
    //     console.log('error', error);
    //     console.warn(error);
    //   },
    // );
    /* OLD DEFAULT FILE READER */
    // const fileReader = new FileReader();
    // fileReader.onload = e => {
    //   this.imageSelected.emit(e.target.result);
    //   this.inputElement.value = null;
    // };
    // fileReader.readAsDataURL(files[0]);
  }
  addImagePopup() {
    this.showPopup = true;
  }
  render() {
    return (h("div", null, h("input", { ref: el => (this.inputElement = el), type: "file", name: "image", accept: "image/*", capture: "environment", onChange: e => this.readImage(e) }), h("input", { ref: el => (this.inputElement2 = el), type: "file", name: "image2", accept: "image/*", multiple: true, onChange: e => this.readImage(e) }), h("button", { onClick: () => this.addImagePopup() }, this.text ? h("div", null, this.text) : '', this.icon ? h("i", { class: `fas fa-${this.icon}` }) : ''), this.showPopup ? (h("div", { class: "popup__overlay" }, h("div", { class: "popup" }, h("button", { onClick: () => this.inputElement.click() }, "Take photo"), h("button", { onClick: () => this.inputElement2.click() }, "Select photo from device"), h("button", { class: "ghost", onClick: () => (this.showPopup = false) }, "Cancel")))) : ('')));
  }
};
AppPhoto.style = appPhotoCss;

export { AppPhoto as app_photo };
