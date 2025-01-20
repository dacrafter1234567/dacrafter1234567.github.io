public class Apartment implements Comparable<Apartment> {
    private String address;
    private int numBedrooms;
    private int numBathrooms;
    private double price;

    // Constructor
    public Apartment(String address, int numBedrooms, int numBathrooms, double price) {
        this.address = address;
        this.numBedrooms = numBedrooms;
        this.numBathrooms = numBathrooms;
        this.price = price;
    }

    // Compare method to implement Comparable for sorting based on price
    @Override
    public int compareTo(Apartment apartment) {
        if (this.price < apartment.price) {
            return 1; // Higher price first
        } else if (this.price > apartment.price) {
            return -1; // Lower price comes after
        }
        return 0; // Equal prices
    }

    // String representation of Apartment
    public String toString() {
        return "$" + String.format("%.2f", price) + " " + address + "\n" +
                numBedrooms + " bedroom" + getPlural(numBedrooms) + " " +
                numBathrooms + " bathroom" + getPlural(numBathrooms) + " \n";
    }

    // Helper method to get plural form for bedrooms and bathrooms
    private String getPlural(int num) {
        return (num == 1) ? "" : "s";
    }
}
