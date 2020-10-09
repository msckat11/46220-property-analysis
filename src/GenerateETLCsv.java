import java.io.*;
import java.util.ArrayList;

// Generates a CSV file containing all of the information for every property in a specific county.
public class GenerateETLCsv {

    // Creates a CSV from the Filepath for County 49 (Marion)
    public static void createCSV(String address) throws IOException, NumberFormatException {
        int cn = 49;
            String filename = ("county" + cn + ".csv");
            BufferedReader csvReader = new BufferedReader(new FileReader(address));
            FileWriter csvWriter = new FileWriter(filename);
            // Create CSV Headers
            csvWriter.append("Address,");
            csvWriter.append("City,");
            csvWriter.append("ZIP Code,");
            csvWriter.append("Township,");
            csvWriter.append("Property Class Code,");
            csvWriter.append("Neighborhood ID,");
            csvWriter.append("Date Last Transferred,");
            csvWriter.append("Sidewalks,");
            csvWriter.append("Total Adj Value,");
            csvWriter.append("Owner State,");
            csvWriter.append("Owner ZIP Code");
            csvWriter.append("\n");
            csvWriter.flush();
            // 64 Headers, Index 0 -> 63

            // Create CSV Lines
            String row = "";
            while ((row = csvReader.readLine()) != null) {
                    String currentRow = row.replace("\"", "");
                    String[] x = currentRow.split(",");
                    String y = x[0];
                    if(y.contentEquals(Integer.toString(cn)) && x[22].contains("USA") && x[10].contains("46220")) {
                        csvWriter.append(x[8] + ","); // Address
                        csvWriter.append(x[9] + ","); // City
                        csvWriter.append(x[10] + ","); // Zip Code
                        csvWriter.append(x[3] + ","); // Township
                        csvWriter.append(x[11] + ","); // Property Class Code
                        csvWriter.append(x[12] + ","); // Neighborhood ID
                        csvWriter.append(x[23] + ","); // Date last transferred
                        csvWriter.append(x[34] + ","); // Sidewalks
                        csvWriter.append(x[42] + ","); // Total Adjusted Property Value
                        csvWriter.append(x[20] + ","); // Owner State
                        csvWriter.append(x[21] + ",") ; // Owner ZIP Code
                        csvWriter.append("\n");
                        }
                        csvWriter.flush();
                    }
            csvWriter.close();
    }

    public static void main(String[] args) throws IOException {
        // Filepath for the Address List
        String addressList = "./resources/addresslist.txt";
        String latLongList = "./resources/latlonglist.txt";

        //createCSV(addressList);
        MergeCSVs csvMerger = new MergeCSVs();
        ArrayList<String> latlonArray = csvMerger.loadNewCsv(latLongList);
        csvMerger.mergeAddresses(latlonArray);
    }
}