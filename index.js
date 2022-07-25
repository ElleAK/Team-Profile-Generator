const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 
const path = require("path");
const fs = require('fs'); 
const inquirer = require('inquirer');

teamArray = [];

function startApp () {

    function createTeam () {
      inquirer.prompt([{
        type: "list",
        message: "Job title of the employee you would like to add?",
        name: "addEmployee",
        choices: ["Manager", "Engineer", "Intern", "No others needed."]
      }]).then(function (userInput) {
        switch(userInput.addEmployee) {
          case "Manager":
            addManager();
            break;
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;
  
          default:
            htmlBuilder();
        }
      })
    } 

      function addEngineer() {
          inquirer.prompt([
            
            {
              type: "input",
              name: "engineerName",
              message: "What is the engineer's name?"
            },
      
            {
              type: "input",
              name: "engineerId",
              message: "What is the engineer's employee ID number?" 
            },
      
            {
              type: "input",
              name: "engineerEmail",
              message: "What is the engineer's email address?"
            },
      
            {
              type: "input",
              name: "engineerGithub",
              message: "What is the engineer's GitHub username?"
            }
      
          ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamArray.push(engineer);
            createTeam();
          });
      
        }
        function addIntern() {
            inquirer.prompt([
              
              {
                type: "input",
                name: "internName",
                message: "What is the intern's name?"
              },
        
              {
                type: "input",
                name: "internId",
                message: "What is the intern's employee ID number?" 
              },
        
              {
                type: "input",
                name: "internEmail",
                message: "What is the intern's email address?"
              },
        
              {
                type: "input",
                name: "internSchool",
                message: "What school does the intern attend?"
              }
        
            ]).then(answers => {
              const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
              teamArray.push(intern);
              createTeam();
            });
        
          }
    
      
      }
      
      startApp();

