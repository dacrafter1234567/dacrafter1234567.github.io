import java.util.ArrayList;

public class ApartmentList {
    private ArrayList<Apartment> apartments;
    private SortBehavior sortBehavior;

    public ApartmentList() {
        apartments = new ArrayList<>();
        sortBehavior = new BubbleSort(); // Default to BubbleSort
    }

    public void add(String address, int numBedrooms, int numBathrooms, double price) {
        apartments.add(new Apartment(address, numBedrooms, numBathrooms, price));
    }

    public void setSortBehavior(SortBehavior sortBehavior) {
        this.sortBehavior = sortBehavior;
    }

    public ArrayList<Apartment> getSortedList() {
        return sortBehavior.sort(apartments);
    }
}
