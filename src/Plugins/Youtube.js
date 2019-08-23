import Plugin from './Plugin'

export default class Youtube extends Plugin {

    constructor(tag) {
        super(tag, 'youtube');
    }

    convert() {
        var codeYoutube = this.url.split('https://www.youtube.com/watch?v=')[1];
        if (codeYoutube) {
            this.url = "https://youtube.com/embed/" + codeYoutube;
            this.iframe.className = 'iframe-container';
            this.iframe.id = 'ytplayer';
        } else {
            this.url = null;
        }
    }
}
