install: 
	npm ci

Brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run 
lint:
	npx eslint .
lintfix:
	npx eslint --fix