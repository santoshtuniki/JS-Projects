#### NodeJs Express JavaScript Application

##### Validate Input. Prevent HTTP Parameter Pollution (HPP)

    app.use(hpp())

##### morgan - http request logger

    if (process.env.NODE_ENV !== 'production') {
        app.use(morgan('dev'));
    }

##### helmet - secure express apps
    
    app.use(helmet());

##### express json - parse json data from body 
    
    app.use(express.json());

##### express json - parse json data from  url
    
    app.use(express.urlencoded({ extended: true }));

##### express-mongo-sanitize - sanitize user requests
    
    app.use(mongoSanitize());

##### cookie-parser - Enable cookie parser
    
    app.use(cookieParser());

##### compression - Compress response body, gzip
    
    app.use(compression());

##### express-fileupload - Access uploaded files using req.files
    
    app.use(fileUpload({ useTempFiles: true }));


--------

### VSCode Extensions

##### Remotely browse and edit any GitHub repository

    GitHub Repositories

##### Supercharge Git within VS Code — Visualize code authorship at a glance via Git blame annotations and CodeLens, seamlessly navigate and explore Git repositor

    GitLens — Git supercharged

##### Material Design Icons for Visual Studio Code

    Material Icon Theme

##### Launch a development local Server with live reload feature for static & dynamic pages

    Live Server

##### Auto rename paired HTML/XML tag
    
    Auto Rename Tag

##### Extensions for React, React-Native and Redux in JS/TS with ES7+ syntax. Customizable. Built-in integration with prettier.

    ES7+ React/Redux/React-Native snippets

##### Code snippets for JavaScript in ES6 syntax

    JavaScript (ES6) code snippets
