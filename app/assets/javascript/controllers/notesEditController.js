angular.module('NoteWrangler')
.controller('NotesEditController', function(Note, $scope, Category, $routeParams, $location){
  $scope.note = Note.get({id: $routeParams.id});
  $scope.isSubmitting = false;
  $scope.categories = Category.query();

  $scope.saveNote = function(note) {
    $scope.isSubmitting = true;
    note.$update().finally(function(){
      $scope.isSubmitting = false;
      $location.path('/notes/' + note.id);
    });
  }
});
