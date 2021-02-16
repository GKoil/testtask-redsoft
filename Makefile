start:
	node_modules/.bin/webpack serve --config ./config/webpack.dev.js

build:
	npx webpack --config ./config/webpack.prod.js

lint:
	npx eslint .