export default class Plugin {
    tag;
    url;
    iframe;
    pluginName;

    constructor(tag, pluginName) {
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

    convert() {
    }

    getUrl() {
        return this.url;
    }

    replaceOEmbed() {
        if (this.url) {
            this.iframe.src = this.url;
            const parentDiv = this.tag.parentNode;
            if (parentDiv) {
                parentDiv.replaceChild(this.iframe, this.tag);
            }
        }
    }

    isPlugin() {
        return this.url.search(this.pluginName) != -1 ? true : false;
    }
}
