const generateReadMe = (responses) =>

`# ${responses.headline} 

## Table of Contents 
            
<a href="#description"> 1. Description</a>  

<a href="#install"> 2. Installation </a>

<a href="#usage"> 4. Usage </a></li>

<a href="#contributing"> 4. Contributing </a>

<a href="#test"> 5. Testing </a>

<a href="#license"> 6. License </a>
        
    


## Description <h1 id='description'> </h1>
          
    - ${responses.description}
    
## Installation <h1 id='install'></h1>
          
    - ${responses.install}
    
## Usage <h1 id='usage'> </h1>
          
    - ${responses.usage}

## Description <h1 id='description'></h1>
          
    - ${responses.description}
    
## Installation <h1 id='install'></h1>
          
    - ${responses.install}
    
## Usage <h1 id='usage'></h1>
          
    - ${responses.usage}
    
## Contributing <h1 id='contributing'></h1>
          
    - ${responses.email}
          
    - ${responses.github}
          
    - ${responses.linked}
    
## Testing <h1 id='test'></h1>
         
    - ${responses.testing}
         
    - ${responses.questions}

## License
    -${responses.license}
`
module.exports = generateReadMe;