import Plugin from './Plugin'

export default class YoutubeBE extends Plugin {

    constructor(tag) {
        super(tag, 'youtu.be');
    }

    convert() {
        var stringplitted = this.url.split('/');
        var codeYoutube = stringplitted[stringplitted.length-1];
        if (codeYoutube) {
            this.url = "https://youtube.com/embed/" + codeYoutube;
        } else {
            this.url = null;
        }
    }
}
