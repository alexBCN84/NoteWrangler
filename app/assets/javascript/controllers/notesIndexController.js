
angular.module('NoteWrangler').controller('NotesIndexController', function($scope, Note){
  $scope.notes = Note.query();
});
