import psycopg2
import json as js

def lambda_handler(event,handler):
    
    conn = psycopg2.connect(dbname = 'properties',host='tmarlett-bc-properties.cfndam6vn2fk.us-east-2.redshift.amazonaws.com',port='5439',user='tmarlett',password='5309Tnj!')
    cur = conn.cursor()
    query = "SELECT * FROM properties"
    cur.execute(query)
    data = cur.fetchall()
    addressList = []
    for row in data:
        tlist = list(row)
        tlistbuild = []
        for x in row:
            tlistbuild.append(x.replace("\\",""))
        tlistfinal = tuple(tlistbuild)
        addressList.append(tlistfinal)
    return js.dumps(addressList)
