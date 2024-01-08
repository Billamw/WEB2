import React, { useEffect, useRef } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import { fromLonLat } from "ol/proj";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { OSM, Vector as VectorSource } from "ol/source";

const MapComponent = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        if (!mapRef.current) return;

        const map = new Map({
            target: mapRef.current,
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            view: new View({
                center: fromLonLat([0, 0]), // Center of the map (change coordinates as needed)
                zoom: 2, // Initial zoom level
            }),
        });

        const vectorSource = new VectorSource();
        const vectorLayer = new VectorLayer({
            source: vectorSource,
        });

        map.addLayer(vectorLayer);

        map.on("click", (event) => {
            const coordinates = event.coordinate;
            const clickedPoint = new ol.geom.Point(coordinates);
            const feature = new ol.Feature(clickedPoint);
            vectorSource.clear();
            vectorSource.addFeature(feature);

            // Log or use coordinates here
            console.log("Clicked coordinates:", coordinates);
        });

        return () => {
            map.setTarget(undefined);
        };
    }, []);

    return <div ref={mapRef} style={{ width: "100%", height: "400px" }}></div>;
};

export default MapComponent;
