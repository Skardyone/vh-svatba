"use client"
import { Loader } from '@googlemaps/js-api-loader';
import React, { useEffect } from 'react'

const Map = () => {

    const mapRef = React.useRef<HTMLDivElement>(null);
// (
//     <gmp-map center="49.88310623168945,13.637847900390625" zoom="14" map-id="DEMO_MAP_ID">
//     <gmp-advanced-marker position="49.88310623168945,13.637847900390625" title="My location"></gmp-advanced-marker>
//   </gmp-map>)

    useEffect(() => {
     const initMap = async () => {
        const loader = new Loader({
            apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
            //apiKey: "",
            version: "weekly"
        })

        const { Map } = await loader.importLibrary("maps");
        const { AdvancedMarkerElement } = await loader.importLibrary("marker") as google.maps.MarkerLibrary;
        const position = { 
                lat:49.88310623168945,
                lng: 13.637847900390625
        }
        const markerPosition = {
            lat:49.88310623168945,
                lng: 13.637847900390625
        }
        const mapOptions: google.maps.MapOptions = {
            center: position,
            zoom: 14,
            mapId: "My map",
        }

        const map = new Map(mapRef.current as HTMLDivElement, mapOptions);
        const marker = new AdvancedMarkerElement({
            map: map,
            position: markerPosition
        })
     }

     initMap();
    }, [])
    

  return (
    <div ref={mapRef} className='h-full w-full'/>
  )
}

export default Map