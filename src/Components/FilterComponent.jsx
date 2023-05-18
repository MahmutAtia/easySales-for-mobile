import { View, Text, FlatList } from "react-native";
import React, { useEffect, useMemo } from "react";
import { Dialog, Icon, ListItem, Slider } from "@rneui/base";
import SelectComponent from "./SelectComponent";

const FilterDialog = ({
  countrydata,
  filters,
  setFilters,
  visable,
  setVisable,
}) => {
  // Update the filters and the country data
  useEffect(() => {}, [filters, countrydata]);

  // states
  const [user, setUser] = React.useState(filters?.user);
  const [country, setCountry] = React.useState(filters?.country);
  const [number, setNumber] = React.useState(filters?.number);


  return (
    <Dialog
      overlayStyle={{ backgroundColor: "white", height: "70%", width: "90%" }}
      isVisible={visable}
      onBackdropPress={() => setVisable(false)}
    >
      {/* Dialog Title */}
      <Dialog.Title title="Select Preferences" />

      {/* Dialog Buttons */}

      <Dialog.Actions>
        <Dialog.Button
          title="Set Preferences"
          onPress={() => {
            setFilters({ user, country, number });
            setVisable(false);
          }}
        />
        <Dialog.Button title="CANCEL" onPress={() => setVisable(false)} />
      </Dialog.Actions>

      <View className="flex-1 space-y-5 ">
        {/* User checkbox */}
        <ListItem.Title>Set User</ListItem.Title>

        <ListItem>
          <ListItem.CheckBox
            center
            title="Mahmoud"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={user === 2}
            onPress={() => setUser(2)}
          />
          <ListItem.CheckBox
            center
            title="Chris"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={user === 3}
            onPress={() => setUser(3)}
          />
          <ListItem.CheckBox
            center
            title="Amir"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={user === 4}
            onPress={() => setUser(4)}
          />
        </ListItem>

        {/* Country Select */}
        <ListItem.Title>Set Country</ListItem.Title>
        <SelectComponent
          country={country}
          setCountry={setCountry}
          countrydata={countrydata}
        />

        {/* Number of companies */}
        <ListItem.Title>Set Number Of Companies</ListItem.Title>

        <Slider
          value={number}
          onValueChange={setNumber}
          maximumValue={100}
          minimumValue={0}
          step={5}
          allowTouchTrack
          trackStyle={{ height: 5, backgroundColor: "transparent" }}
          thumbStyle={{ height: 20, width: 20, backgroundColor: "transparent" }}
          thumbProps={{
            children: (
              <Icon
                name="circle"
                type="font-awesome"
                size={20}
                reverse
                containerStyle={{ bottom: 20, right: 20 }}
              />
            ),
          }}
        />
        <Text className="text-lg ">Number Of Companies: {number}</Text>
      </View>
    </Dialog>
  );
};

export default FilterDialog;
