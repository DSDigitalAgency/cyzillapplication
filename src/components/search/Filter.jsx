import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";
import { Picker } from "@react-native-picker/picker";

const Filter = ({ onSelectFilter }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectDetailsOff, setDetailsOff] = useState("");
  const [selectedBed, setSelectedBed] = useState("");
  const [selectedBath, setSelectedBath] = useState("Any");
  const [selectedPropertyType, setSelectedPropertyType] = useState("Any");
  const [selectedMinPrice, setSelectedMinPrice] = useState("Any");
  const [selectedMaxPrice, setSelectedMaxPrice] = useState("Any");
  const [selectedsort, setSelectedsort] = useState("Any");
  // Add more state variables for other filters if needed

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleFilterSelection = (filterType) => {
    onSelectFilter(filterType);
    setDetailsOff(filterType);
    console.log("Details Off", filterType);
  };

  const handleBedSelection = (itemValue) => {
    console.log("Selected Bed:", itemValue);
    setSelectedBed(itemValue);
    if (itemValue === "Any") {
      onSelectFilter(""); // Pass an empty string for "Any"
    } else {
      onSelectFilter(itemValue); // Pass the selected value
    }
  };

  const handleBathSelection = (itemValue) => {
    console.log("Selected Bath:", itemValue);
    setSelectedBath(itemValue);
    if (itemValue === "Any") {
      onSelectFilter(""); // Pass an empty string for "Any"
    } else {
      onSelectFilter(itemValue); // Pass the selected value
    }
  };

  // Similar adjustments for other selection handlers

  const handlePropertyTypeSelection = (itemValue) => {
    console.log("Selected PropertyType:", itemValue);
    setSelectedPropertyType(itemValue);
    if (itemValue === "Any") {
      onSelectFilter(""); // Pass an empty string for "Any"
    } else {
      onSelectFilter(itemValue); // Pass the selected value
    }
  };
  const handleMinPriceSelection = (itemValue) => {
    console.log("Selected MinPrice:", itemValue);
    setSelectedMinPrice(itemValue);
    if (itemValue === "Any") {
      onSelectFilter(""); // Pass an empty string for "Any"
    } else {
      onSelectFilter(itemValue); // Pass the selected value
    }
  };
  const handleMaxPriceSelection = (itemValue) => {
    console.log("Selected MaxPrice:", itemValue);
    setSelectedMaxPrice(itemValue);
    if (itemValue === "Any") {
      onSelectFilter(""); // Pass an empty string for "Any"
    } else {
      onSelectFilter(itemValue); // Pass the selected value
    }
  };
  const handlesortSelection = (itemValue) => {
    console.log("Selected sort:", itemValue);
    setSelectedsort(itemValue);
    if (itemValue === "Any") {
      onSelectFilter(""); // Pass an empty string for "Any"
    } else {
      onSelectFilter(itemValue); // Pass the selected value
    }
  };

  return (
    <View style={styles.container}>
      {/* Basic Filters */}
      <TouchableOpacity
        style={styles.filterItem}
        onPress={() => handleFilterSelection("Rent")}
      >
        <Text style={styles.filterText}>Rent</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.filterItem}
        onPress={() => handleFilterSelection("Sell")}
      >
        <Text style={styles.filterText}>Sell</Text>
      </TouchableOpacity>

      {/* More Button */}
      <TouchableOpacity onPress={toggleModal} style={styles.moreButton}>
        <Text style={styles.moreButtonText}>More</Text>
      </TouchableOpacity>

      {/* Additional Filters Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={toggleModal}
            >
              <Text style={styles.modalCloseButtonText}>Close</Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <Text
                style={{
                  marginRight: 10,
                  fontSize: 16,
                }}
              >
                Bed
              </Text>
              <Picker
                selectedValue={selectedBed}
                onValueChange={handleBedSelection}
                style={{
                  flex: 1,
                  height: 50,
                }}
              >
                <Picker.Item label="Any" value="Any" />
                {[...Array(10)].map((_, index) => (
                  <Picker.Item
                    key={index + 1}
                    label={`${index + 1}`}
                    value={`${index + 1}`}
                  />
                ))}
              </Picker>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <Text
                style={{
                  marginRight: 10,
                  fontSize: 16,
                }}
              >
                Bath
              </Text>
              <Picker
                selectedValue={selectedBath}
                onValueChange={handleBathSelection}
                style={{
                  flex: 1,
                  height: 50,
                }}
              >
                <Picker.Item label="Any" value="Any" />
                {[...Array(10)].map((_, index) => (
                  <Picker.Item
                    key={index + 1}
                    label={`${index + 1}`}
                    value={`${index + 1}`}
                  />
                ))}
              </Picker>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <Text
                style={{
                  marginRight: 10,
                  fontSize: 16,
                }}
              >
                Property Type
              </Text>
              <Picker
                selectedValue={selectedPropertyType}
                onValueChange={handlePropertyTypeSelection}
                style={{
                  flex: 1,
                  height: 50,
                }}
              >
                <Picker.Item label="Any" value="Any" />
                <Picker.Item label="Flat/Apartment" value="flat" />
                <Picker.Item
                  label="Residential House"
                  value="residentailhouse"
                />
                <Picker.Item label="Villa" value="Villa" />
                <Picker.Item label="Residential Land" value="residentialland" />
                <Picker.Item label="Penthouse" value="penthouse" />
                <Picker.Item
                  label="Commercial Office Space"
                  value="commercialoffice"
                />
                <Picker.Item label="Commercial Shop" value="commercialshop" />
                <Picker.Item label="Commercial Land" value="commercialland" />
                <Picker.Item label="Warehouse/Godown" value="warehouse" />
                <Picker.Item label="Industrial Land" value="industialland" />
                <Picker.Item
                  label="Industrial Building"
                  value="industrialbuilding"
                />
              </Picker>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <Text
                style={{
                  marginRight: 10,
                  fontSize: 16,
                }}
              >
                Price
              </Text>
              <View>
                <Text
                  style={{
                    marginRight: 10,
                    fontSize: 16,
                  }}
                >
                  Minimum Price
                </Text>
                <Picker
                  selectedValue={selectedMinPrice}
                  onValueChange={handleMinPriceSelection}
                  style={{
                    flex: 1,
                    height: 50,
                  }}
                >
                  <Picker.Item label="Any" value="Any" />
                  <Picker.Item label="1000" value="1000" />
                  <Picker.Item label="5000" value="5000" />
                  <Picker.Item label="10000" value="10000" />
                  <Picker.Item label="50000" value="50000" />
                </Picker>
              </View>
              <View>
                <Text
                  style={{
                    marginRight: 10,
                    fontSize: 16,
                  }}
                >
                  Maximum Price
                </Text>
                <Picker
                  selectedValue={selectedMaxPrice}
                  onValueChange={handleMaxPriceSelection}
                  style={{
                    flex: 1,
                    height: 50,
                  }}
                >
                  <Picker.Item label="100000" value="100000" />
                  <Picker.Item label="200000" value="200000" />
                  <Picker.Item label="500000" value="500000" />
                  <Picker.Item label="1000000" value="1000000" />
                  <Picker.Item label="Any" value="Any" />
                </Picker>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <Text
                style={{
                  marginRight: 10,
                  fontSize: 16,
                }}
              >
                Sort
              </Text>
              <Picker
                selectedValue={selectedsort}
                onValueChange={handlesortSelection}
                style={{
                  flex: 1,
                  height: 50,
                }}
              >
                <Picker.Item label="Low to High" value="asc" />
                <Picker.Item label="High to Low" value="desc" />
              </Picker>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  filterItem: {
    backgroundColor: "#e0e0e0",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },
  filterText: {
    fontSize: 16,
  },
  moreButton: {
    backgroundColor: "#e0e0e0",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginBottom: 10,
  },
  moreButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  modalCloseButton: {
    alignSelf: "flex-end",
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  modalCloseButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  modalFilterItem: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  modalFilterText: {
    fontSize: 16,
  },
});

export default Filter;
