import Plugin from './Plugin'

export default class Facebook extends Plugin {

    constructor(tag) {
        super(tag, 'facebook');
    }

    convert() {
        this.url="https://www.facebook.com/plugins/video.php?href="+escape(this.url)+"&show_text=0&width=560";
    }
}
