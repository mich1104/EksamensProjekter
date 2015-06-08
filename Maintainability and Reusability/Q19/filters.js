/**
 * Created by Michael on 06/06/15.
 */
angular.module('avgFilters',[])
    .filter('avgFilter', function(){

        return function(grades){

            var filteredGrades = grades.filter(function(element){

                return typeof element.grade!='undefined';
            });
            if(filteredGrades.length===0){

                return 'No grades found';
            }else if(filteredGrades.length>0){

                var added=0;
                filteredGrades.forEach(function(grade){

                    added = added+parseInt(grade.grade);
                });
                console.log(added);
                console.log(filteredGrades.length);
                return added/filteredGrades.length;
            }
            return filteredGrades;
        }
    });