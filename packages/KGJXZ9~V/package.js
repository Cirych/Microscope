Package.describe({
  name: 'kt:errors',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Механизм отображения ошибок приложения пользователю',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');
  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');
  api.addFiles(['kt:errors.js', 'kt:errors_list.html', 'kt:errors_list.js'], 'client');
  if (api.export) 
    api.export('Errors');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('kt:errors');
  api.addFiles('kt:errors-tests.js');
});
