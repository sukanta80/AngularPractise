'use strict'

eventsApp.controller('EventController', 
      function EventController($scope){

          $scope.snippet = '<span style="color:red">hi there</span>';
          $scope.boolValue = true;
          $scope.mystyle = {color:'red'};
          $scope.myclass = "blue";
          $scope.buttonDisabled = true;
          $scope.sortorder = 'name';
          $scope.event = {
              name: 'Angular Boot Camp',
              date: '1/1/2018',
              time: '16:40 pm',
              location: {
                  address: 'Google Headquaters',
                  city: 'Mountain View',
                  province: 'CA'
              },
              imageUrl: '/img/angularjs-logo.png',              
              classDetails: [
                    {
                        name: 'Directives Masterclass',
                        creatorName: 'Bob Smith',
                        dueration: '1 hr',
                        level: 'Advanced',
                        abstract: 'In this session you will get the in and out of Directives',
                        upVoteCount: 0
                    },
                    {
                        name: 'Scopes for fun and Profit',
                        creatorName: 'John Doe',
                        dueration: '2 hr',
                        level: 'Introductory',
                        abstract: 'This session will take a closer look at Scopes',
                        upVoteCount: 0
                    },
                    {
                        name: 'Well behaved Controllers',
                        creatorName: 'John Doe',
                        dueration: '30 mins',
                        level: 'Intermediate',
                        abstract: 'Controllers are the beginning of Everything',
                        upVoteCount: 0
                    }
               ]
          }

          $scope.upVoteCount = function(classes) {              
            classes.upVoteCount++;
          };

          $scope.downVoteCount = function(classes){
              classes.upVoteCount--;
          }
          
      }

      
);