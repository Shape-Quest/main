Welcome to Shape Quest

# JavaScript


DEPENDENCIES 

npm init
npm install node
npm install react react-dom express
npm install webpack webpack-cli webpack-dev-server --save-dev
npm install babel-loader @babel/core @babel/preset-env @babel/preset-react --save-dev
npm install sass-loader css-loader style-loader node-sass --save-dev
npm install concurrently --save-dev
npm install html-webpack-plugin --save-dev
npm install url-loader --save-dev

NEW DEPENDENCIES

SET UP ENVIRONMENT & BACKEND

[X]Sync Git branch and set initial commit
[X]install Node.js
[X]Create a package.json file
    - 'npm init'
[X]Install express
    - 'npm install express'
[x]Set up server
    -Create server directory, create server.js & move into server directory
        - 'mkdir server' 
        - 'touch
        - 'mv server.js server/'
[X] create basic server in server.js
[X]Configure Webpack - Babel
[X]Succesfully run various environments
    [x]Test Env - npm run test
    [x]Dev Env - npm run start
    [x]Build Env - npm run build
[X]Database
    [x]Create Atlas Cloud
        [x]DATA TYPES USED
        [x]Catalog / Inventory data
        [x]Customer / user profile data
        [x]User activity / messaging data
[x]Build root component for React
[x]Build form component for high-scores
[x]Add basic css
[x]build gif component
[x]get gif to render when we submit button


STRUCTURED DIRECTORY

-------------------------------------------------------------
/Javacrypt/
|-- build/                          //Transpiled and bundled for Production
|   |-- bundle.js
|   |-- bundle.js.LICENSE.txt
|   |-- index.html  
|
|-- node_modules/                   // NPM Dependencies, modules and libraries
|
|-- server/
|   |-- server.js                   // Main server file
|   |-- controllers/     
|   |--   |-- highScoresController.js          
|   |-- models/                                 // Mongoose models
|   |--   |-- highScores.js         
|   |-- routes/                     // Express route handlers
|   |--   |-- api.js                
|-- src/
|   |-- js/              
|   |-- index.html      
|   |-- index.js                    // Entry point for React
|   |-- components/                 // React components                                         ??    
|   |-- assets/                     // Game assets: images, sounds, etc.                        ??
|
|-- .babelrc                        //babel
|-- LICENSE
|-- package-lock.json
|-- package.json
|-- README.md
|-- webpack.config.js
|-- .gitignore  (HIDDEN)    
-------------------------------------------------------------


RESOURCES

3d Modeling - https://threejs.org/
