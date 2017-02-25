
hackApp.directive("mySnippet", function () {
    return {
        restrict: 'E',
        template: '<div>This is a snippet</div>',
        replace: true
    };
});