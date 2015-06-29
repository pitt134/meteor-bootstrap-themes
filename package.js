Package.describe({
  name: 'pitt:meteor-bootstrap-themes',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['less'], 'client');
  api.use('less','client');
  api.addFiles(path.join('lib', 'js', 'bootstrap.js'), 'client');
  api.addFiles(path.join('lib', 'img', 'glyphicons-halflings.png'), 'client');
  api.addFiles(path.join('lib', 'img', 'glyphicons-halflings-white.png'), 'client');
  api.addFiles('meteor-bootstrap-themes.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('pitt:meteor-bootstrap-themes');
  api.addFiles('meteor-bootstrap-themes-tests.js');
});
