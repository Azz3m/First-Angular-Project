//IIFE an immediately invoked function expression
(function(){
  'use restrict';
  //let's define an angular object passing the name and depedentcies
  angular.module('NameClacASCII',[])
  //let's define the controller
  .controller("NameClacASCIIContoller",function($scope){
    $scope.name = "Azzam Azez Ali";
    $scope.valueInNumeric=0;
    $scope.displayNumeric = function(){
      var totalValueOfTheName = calculateNameFromString($scope.name);
      $scope.valueInNumeric=totalValueOfTheName;
    };
    function calculateNameFromString(string){
      var totalStringValue = 0;
      for(var i=0;i<string.length;i++){
        totalStringValue += string.charCodeAt(i);

      }
      return totalStringValue;
    }

  })
}
)();
