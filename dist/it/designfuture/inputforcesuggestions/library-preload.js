jQuery.sap.registerPreloadedModules({
	"version": "2.0",
	"name": "it.designfuture.inputforcesuggestions.library-preload",
	"modules": {
		"it/designfuture/inputforcesuggestions/InputSuggestions.js": "/*!\r\n * ${copyright}\r\n */\r\n\r\n// Provides control it.designfuture.inputforcesuggestions.InputSuggestions\r\nsap.ui.define([\r\n\t\t'sap/m/Input'\r\n\t], function(Input) {\r\n\t\"use strict\";\r\n\r\n\r\n\t/**\r\n\t * Constructor for a new InputSuggestions.\r\n\t *\r\n\t * @param {string} [sId] id for the new control, generated automatically if no id is given \r\n\t * @param {object} [mSettings] initial settings for the new control\r\n\t *\r\n\t * @class\r\n\t * InputSuggestions OpenUI5 control that extend Input to allow developer to force suggestion selection\r\n\t * @extends sap.m.InputBase\r\n\t * @version ${version}\r\n\t *\r\n\t * @constructor\r\n\t * @public\r\n\t * @since 1.40\r\n\t * @name it.designfuture.inputforcesuggestions.InputSuggestions\r\n\t */\r\n\tvar InputSuggestions = Input.extend(\"it.designfuture.inputforcesuggestions.InputSuggestions\", { \r\n\r\n\t\tmetadata : {\r\n\t\t\tproperties : {\r\n\t\t\t\tforceSuggestionSelection : {type : \"boolean\", group : \"Appearance\", defaultValue : true}\r\n\t\t\t}\r\n\t\t}, \r\n\t\taggregations: {},\r\n\t\tevents: {},\r\n\t\trenderer: {}\r\n\t});\r\n\t\r\n\tInputSuggestions.prototype.onChange = function(oEvent, mParameters, sNewValue) {\r\n\t\tInput.prototype.onChange.apply(this, arguments);\r\n\t\t\r\n\t\tif( this.getForceSuggestionSelection() ) {\r\n\t\t\t//check if we have an item selected\r\n\t\t\t//check if the item selected value is the same as the one from this.getValue()\r\n\t\t\tif( this._sSelectedValue !== this.getValue() ) {\r\n\t\t\t\tthis.setValue(\"\");\r\n\t\t\t\treturn;\r\n\t\t\t}\r\n\t\t}\r\n\t};\r\n\t\r\n\treturn InputSuggestions;\r\n\r\n}, /* bExport= */ true);",
		"it/designfuture/inputforcesuggestions/library.js": "/*!\r\n * ${copyright}\r\n */\r\n\r\n/**\r\n * Initialization Code and shared classes of library it.designfuture.inputforcesuggestions.\r\n */\r\nsap.ui.define([\r\n\t'jquery.sap.global', \r\n\t'sap/ui/core/library' // library dependency\r\n\t],  function(jQuery, library) {\r\n\r\n\t\t\"use strict\";\r\n\r\n\t\t/**\r\n\t\t * Suite controls library.\r\n\t\t *\r\n\t\t * @namespace\r\n\t\t * @name it.designfuture.inputforcesuggestions\r\n\t\t * @author Emanuele Ricci <stermi@gmail.com>\r\n\t\t * @version ${version}\r\n\t\t * @public\r\n\t\t */\r\n\r\n\r\n\t\t// delegate further initialization of this library to the Core\r\n\t\tsap.ui.getCore().initLibrary({\r\n\t\t\tname : \"it.designfuture.inputforcesuggestions\",\r\n\t\t\tnoLibraryCSS: true,\r\n\t\t\tversion: \"${version}\",\r\n\t\t\tdependencies : [\"sap.ui.core\", \"sap.m\"],\r\n\t\t\ttypes: [],\r\n\t\t\tinterfaces: [],\r\n\t\t\tcontrols: [ \r\n\t\t\t\t\"it.designfuture.inputforcesuggestions.InputSuggestions\"\r\n\t\t\t],\r\n\t\t\telements: []\r\n\t\t});\r\n\r\n\t\treturn it.designfuture.inputforcesuggestions;\r\n\r\n}, /* bExport= */ false);"
	}
});