import Dailymotion from './Plugins/Dailymotion';
import Facebook from './Plugins/Facebook';
import Twitter from './Plugins/Twitter';
import Vimeo from './Plugins/Vimeo';
import Youtube from './Plugins/Youtube';
import YoutubeBE from './Plugins/Youtu.be';

export default class OEmbed {
    constructor() {
        var oembed = document.getElementsByTagName('oembed');
        const toReplace = [];
        for (var t = 0; t < oembed.length; t++) {
            let tag = oembed[t];
            let plugin = this.getPlugin(tag);
            if (plugin) {
                toReplace.push(plugin);
            }
        }
        for (const r in toReplace) {
            toReplace[r].convert();
            toReplace[r].replaceOEmbed();
        }
    }

    getPlugin(tag) {
        let Plugins = [Dailymotion, Vimeo, Youtube, YoutubeBE, Facebook, Twitter];
        for (const b in Plugins) {
            let p = new Plugins[b](tag);
            if (p.isPlugin()) {
                return p;
            }
        }
        return false;
    }

}
