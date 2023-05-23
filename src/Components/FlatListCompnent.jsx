import React, { useEffect } from "react";
import CompanyCard from "./CompanyCard";
import { FlatList } from "react-native";

const FlatListCompnent = ({
  data,
  setResultVisable,
  setContactHistoryVisable,
  setSelectedCompany,
  today,
  callTodayCompanyNames,
  emailShoulBeSend,
}) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item, index }) => (
        <CompanyCard
          index={index}
          item={item}
          setSelectedCompany={setSelectedCompany}
          setContactHistoryVisable={setContactHistoryVisable}
          setResultVisable={setResultVisable}
          today={today}
          callTodayCompanyNames={callTodayCompanyNames}
          emailShoulBeSend={emailShoulBeSend}
        />
      )}
      maxToRenderPerBatch={6}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default FlatListCompnent;
