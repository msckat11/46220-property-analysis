# Property Analysis 

Topic: Analysis of 42660 Property Records 

Rationale: Broad Ripple is a growing and developing city and as citizens, we are interested in seeing how the housing market and population are developing. With the information found, we will be able to visualize different aspects of the housing population throughout indianapolis. 

Dataset: Our dataset was procured from the Indiana State Public Records Department via an unnamed text document. After some ETL work the dataset was cleaned up and is uploaded via CSV in this GitHub under the title "county49.csv". More than 750,000 records were eliminated from the CSV to limit the data. 

Possible Topics to Analyze: 

    1. A visualization of the properties that are owned by individuals outside of the state of Indiana.
    2. A heat map that visualizes properties by "date transferred" to determine the turnover rate of homes. 
    3. A visualization for the average property value per neighborhood via the "neighborhood ID"
    4. A color-coded map or chart that demonstrates the properties by "property class code". Each code has a detailed description of the type of property so that we can visualize the type of properties that are distributed throughout Indianapolis. 
    5. A map that shows the townships throughout Indy by using the "township number" data

Visualizations: 
    1. Bar chart- property class codes
    2. Heat Map - Property value 
    3. Map - Color coded by neighborhood 
    4. Bar Chart - Side walks 
    
Dashboard Page - update the page via property code 

Inspiration and Final Design Sketch: We have included images for inspiration as well as a very minimal sketch of what the final dashboard will look like in the images folder within this GitHub repository. 

Group Tasks: 
    - Nathan - Find latitude and longitude for zip codes and powerpoint
    - Tim - Making SQL database and hosting API 
    - Katie - Pick the Javascript library and map color coded by neighborhood
    - Helena - HTML/CSS and bar chart for property class codes
    - Jackson - Create heat map with product value 
    
Requirements: 
    
    1. Include a Python Flask-powered RESTful API, HTML/CSS, JavaScript, and at least one database (SQL, MongoDB, SQLite, etc)
    2. A dashboard page with multiple charts that update from the same data 
    3. Include at least one JS library that we did not cover 
    4. Powered by a dataset with at least 100 records 
    5. Must include some level of user-driven interaction ( menus, dropdowns, textboxes)
    6. Have at least 3 views. 
