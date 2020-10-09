import java.io.*;
import java.lang.reflect.Array;
import java.util.ArrayList;

public class MergeCSVs {

    // Loads a new CSV containing all of the coordinates
    public ArrayList<String> loadNewCsv(String filepath) throws IOException {
        BufferedReader csvReader = new BufferedReader(new FileReader(filepath));
        String row = "";
        String input;
        ArrayList<String> tempArray = new ArrayList<String>();
        // Gets length of csv
        while((input = csvReader.readLine()) != null){
            String[] inputSplit = input.split(",");
            if(inputSplit[0].contains("latitude")){ } else { tempArray.add(input); }
        }

        return tempArray;
    }

    public void mergeAddresses(ArrayList<String> latlongs) throws IOException {
        // Creates list A
        ArrayList<String> firstArray = new ArrayList<String>();
        BufferedReader csvReader = new BufferedReader(new FileReader("county49.csv"));
        String rowA = "";
        while ((rowA = csvReader.readLine()) != null) {
            firstArray.add(rowA);
        }
        // Creates list B
        ArrayList<String> secondArray = new ArrayList<String>();
        for(String content : latlongs){
            secondArray.add(content);
        }

        // Creates list C
        ArrayList<String> thirdArray = new ArrayList<String>();
        // Merges lists
        for(String itemA : firstArray){
            for(String itemB : secondArray){
                String[] itemASplit = itemA.split(",");
                String[] itemBSplit = itemB.split(",");
                if(itemASplit[0].contains(itemBSplit[2].replace("\"",""))){
                    thirdArray.add(
                      itemBSplit[0] + "," + itemBSplit[1] + "," +
                              itemASplit[0] + "," +
                              itemASplit[1] + "," +
                              itemASplit[2].substring(0,5) + ","+
                              itemASplit[3] + "," +
                              itemASplit[4] + "," +
                              itemASplit[5] + "," +
                              itemASplit[6] + "," +
                              itemASplit[7] + "," +
                              itemASplit[8] + "," +
                              itemASplit[9] + "," +
                              itemASplit[10].substring(0,5)
                    );
                }
            }
        }
        FileWriter csvWriter = new FileWriter("county49merged.csv");

        // Set headers
        csvWriter.append("Latitude,");
        csvWriter.append("Longitude,");
        csvWriter.append("Address,"); // 0
        csvWriter.append("City,"); // 1
        csvWriter.append("ZIP Code,"); // 2
        csvWriter.append("Township,"); //3
        csvWriter.append("Property Class Code,"); //4
        csvWriter.append("Neighborhood ID,"); //5
        csvWriter.append("Date Last Transferred,"); //6
        csvWriter.append("Sidewalks,"); //7
        csvWriter.append("Total Adj Value,"); //8
        csvWriter.append("Owner State,"); //9
        csvWriter.append("Owner ZIP Code"); //10
        csvWriter.append("\n");
        csvWriter.flush();

        for(String item : thirdArray){
            csvWriter.append(item + "\n");
        }
        csvWriter.flush();
        csvWriter.close();
        }

    public void createLatLonCSV(String filepath) throws IOException {
        String filename = ("broadrippleoutput.csv");
        BufferedReader csvReader = new BufferedReader(new FileReader(filepath));
        FileWriter csvWriter = new FileWriter(filename);

        csvWriter.append("latitude,longitude,name,desc,color,source,precision");
        String row = "";
        while((row = csvReader.readLine()) != null) {
            if (row.contains("latitude")) {
            } else {
                String currentRow = row.replace("\"", "");
                csvWriter.append(currentRow + "\n");
            }
        }
        csvWriter.flush();
        csvWriter.close();
    }
}
