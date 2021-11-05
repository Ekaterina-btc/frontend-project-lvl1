install: 
	npm ci

Brain-games:
	node bin/brain-games.js
Brain-calc:
	node bin/brain-calc.js
Brain-even:
	node bin/brain-even.js
Brain-gcd:
	node bin/brain-gcd.js
Brain-prime:
	node bin/brain-prime.js
Brain-progression:
	node bin/brain-progression.js

publish:
	npm publish --dry-run 
lint:
	npx eslint .
lintfix:
	npx eslint --fix