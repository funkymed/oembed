'use strict';

exports.__esModule = true;

var _Plugin2 = require('./Plugin');

var _Plugin3 = _interopRequireDefault(_Plugin2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Vimeo = function (_Plugin) {
    _inherits(Vimeo, _Plugin);

    function Vimeo(tag) {
        _classCallCheck(this, Vimeo);

        return _possibleConstructorReturn(this, _Plugin.call(this, tag, 'vimeo'));
    }

    Vimeo.prototype.convert = function convert() {
        var codeVimeo = this.url.split('https://vimeo.com/')[1];
        this.url = 'https://player.vimeo.com/video/' + codeVimeo;
    };

    return Vimeo;
}(_Plugin3.default);

exports.default = Vimeo;