var sequence = require('run-sequence');

var release = function(type) {
  return sequence('test:release', 'tag:' + type, 'publish');
};

module.exports = function(gulp) {
  gulp.task('release', [ 'release:patch' ]);

  gulp.task('release:patch', release.bind(null, 'patch'));
  gulp.task('release:minor', release.bind(null, 'minor'));
  gulp.task('release:major', release.bind(null, 'major'));
};