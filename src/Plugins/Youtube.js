import Plugin from './Plugin'

export default class Youtube extends Plugin {

    constructor(tag) {
        super(tag, 'youtube');
    }

    convert() {
        var stringplitted = this.url.split('watch?v=');
        var codeYoutube = stringplitted[stringplitted.length-1];
        if (codeYoutube) {
            this.url = "https://youtube.com/embed/" + codeYoutube;
        } else {
            this.url = null;
        }
    }
}
