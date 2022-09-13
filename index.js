// modules
const inquirer = require('inquirer');
const fs = require('fs');

//generate html page

const generateHTML = ({ managerName, managerID, managerEmail, officeNumber, eName1, eID1, eEmail1,
    eGithub1, eName2, eID2, eEmail2, eGithub2, inName, inID, inEmail, inSchool }) =>
    `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Roster</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" />
    </head>
    
    <body>
        <header class="jumbotron jumbotron-fluid bg-dark text-light text-center">
            <h1>My Team</h1>
        </header>
        <main class="container col-5">
            <div class="card" style="width: 50rem;">
                <div class="card-header bg-dark text-light">
                    Manager: ${managerName}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID:${managerID}</li>
                    <li class="list-group-item">Email:${managerEmail}</li>
                    <li class="list-group-item">Ofice number:${officeNumber}</li>
                </ul>
            </div>
            <br>
            <div class="card" style="width: 50rem;">
                <div class="card-header bg-dark text-light">
                    Engineer: ${eName1}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID:${eID1}</li>
                    <li class="list-group-item">Email:${eEmail1}</li>
                    <li class="list-group-item">Github:${eGithub1}</li>
                </ul>
            </div>
            <br>
            <div class="card" style="width: 50rem;">
                <div class="card-header bg-dark text-light">
                    Engineer: ${eName2}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID:${eID2}</li>
                    <li class="list-group-item">Email:${eEmail2}</li>
                    <li class="list-group-item">Github:${eGithub2}</li>
                </ul>
            </div>
            <br>
            <div class="card" style="width: 50rem;">
                <div class="card-header bg-dark text-light">
                    Intern: ${inName}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID:${inID}</li>
                    <li class="list-group-item">Email:${inEmail}</li>
                    <li class="list-group-item">School:${inSchool}</li>
                </ul>
            </div>
            <br>
        </main>
    </body>
    
    </html>`

//generate question

inquirer
    .prompt([
        {
            type: 'input',
            message: `What is your Manager's name?`,
            name: 'managerName',
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter a valid name"
                }
            }
        },
        {
            type: 'input',
            message: 'Enter Manager ID number',
            name: 'managerID',
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter a valid ID"
                }
            }
        },
        {
            type: 'input',
            message: 'Enter Manager Email',
            name: 'managerEmail',
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter valid email"
                }
            }
        },
        {
            type: 'input',
            message: 'Enter Mnager Office Number',
            name: 'officeNumber',
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter valid office number"
                }
            }
        },
        {
            type: 'input',
            message: 'Enter Engineer Name',
            name: 'eName1',
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter valid name"
                }
            }
        },
        {
            type: 'input',
            message: 'Enter Engineer ID',
            name: 'eID1',
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter valid ID"
                }
            }
        },
        {
            type: 'input',
            message: 'Enter Engineer Email',
            name: 'eEmail1',
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter a valid email"
                }
            }
        },
        {
            type: 'input',
            message: 'Enter Engineer Github',
            name: 'eGithub1',
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter a valid github"
                }
            }
        },
        {
            type: 'input',
            message: 'Enter Engineer Name',
            name: 'eName2',
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter valid name"
                }
            }
        },
        {
            type: 'input',
            message: 'Enter Engineer ID',
            name: 'eID2',
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter valid ID"
                }
            }
        },
        {
            type: 'input',
            message: 'Enter Engineer Email',
            name: 'eEmail2',
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter a valid email"
                }
            }
        },
        {
            type: 'input',
            message: 'Enter Engineer Github',
            name: 'eGithub2',
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter a valid github"
                }
            }
        },
        {
            type: 'input',
            message: 'Enter Intern Name',
            name: 'inName',
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter a valid name"
                }
            }
        },
        {
            type: 'input',
            message: 'Enter Intern ID',
            name: 'inID',
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter a valid ID"
                }
            }
        },
        {
            type: 'input',
            message: 'Enter Intern email',
            name: 'inEmail',
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter a valid email"
                }
            }
        },
        {
            type: 'input',
            message: 'Enter Intern School',
            name: 'inSchool',
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter a valid school"
                }
            }
        },


    ])
    .then((answers) => {
        const HTMLPageContent = generateHTML(answers);
        // Write file
        fs.writeFile('index.html', HTMLPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created HTML!')
        );
    });