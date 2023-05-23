import { View, Text } from "react-native";
import React from "react";
import { Dialog, Icon, ListItem, Slider } from "@rneui/base";
import SelectComponent from "./SelectComponent";

const FilterDialog = ({
  countrydata,
  filters,
  setFilters,
  visable,
  setVisable,
}) => {
  
  const [user, setUser] = React.useState(filters?.user);
  const [country, setCountry] = React.useState(filters?.country);
  const [number, setNumber] = React.useState(filters?.number);

  // Accordion state
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Dialog
      overlayStyle={{ backgroundColor: "white", height: "95%", width: "95%" }}
      isVisible={visable}
      onBackdropPress={() => setVisable(false)}
    >
      {/* Dialog Title */}
      <Dialog.Title
        titleStyle={{ fontStyle: "italic", color: "#146C94", fontSize: 25 }}
        title="Select Preferences"
      />

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

      <View className="flex-1 justify-evenly ">
        {/* User checkbox */}
        <View>
          <Text className="text-lg font-bold text-[#548CA8]">Set User</Text>

          <ListItem>
            <ListItem.CheckBox
              center
              title="Mahmoud"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={user === 2}
              checkedColor="#FDB827"
              onPress={() => setUser(2)}
            />
            <ListItem.CheckBox
              center
              title="Chris"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={user === 3}
              checkedColor="#FDB827"
              onPress={() => setUser(3)}
            />
            <ListItem.CheckBox
              center
              title="Amir"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={user === 4}
              checkedColor="#FDB827"
              onPress={() => setUser(4)}
            />
          </ListItem>
        </View>

        {/* Country Select */}
        <View style={{height: expanded? 300 : 70}}>
          <Text className="text-lg font-bold text-[#548CA8]">Set Country</Text>
          <SelectComponent
            expanded={expanded}
            setExpanded={setExpanded}
            country={country}
            setCountry={setCountry}
            countrydata={countrydata}
          />
        </View>

        {/* Number of companies */}

        <View>
          <Text className="text-lg font-bold text-[#548CA8] mt-[8vh]">
            Set Number Of Companies
          </Text>

          <Slider
            value={number}
            onValueChange={setNumber}
            maximumValue={100}
            minimumValue={0}
            step={5}
            allowTouchTrack
            trackStyle={{ height: 5, backgroundColor: "transparent" }}
            thumbStyle={{
              height: 20,
              width: 20,
              backgroundColor: "transparent",
            }}
            thumbProps={{
              children: (
                <Icon
                  name="circle"
                  type="font-awesome"
                  size={15}
                  reverse
                  color="#FDB827"
                  containerStyle={{ bottom: 15, right: 20 }}
                />
              ),
            }}
          />
          <Text className="text-lg  text-gray-400">
            Number Of Companies: {number}
          </Text>
        </View>
      </View>
    </Dialog>
  );
};

export default React.memo(FilterDialog);
