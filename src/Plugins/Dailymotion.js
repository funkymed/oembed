import Plugin from './Plugin'

export default class Dailymotion extends Plugin {

    constructor(tag) {
        super(tag, 'dailymotion');
    }

    convert() {
        var codeVideo = this.url.split("https://www.dailymotion.com/video/")[1];
        if (codeVideo) {
            this.url = "https://www.dailymotion.com/embed/video/" + codeVideo;
        }
    }
}
