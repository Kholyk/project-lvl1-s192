install:
	npm install
start:
	npm run babel-node -- src/bin/brain-games.js
publish:
	npm publish
lint:
	npm run eslint "src"
even:
	npm run babel-node -- src/bin/brain-even.js
calc:
	npm run babel-node -- src/bin/brain-calc.js
nod:
	npm run babel-node -- src/bin/brain-nod.js
balance:
	npm run babel-node -- src/bin/brain-balance.js
