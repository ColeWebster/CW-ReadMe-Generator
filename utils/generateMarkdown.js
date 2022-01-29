const generateReadMe = ({ headline, license, description, liveDeployment, install, usage, email, github, linked, testing, questions }) => 

`# ${headline} 

${createBadge(license)}

## Table of Contents 
            
<a href="#description"> 1. Description</a>  

<a href="#install"> 2. Installation </a>

<a href="#usage"> 4. Usage </a></li>

<a href="#contributing"> 4. Contributing </a>

<a href="#test"> 5. Testing </a>

## Description <h1 id='description'> </h1>
          
    - ${description}

    - ${liveDeployment}
    
## Installation <h1 id='install'></h1>
          
    - ${install}
    
## Usage <h1 id='usage'> </h1>
          
    - ${usage}


    
## Contributing <h1 id='contributing'></h1>
          
    - ${email}
          
    - ${github}
          
    - ${linked}
    
## Testing <h1 id='test'></h1>
         
    - ${testing}
         
    - ${questions}`

createBadge = (license) => {
    let icon;
    
    switch(license) {
    case 'Apache 2.0' :
        icon = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        break;
    case 'Boost 1.0' :
        icon = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
        break;
    case 'BSD' : 
        icon = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
        break;
    case 'Creative Commons 4.0' :
        icon = '[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)';
        break;
    default: 
        break;
  }

  return icon;

}


module.exports.generateReadMe = generateReadMe