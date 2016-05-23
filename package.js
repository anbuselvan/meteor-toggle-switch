Package.describe({
  name: 'anbuselvan:meteor-toggle-switch',
  version: '1.0.2',
  // Brief, one-line summary of the package.
  summary: 'Meteor Toggle Switch',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/anbuselvan/meteor-toggle-switch',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use('ecmascript');
  api.addFiles([
    'vendor/css-toggle-switch/dist/toggle-switch.css'
  ], 'client', {isImport: true});
  api.mainModule('meteor-toggle-switch.js');
});
