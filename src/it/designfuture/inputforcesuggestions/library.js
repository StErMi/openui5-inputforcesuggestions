/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library it.designfuture.inputforcesuggestions.
 */
sap.ui.define([
	'jquery.sap.global', 
	'sap/ui/core/library' // library dependency
	],  function(jQuery, library) {

		"use strict";

		/**
		 * Suite controls library.
		 *
		 * @namespace
		 * @name it.designfuture.inputforcesuggestions
		 * @author Emanuele Ricci <stermi@gmail.com>
		 * @version ${version}
		 * @public
		 */


		// delegate further initialization of this library to the Core
		sap.ui.getCore().initLibrary({
			name : "it.designfuture.inputforcesuggestions",
			noLibraryCSS: true,
			version: "${version}",
			dependencies : ["sap.ui.core", "sap.m"],
			types: [],
			interfaces: [],
			controls: [ 
				"it.designfuture.inputforcesuggestions.InputSuggestions"
			],
			elements: []
		});

		return it.designfuture.inputforcesuggestions;

}, /* bExport= */ false);