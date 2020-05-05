"use strict";
/** This file is generated based on JSON schema. Do not modify. */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Yup = __importStar(require("yup"));
var EntityCodec_1 = require("@joystream/types/versioned-store/EntityCodec");
exports.ContentLicenseValidationSchema = Yup.object().shape({
    value: Yup.string()
        .required('This field is required')
        .max(200, 'Text is too long. Maximum length is 200 chars.')
});
var ContentLicenseCodec = /** @class */ (function (_super) {
    __extends(ContentLicenseCodec, _super);
    function ContentLicenseCodec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ContentLicenseCodec;
}(EntityCodec_1.EntityCodec));
exports.ContentLicenseCodec = ContentLicenseCodec;
function ContentLicenseToFormValues(entity) {
    return {
        value: entity && entity.value || ''
    };
}
exports.ContentLicenseToFormValues = ContentLicenseToFormValues;
exports.ContentLicenseClass = {
    value: {
        "id": "value",
        "name": "Value",
        "description": "The license of which the content is originally published under.",
        "type": "Text",
        "required": true,
        "maxTextLength": 200
    }
};
//# sourceMappingURL=ContentLicense.js.map