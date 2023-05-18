import { View, Text, FlatList, ScrollView } from "react-native";

import React from "react";
import { useFetch } from "../hoocs";
import { Button, FAB, Header, Icon } from "@rneui/base";
import FilterDialog from "../Components/FilterComponent";
import AddResult from "../Components/AddResult";
import ContactHistory from "../Components/ContactHistory";
import { TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native";

const Companies = ({ server, setServer }) => {
  //get all countries
  const [countrydata, countryerror, countryloading] = useFetch(
    server + "/mobile/country"
  );

  // fetch the  results
  const [resultsdata, resultserror, resultsloading] = useFetch(
    server + "/mobile/results"
  );

  // my initial states for the filters
  const [filters, setFilters] = React.useState({
    user: 2,
    country: "all",
    number: 30,
  });

  // fetch the companies
  const [data, error, loading] = useFetch(
    server + `/mobile/${filters.user}/${filters.country}/${filters.number}`
  );

  // handle the dialogs
  const [visable, setVisable] = React.useState(false);
  const [resultvisable, setResultVisable] = React.useState(false);
  const [contactHistoryVisable, setContactHistoryVisable] =
    React.useState(false);

  // handle selcted Company

  const [selectedCompany, setSelectedCompany] = React.useState(null);

  return (
    <View className="flex-1">
      <Header
        containerStyle={{
          alignContent: "center",
          backgroundColor: "#1E90FF",
          justifyContent: "center",
        }}
        placement="left"
        stat
        leftComponent={
          <View className="flex flex-row items-center space-x-2 p-2 shadow-2xl">
            {/* go to set Server Link */}
            <TouchableOpacity onPress={() => setServer(null)}>
              <Icon size={30} color="white" name="business" />
            </TouchableOpacity>

            <Text className="text-white text-2xl">Company List</Text>
          </View>
        }
      />

      {/* Dialog for Fitering */}
      <FilterDialog
        countrydata={countrydata}
        filters={filters}
        setFilters={setFilters}
        visable={visable}
        setVisable={setVisable}
      />

      {/* Company Dialog */}
      <AddResult
        resultsdata={resultsdata}
        company={selectedCompany}
        visable={resultvisable}
        setVisable={setResultVisable}
      />

      <ContactHistory
        visable={contactHistoryVisable}
        setVisable={setContactHistoryVisable}
        company={selectedCompany}
      />

      {loading ? (
        <ActivityIndicator size={50} />
      ) : (
        <View className="flex flex-[0.95]">
          {/* Error Handling */}
          {error && <Text>Error: can't fetch data </Text>}
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <View className="flex flex-col border p-5 m-3 rounded-3xl space-y-1">
                <Text className="text-xl font-bold">{item?.name}</Text>
                <View className="flex flex-row">
                  <Icon name="call" size={25} />
                  <Text className="text-md mb-3">{item?.phone}</Text>
                </View>

                <View className="flex flex-row justify-evenly">
                  <Button
                    radius={"lg"}
                    title="Contact History"
                    onPress={() => {
                      setSelectedCompany(item);
                      setContactHistoryVisable(true);
                    }}
                  />

                  <Button
                    radius={"lg"}
                    title="Add Result"
                    onPress={() => {
                      setSelectedCompany(item);
                      setResultVisable(true);
                    }}
                  />
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      )}

      {/* Float Button for dialog */}

      <FAB
        onPress={() => setVisable(true)}
        placement="right"
        title="Filter"
        icon={{ name: "tune", color: "white", size: 30 }}
      />
    </View>
  );
};

export default Companies;
