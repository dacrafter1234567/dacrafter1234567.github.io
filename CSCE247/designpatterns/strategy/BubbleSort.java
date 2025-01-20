import java.util.ArrayList;

public class BubbleSort implements SortBehavior {
    @Override
    public ArrayList<Apartment> sort(ArrayList<Apartment> apartments) {
        ArrayList<Apartment> sortedList = new ArrayList<>(apartments);
        int n = sortedList.size();
        
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - 1 - i; j++) {
                if (sortedList.get(j).compareTo(sortedList.get(j + 1)) > 0) {
                    // Swap the apartments
                    Apartment temp = sortedList.get(j);
                    sortedList.set(j, sortedList.get(j + 1));
                    sortedList.set(j + 1, temp);
                }
            }
        }
        return sortedList;
    }
}
