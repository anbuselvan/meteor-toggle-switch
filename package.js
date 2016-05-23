Package.describe({
  name: 'anbuselvan:meteor-toggle-switch',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Meteor Toggle Switch',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/anbuselvan/meteor-toggle-switch.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.4');
  api.use('ecmascript');
  api.addFiles([
    'vendor/src/toggle-switch.scss'
  ], 'client', {isImport: true});
  api.mainModule('meteor-toggle-switch.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('meteor-toggle-switch');
  api.mainModule('meteor-toggle-switch-tests.js');
});
