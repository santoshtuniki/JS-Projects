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
