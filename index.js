var es = require('esprima-selector');
var falafel = require('falafel');
var fs = require('fs');

var filename = process.argv[2];
var fileContents = fs.readFileSync(filename, 'utf8');

var workshopperName;
falafel(fileContents,
	es.tester([
		{
			selector: 'program expression.call',
			callback: function (node) {
				if (node.callee &&
					node.callee.name === 'Workshopper' &&
					node.arguments &&
					node.arguments.length > 0 &&
					node.arguments[0].type === 'ObjectExpression'
				) {
					node.arguments[0].properties.forEach(function (property) {
						if (property.key &&
							property.key.name &&
							property.key.name === 'name') {
							workshopperName = property.value.value;
						}
					});

				}
			}
    }
]));

console.log('workshopper name', workshopperName);
