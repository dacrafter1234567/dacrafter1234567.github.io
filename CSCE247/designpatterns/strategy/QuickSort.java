import java.util.ArrayList;

public class QuickSort implements SortBehavior {
    @Override
    public ArrayList<Apartment> sort(ArrayList<Apartment> apartments) {
        quickSort(apartments, 0, apartments.size() - 1);
        return apartments;
    }

    private void quickSort(ArrayList<Apartment> apartments, int low, int high) {
        if (low < high) {
            int pivotIndex = partition(apartments, low, high);
            quickSort(apartments, low, pivotIndex - 1);  // Left side
            quickSort(apartments, pivotIndex + 1, high); // Right side
        }
    }

    private int partition(ArrayList<Apartment> apartments, int low, int high) {
        Apartment pivot = apartments.get(high);  // Pivot is the last element
        int i = low - 1; // Index of smaller element

        // Rearrange the apartments based on the price
        for (int j = low; j < high; j++) {
            // We compare apartments by price in ascending order
            if (apartments.get(j).compareTo(pivot) > 0) { // Swap if price > pivot
                i++;
                swap(apartments, i, j);
            }
        }

        // Move the pivot to the correct position
        swap(apartments, i + 1, high);
        return i + 1;
    }

    private void swap(ArrayList<Apartment> apartments, int i, int j) {
        Apartment temp = apartments.get(i);
        apartments.set(i, apartments.get(j));
        apartments.set(j, temp);
    }
}
