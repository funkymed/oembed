import Plugin from './Plugin'

export default class Vimeo extends Plugin {

    constructor(tag) {
        super(tag , 'vimeo');
    }

    convert() {
        var stringplitted = this.url.split('/');
        var codeVimeo = stringplitted[stringplitted.length-1];
        this.url = 'https://player.vimeo.com/video/'+codeVimeo;
    }
}
