function renderManagerInfo(manager, managerId, managerEmail, office) {

    if (!manager) {

        return '';

    }

    return `

    <div class="column is-4 is-flex is-justify-content-space-around">

        <div class="card pb-3">

            <div class="card-header bg-primary is-flex-wrap-wrap">

             <h1 class="column is-full title is-size-2 has-text-white">

                ${manager}

            </h1>

            <h2 class="column is-full subtitle is-size-3 has-text-white">

                Manager

            </h2>
            
        </div>

        <div class="card-content m-5 p-0 is-flex-wrap-wrap">
            

            <div id="info" class="column">
            
                ID: ${managerId}
            
            </div>

            <div id="info" class="column">

                Email:
            
                <a href="mailto:${managerEmail}">${managerEmail}</a>
            
            </div>

            <div id="info-last" class="column">
            
                Office Number: ${office}
            
            </div>

        </div>

    </div>


    
    `;

}



function renderIntern(employeeRole, intern, internId, internEmail, school) {


    if (!intern) {

        return '';

    }

    return `
    
    <div class="column is-4 is-flex is-justify-content-space-around">

    <div class="card pb-3">

        <div class="card-header bg-primary is-flex-wrap-wrap">

         <h1 class="column is-full title is-size-2 has-text-white">

            ${intern}

        </h1>

        <h2 class="column is-full subtitle is-size-3 has-text-white">

            ${employeeRole}

        </h2>
        
    </div>

    <div class="card-content m-5 p-0 is-flex-wrap-wrap">
        

        <div id="info" class="column">
        
            ID: ${internId}
        
        </div>

        <div id="info" class="column">

            Email:
        
            <a href="mailto:${internEmail}">${internEmail}</a>
        
        </div>

        <div id="info-last" class="column">
        
            School: ${school}
        
        </div>

    </div>

</div>

`;


}

function renderEngineer(engineer, engineerEmail, engineerId, github, employeeRole) {

    if (!engineer) {

        return '';

    } 

    return `
    
    <div class="column is-4 is-flex is-justify-content-space-around">

    <div class="card pb-3">

        <div class="card-header bg-primary is-flex-wrap-wrap">

         <h1 class="column is-full title is-size-2 has-text-white">

            ${engineer}

        </h1>

        <h2 class="column is-full subtitle is-size-3 has-text-white">

            ${employeeRole}

        </h2>
        
    </div>

    <div class="card-content m-5 p-0 is-flex-wrap-wrap">
        

        <div id="info" class="column">
        
            ID: ${engineerId}
        
        </div>

        <div id="info" class="column">

            Email:
        
            <a href="mailto:${engineerEmail}">${engineerEmail}</a>
        
        </div>

        <div id="info-last" class="column">
        
            School: ${github}
        
        </div>

    </div>

</div>

`;
}







module.exports = templateData => {

    const { manager,

        managerId,

        managerEmail,

        office,

        employeeRole,

        engineer,

        engineerId,

        engineerEmail,

        github,

        intern,

        internId,

        internEmail,

        school

    } = templateData;

    return `
    
    <!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Team Prrofile</title>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css">

    <link rel="stylesheet" href="../src/styles.css">

</head>

<body>

    <section class="hero is-danger">

        <div class="hero-body">

            <h1 class="title is-1 has-text-centered">

                My Team

            </h1>

        </div>

    </section>

    <div class="columns mt-5 is-flex-wrap-wrap">

      ${renderManagerInfo(manager, managerId, managerEmail, office)}

      ${renderIntern(employeeRole, intern, internId, internEmail, school)}

      ${renderEngineer(employeeRole, engineer, engineerEmail, engineerId, github)} 
      
    </div>
    
</body>

</html>

`;

}