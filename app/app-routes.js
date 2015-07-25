app.config(function($routeProvider) {

    $routeProvider.when('/edit', {
        templateUrl: 'app/views/edit/edit-view.html',
        controller: 'EditController'
    })

});
