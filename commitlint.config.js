module.exports = {
  extends: ['@commitlint/config-angular'],
  rules: {
    'subject-max-length': [2, 'always', 120],
    'scope-enum': [2, 'always', []],
    'scope-empty': [2, 'always'],
    'type-enum': [
			2,
			'always',
			[
				'build',
				'chore',
				'ci',
				'docs',
				'feat',
				'fix',
				'perf',
        'refactor',
        'release',
				'revert',
				'style',
				'test'
			]
		]
  }
};
