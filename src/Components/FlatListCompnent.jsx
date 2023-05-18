import { View, Text } from "react-native";
import React from "react";
import CompanyCard from "./CompanyCard";
import { FlatList } from "react-native";

const FlatListCompnent = ({ data ,setResultVisable, setContactHistoryVisable,setSelectedCompany}) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <CompanyCard
          item={item}
          setSelectedCompany={setSelectedCompany}
          setContactHistoryVisable={setContactHistoryVisable}
          setResultVisable={setResultVisable}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default FlatListCompnent;
