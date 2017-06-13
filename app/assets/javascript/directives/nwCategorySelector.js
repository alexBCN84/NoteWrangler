angular.module('NoteWrangler').directive('nwCategorySelector', function(Category){
  return {
    replace: true,
    require: '?ngModel',
    restrict: 'E',
    templateUrl: 'assets/templates/directives/nwCategorySelector.html',
    link : function(scope, element, attrs, ngModelCtrl){
      var activeCategory = {};
      scope.categories = Category.query();

      scope.isActive = function(category) {
        return activeCategory && activeCategory.id === category.id;
      };
      scope.toggleCategory = function(category) {
        if(activeCategory === category) {
          activeCategory = {};
        } else {
          activeCategory = category;
        }
        ngModelCtrl.$setViewValue(activeCategory);
      };
      ngModelCtrl.$render = function() {
        activeCategory = ngModelCtrl.$viewValue;
      }
    }
  };
});
