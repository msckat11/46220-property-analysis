import pandas as pd

data = pd.read_csv("county49Merged.csv")

df = pd.DataFrame(data)

# convert column from string to integer
df[["propertyclasscode"]] = df[[
    "propertyclasscode"]].apply(pd.to_numeric)

new_df = df.rename(columns=({"ZIP Code": "zip_code", "Property Class Code": "property_class_code", "Neighborhood ID": "neighborhood_id",
                             "Date Last Transferred": "date_transferred", "Total Adj Value": "total_property_value", "Owner State": "owner_state", "Owner ZIP Code": "owner_zip"}))

print(new_df.propertyclasscode.unique())

new_df.to_csv("new_names.csv", index=False)
