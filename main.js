define(function (require, exports, module) {
    "use strict";
    var ExtensionUtils = brackets.getModule("utils/ExtensionUtils"),
		path = ExtensionUtils.getModulePath(module);
    ExtensionUtils.addLinkedStyleSheet(path + "styles.css");
});