'use strict';

exports.__esModule = true;

var _Dailymotion = require('./Plugins/Dailymotion');

var _Dailymotion2 = _interopRequireDefault(_Dailymotion);

var _Facebook = require('./Plugins/Facebook');

var _Facebook2 = _interopRequireDefault(_Facebook);

var _Twitter = require('./Plugins/Twitter');

var _Twitter2 = _interopRequireDefault(_Twitter);

var _Vimeo = require('./Plugins/Vimeo');

var _Vimeo2 = _interopRequireDefault(_Vimeo);

var _Youtube = require('./Plugins/Youtube');

var _Youtube2 = _interopRequireDefault(_Youtube);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OEmbed = function () {
    function OEmbed() {
        _classCallCheck(this, OEmbed);

        var oembed = document.getElementsByTagName('oembed');
        var toReplace = [];
        for (var t = 0; t < oembed.length; t++) {
            var tag = oembed[t];
            var plugin = this.getPlugin(tag);
            if (plugin) {
                toReplace.push(plugin);
            }
        }
        for (var r in toReplace) {
            toReplace[r].convert();
            toReplace[r].replaceOEmbed();
        }
    }

    OEmbed.prototype.getPlugin = function getPlugin(tag) {
        var Plugins = [_Dailymotion2.default, _Vimeo2.default, _Youtube2.default, _Facebook2.default, _Twitter2.default];
        for (var b in Plugins) {
            var p = new Plugins[b](tag);
            if (p.isPlugin()) {
                return p;
            }
        }
        return false;
    };

    return OEmbed;
}();

exports.default = OEmbed;