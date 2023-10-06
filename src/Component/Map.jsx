import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  // eslint-disable-next-line no-unused-vars
  ZoomableGroup,
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        scale: 500,
      }}
      style={{ width: "100%", height: "100%" , border : "none"}}
    >
      <Geographies
        geography="/features.json"
        fill="#2c065d"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[2.3522, 48.8566]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#Ffffff",
          strokeWidth: 3,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#Fff">
          {"Paris"}
        </text>
      </Annotation>
      <Annotation
        subject={[6.45407 , 3.39467]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#Ffffff",
          strokeWidth: 3,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#Fff">
          {"Lagos"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
