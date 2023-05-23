import { View, Text, FlatList, ScrollView } from "react-native";

import React, { useEffect } from "react";
import { useFetch, useFetchToday } from "../hoocs";
import { Badge, Button, FAB, Header, Icon, SearchBar } from "@rneui/base";
import FilterDialog from "../Components/FilterComponent";
import AddResult from "../Components/AddResult";
import ContactHistory from "../Components/ContactHistory";
import { TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native";
import FlatListCompnent from "../Components/FlatListCompnent";
import TodayDialog from "../Components/TodayDialog";

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

  // fetch the todays calls
  const [todaydata, todayerror, todayloading, callTodayCompanyNames , emailShoulBeSend, refreshtoday] = useFetchToday(
    server + "/mobile/today"
  );

  // fetch the companies
  const [data, error, loading] = useFetch(
    server + `/mobile/${filters.user}/${filters.country}/${filters.number}`
  );

  // update the companies
  const [companies, setCompanies] = React.useState(data);

  // update the todays calls
  const [today, setToday] = React.useState(todaydata);

  // rerender

  useEffect(() => {
    setToday(todaydata);
    setCompanies(data);
  }, [data, todaydata]);

  // handle the dialogs
  const [visable, setVisable] = React.useState(false);

  const [resultvisable, setResultVisable] = React.useState(false);
  // add to today when add result
  const addToToday = (company) => {
    setToday([company, ...today]);
  };

  const [contactHistoryVisable, setContactHistoryVisable] =
    React.useState(false);

  const [todayVisable, settodayVisable] = React.useState(false);

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
        rightComponent={
          <TouchableOpacity
            className="relative mt-[0.5vh] mr-[7vh] p-[0.5vh]"
            onPress={() => {
              settodayVisable(true);
              refreshtoday()
            }}
          >
            <Icon size={30} color="white" name="ring-volume" />
            <Badge
              value={today?.length}
              status="success"
              size="large"
              containerStyle={{
                padding: 1,
                position: "absolute",
                top: -5,
                left: 22,
              }}
            />
          </TouchableOpacity>
        }
      />
      <SearchBar
        lightTheme
        round
        platform="android"
        inputContainerStyle={{ backgroundColor: "white" }}
        containerStyle={{ backgroundColor: "#1E90FF" }}
        placeholder="Search in Filtered Companies"
        onChangeText={(text) =>
          setCompanies(
            data.filter((item) =>
              item.name.toLowerCase().includes(text.toLowerCase())
            )
          )
        }
      />

      {/* Dialog for todays calls */}

      <TodayDialog
        today={today}
        error={todayerror}
        loading={todayloading}
        visable={todayVisable}
        setVisable={settodayVisable}
      />

      {/* Dialog for Fitering */}
      <FilterDialog
        countrydata={countrydata}
        filters={filters}
        setFilters={setFilters}
        visable={visable}
        setVisable={setVisable}
      />

      {/* Result Dialog */}
      <AddResult
        resultsdata={resultsdata}
        company={selectedCompany}
        visable={resultvisable}
        setVisable={setResultVisable}
        addToToday={addToToday}
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
          {error?.response?.status !== 404 && (
            <Text>{error?.response?.status}</Text>
          )}
          {data.length === 0 && <Text>No Company Found</Text>}
          <FlatListCompnent
            data={companies}
            setResultVisable={setResultVisable}
            setContactHistoryVisable={setContactHistoryVisable}
            setSelectedCompany={setSelectedCompany}
            today={today}
            callTodayCompanyNames={callTodayCompanyNames}
            emailShoulBeSend={emailShoulBeSend}
          />
        </View>
      )}

      {/* Float Button for dialog */}

      <FAB
        color="#F3A953"
        onPress={() => setVisable(true)}
        placement="right"
        title="Filter"
        icon={{ name: "tune", color: "white", size: 30 }}
      />

      {/* Animated Button  */}
    </View>
  );
};

export default Companies;
