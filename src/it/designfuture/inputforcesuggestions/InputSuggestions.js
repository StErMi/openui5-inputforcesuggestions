/*!
 * ${copyright}
 */

// Provides control it.designfuture.inputforcesuggestions.InputSuggestions
sap.ui.define([
		'sap/m/Input'
	], function(Input) {
	"use strict";


	/**
	 * Constructor for a new InputSuggestions.
	 *
	 * @param {string} [sId] id for the new control, generated automatically if no id is given 
	 * @param {object} [mSettings] initial settings for the new control
	 *
	 * @class
	 * InputSuggestions OpenUI5 control that extend Input to allow developer to force suggestion selection
	 * @extends sap.m.InputBase
	 * @version ${version}
	 *
	 * @constructor
	 * @public
	 * @since 1.40
	 * @name it.designfuture.inputforcesuggestions.InputSuggestions
	 */
	var InputSuggestions = Input.extend("it.designfuture.inputforcesuggestions.InputSuggestions", { 

		metadata : {
			properties : {
				forceSuggestionSelection : {type : "boolean", group : "Appearance", defaultValue : true}
			}
		}, 
		aggregations: {},
		events: {},
		renderer: {}
	});
	
	InputSuggestions.prototype.onChange = function(oEvent, mParameters, sNewValue) {
		Input.prototype.onChange.apply(this, arguments);
		
		if( this.getForceSuggestionSelection() ) {
			//check if we have an item selected
			//check if the item selected value is the same as the one from this.getValue()
			if( this._sSelectedValue !== this.getValue() ) {
				this.setValue("");
				return;
			}
		}
	};
	
	return InputSuggestions;

}, /* bExport= */ true);