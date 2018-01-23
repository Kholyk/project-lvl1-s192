install:
	npm install
start:
	npm run babel-node -- src/bin/brain-games.js
publish:
	npm publsh
lint:
	npm run eslint --fix "src/*"
