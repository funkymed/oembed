'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Plugin = function () {
    function Plugin(tag, pluginName) {
        _classCallCheck(this, Plugin);

        this.tag = tag;
        this.pluginName = pluginName;
        this.url = this.tag.getAttribute('url');
        this.iframe = document.createElement('iframe');
        this.iframe.setAttribute('type', 'text/html');
        this.iframe.setAttribute('allowFullScreen', '');
        this.iframe.setAttribute('frameborder', '0');
        this.iframe.setAttribute('scrolling', 'no');
        this.iframe.setAttribute('width', '640');
        this.iframe.setAttribute('height', '320');
    }

    Plugin.prototype.convert = function convert() {};

    Plugin.prototype.getUrl = function getUrl() {
        return this.url;
    };

    Plugin.prototype.replaceOEmbed = function replaceOEmbed() {
        if (this.url) {
            this.iframe.src = this.url;
            var parentDiv = this.tag.parentNode;
            if (parentDiv) {
                parentDiv.replaceChild(this.iframe, this.tag);
            }
        }
    };

    Plugin.prototype.isPlugin = function isPlugin() {
        return this.url.search(this.pluginName) != -1 ? true : false;
    };

    return Plugin;
}();

exports.default = Plugin;