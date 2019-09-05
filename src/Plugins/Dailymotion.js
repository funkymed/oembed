import Plugin from './Plugin'

export default class Dailymotion extends Plugin {

    constructor(tag) {
        super(tag, 'dailymotion');
    }

    convert() {
        var stringplitted = this.url.split('/');
        var codeVideo = stringplitted[stringplitted.length-1];
        if (codeVideo) {
            this.url = "https://www.dailymotion.com/embed/video/" + codeVideo;
        }
    }
}
