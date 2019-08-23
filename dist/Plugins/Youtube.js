'use strict';

exports.__esModule = true;

var _Plugin2 = require('./Plugin');

var _Plugin3 = _interopRequireDefault(_Plugin2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Youtube = function (_Plugin) {
    _inherits(Youtube, _Plugin);

    function Youtube(tag) {
        _classCallCheck(this, Youtube);

        return _possibleConstructorReturn(this, _Plugin.call(this, tag, 'youtube'));
    }

    Youtube.prototype.convert = function convert() {
        var codeYoutube = this.url.split('https://www.youtube.com/watch?v=')[1];
        if (codeYoutube) {
            this.url = "https://youtube.com/embed/" + codeYoutube;
            this.iframe.className = 'iframe-container';
            this.iframe.id = 'ytplayer';
        } else {
            this.url = null;
        }
    };

    return Youtube;
}(_Plugin3.default);

exports.default = Youtube;