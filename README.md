# openui5-inputforcesuggestions

openui5-inputforcesuggestions control extends Input allowing developers to force user to choose an option from the Suggestions aggregation.

## Demo

You can checkout a demo with different configurations here: https://stermi.github.io/openui5-inputforcesuggestions/test/demo/

## Usage

### Configure manifest.json

Add the library to sap.ui5 dependencies list and configure the resourceRoots to point where you uploaded the custom library.

```json
"sap.ui5": {
    ...
	"dependencies": {
		"minUI5Version": "1.30.0",
		"libs": {
    		...
			"it.designfuture.inputforcesuggestions": {}
		}
	},
	"resourceRoots": {
		"it.designfuture.inputforcesuggestions": "./thirdparty/it/designfuture/inputforcesuggestions/"
	}
}
```

### Add the custom control inside an XML View

First of all add the namespace 

```xml
xmlns:df="it.designfuture.inputforcesuggestions"
```

And than you can simply add a InputSuggestions

```xml
<df:InputSuggestions
	showSuggestion="true"
	suggestionItems="{/suggestions}" >
	<df:suggestionItems>
		<core:Item key="{key}" text="{text}" />
	</df:suggestionItems>
</df:InputSuggestions>
```

or if you want a more complex scenario (tabular suggestions)

```xml
<df:InputSuggestions
	type="Text"
	showSuggestion="true"
	showTableSuggestionValueHelp="false"
	forceSuggestionSelection="true"
	suggestionRows="{/ProductCollection}">
	<df:suggestionColumns>
		<Column
			hAlign="Begin"
			popinDisplay="Inline"
			demandPopin="true">
			<Label text="Name"/>
		</Column>
		<Column
			hAlign="Center"
			popinDisplay="Inline"
			demandPopin="true"
			minScreenWidth="Tablet">
			<Label text="Product ID"/>
		</Column>
		<Column
			hAlign="Center"
			popinDisplay="Inline"
			demandPopin="false"
			minScreenWidth="Tablet">
			<Label text="Supplier Name"/>
		</Column>
		<Column
			hAlign="End"
			popinDisplay="Inline"
			demandPopin="true">
			<Label text="Price"/>
		</Column>
	</df:suggestionColumns>
	<df:suggestionRows>
		<ColumnListItem>
			<cells>
				<Label text="{Name}"/>
				<Label text="{ProductId}"/>
				<Label text="{SupplierName}"/>
				<Label
					text="{
	 						parts:[{path:'Price'},{path:'CurrencyCode'}],
						type: 'sap.ui.model.type.Currency',
 						formatOptions: {showMeasure: true}
					}"/>
			</cells>
		</ColumnListItem>
	</df:suggestionRows>
</df:InputSuggestions>
```

## Parameters

| Name | Type | Default| Description
| :---- | :------------------- | :---- | :---------  |
| forceSuggestionSelection | boolean | true | Clean the Input value if user has not selected a valid option from suggestions

## Events

None

## Methods

None

## Build

If you would like to extend and customize the controllr, you can easily do that but re-building the code with just a simple Grunt command:

```
npm install
grunt build
```

## Credits

Emanuele Ricci

 - Email: [stermi@gmail.com](stermi@gmail.com)
 - Twitter: [@StErMi](https://twitter.com/StErMi)
 - LinkedIn: [@Emanuele Ricci](https://www.linkedin.com/in/emanuelericci/)
 - Medium: [@StErMi](https://medium.com/@stermi)

## License

This project is licensed under the Apache 2.0 License - see the [LICENSE.md](LICENSE.md) file for details
