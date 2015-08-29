exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['e2e/accessibility.spec.js'],
	//'./node_modules/protractor/plugins/accessibility/spec/success_spec.js',
	//'./node_modules/protractor/plugins/accessibility/spec/success_spec.js'
	plugins: [{
		chromeA11YDevTools: {
			treatWarningsAsFailures: true
		},
		path: './node_modules/protractor/plugins/accessibility'
	}]
};