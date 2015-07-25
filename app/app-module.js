var app = angular.module('bgooDoc', ['ngRoute', 'bgooDoc.edit', 'bgooDoc.textarea']);

//things here are things that need to be accessed thru the entire app, ie controllers
//services needed only for one view should be included in that view
//putting strings in [] is like calling getInstance for that whatever-it-is;
//singleton pattern: only one will be created no matter how many times you call it in your views
//bgooDoc.edit is a sub-module of bgooDoc - module injected inside a module; the 'edit' module
