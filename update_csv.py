import pandas

df = pandas.read_csv("county49Merged.csv")

df = df.rename(columns=({"ZIP Code": "zip_code", "Property Class Code": "property_class_code", "Neighborhood ID": "neighborhood_id",
                         "Date Last Transferred": "date_transferred", "Total Adj Value": "total_property_value", "Owner State": "owner_state", "Owner ZIP Code": "owner_zip"}))

# print(df)

df.to_csv("new_names.csv", index=False)
