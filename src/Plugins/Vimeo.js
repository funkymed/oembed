import Plugin from './Plugin'

export default class Vimeo extends Plugin {

    constructor(tag) {
        super(tag , 'vimeo');
    }

    convert() {
        var codeVimeo = this.url.split('https://vimeo.com/')[1];
        this.url = 'https://player.vimeo.com/video/'+codeVimeo;
    }
}
