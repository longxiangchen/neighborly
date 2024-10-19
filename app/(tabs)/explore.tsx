import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Geojson } from "react-native-maps";

const App = () => {
  const geojsonData = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          coordinates: [
            [
              [-84.40674726770584, 33.77451687046657],
              [-84.40648771591863, 33.774293179758786],
              [-84.40664128440424, 33.77417639419086],
              [-84.40679146675976, 33.7743032164401],
              [-84.40691743411915, 33.774540690957565],
              [-84.40705167534148, 33.774471145594816],
              [-84.4069057430404, 33.77421855635221],
              [-84.40656407643102, 33.7739067578309],
              [-84.40614472286701, 33.77423370167094],
              [-84.40658339324766, 33.77462689198104],
              [-84.40674726770584, 33.77451687046657],
            ],
          ],
          type: "Polygon",
        },
      },
    ],
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 33.77454715,
          longitude: -84.40658081,
          latitudeDelta: 0.0002,
          longitudeDelta: 0.0002,
        }}
      >
        <Geojson
          geojson={geojsonData}
          strokeColor="#000"
          fillColor="#ff000050" // Adding transparency
          strokeWidth={2}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default App;
