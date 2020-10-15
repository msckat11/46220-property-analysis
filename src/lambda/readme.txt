The file included in this folder is the AWS Lambda function used in the REST API.

The REST API is hosted on AWS API Gateway in conjunction with AWS Lambda and AWS Redshift.
A SQLite file was not generated for the purpose of this project, but the data used to generate the JSON is hosted in the Redshift SQL server.

A "SELECT *" clause is used to pull all of the data from the Redshift server.
To view this JSON data directly, go to the following URL:

https://fzykzc9iqf.execute-api.us-east-2.amazonaws.com/Test01