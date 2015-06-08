/**
 * Created by Michael on 06/06/15.
 */
angular.module('services',[])
    .service('dataService', function(){

        this.subjects = function(){

            return [
                {courseId : 1000,courseName: "Basic Programming"},
                {courseId : 1001,courseName: "Advanced Programming"},
                {courseId : 1003,courseName: "DataBase Intro"}];
        };
        this.students = function(){

            students = [];
            students.push({studentId : 100, name: "Peter Hansen", grades : [{grade: "10"},{grade: "12"},{}]});
            students.push({studentId : 101, name: "Jan Olsen", grades : [{grade: "7"},{grade: "10"},{}]});
            students.push({studentId : 102, name: "Gitte Poulsen", grades : [{grade: "7"},{grade: "7"},{}]});
            students.push({studentId : 103, name: "John McDonald", grades : [{grade: "10"},{},{grade: "7"}]});

            return students;
        }
    });