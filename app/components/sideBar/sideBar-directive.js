angular.module("bgooDoc.sideBar", [])

.directive("sideBar", function() {
    return {
        require: "ngModel",
        templateUrl: "/app/components/sideBar/sideBar.html"
    }
})
