"use client";

import { useEffect, useMemo, useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  InfoWindow,
  useMap,
  useMapsLibrary,
} from "@vis.gl/react-google-maps";

type Props = {
  menu: string;
};

type PlaceMarker = {
  id: string;
  name: string;
  position: {
    lat: number;
    lng: number;
  };
  address?: string;
};

function NearbyRestaurants({
  menu,
  center,
}: {
  menu: string;
  center: { lat: number; lng: number };
}) {
  const map = useMap();
  const placesLib = useMapsLibrary("places");

  const [places, setPlaces] = useState<PlaceMarker[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<PlaceMarker | null>(null);

  const textQuery = useMemo(() => `${menu} restaurant`, [menu]);

  useEffect(() => {
    const runSearch = async () => {
      if (!map || !placesLib) return;

      try {
        const { Place } = placesLib as google.maps.PlacesLibrary;

        const result = await Place.searchByText({
          textQuery,
          fields: [
            "displayName",
            "location",
            "formattedAddress",
            "id",
          ],
          locationBias: {
            center,
            radius: 1500,
          },
          maxResultCount: 8,
          language: "en",
          region: "jp",
        });

        const mapped: PlaceMarker[] =
          result.places
            ?.filter((place: any) => place.location && place.id && place.displayName)
            .map((place: any) => ({
              id: place.id,
              name:
                typeof place.displayName === "string"
                  ? place.displayName
                  : place.displayName?.text ?? "Unknown place",
              position: {
                lat: place.location.lat(),
                lng: place.location.lng(),
              },
              address: place.formattedAddress,
            })) ?? [];

        setPlaces(mapped);

        if (mapped.length > 0) {
          const bounds = new google.maps.LatLngBounds();
          bounds.extend(center);
          mapped.forEach((place) => bounds.extend(place.position));
          map.fitBounds(bounds, 60);
        }
      } catch (error) {
        console.error("Place.searchByText failed:", error);
        setPlaces([]);
      }
    };

    runSearch();
  }, [map, placesLib, center, textQuery]);

  return (
    <>
      {places.map((place) => (
        <AdvancedMarker
          key={place.id}
          position={place.position}
          onClick={() => setSelectedPlace(place)}
        />
      ))}

      {selectedPlace && (
        <InfoWindow
          position={selectedPlace.position}
          onCloseClick={() => setSelectedPlace(null)}
        >
          <div className="text-black">
            <div className="font-semibold">{selectedPlace.name}</div>
            {selectedPlace.address && (
              <div className="text-sm">{selectedPlace.address}</div>
            )}
          </div>
        </InfoWindow>
      )}
    </>
  );
}

export default function LunchMap({ menu }: Props) {
  const [position, setPosition] = useState<{ lat: number; lng: number } | null>(
    null
  );

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      (err) => {
        console.log("위치 가져오기 실패:", err);
        setPosition({
          lat: 35.681236,
          lng: 139.767125,
        });
      }
    );
  }, []);

  if (!position) {
    return (
      <div className="flex h-full items-center justify-center text-white/50">
        Loading map...
      </div>
    );
  }

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <Map
        defaultCenter={position}
        zoom={15}
        mapId="DEMO_MAP_ID"
        style={{ width: "100%", height: "100%" }}
      >
        <AdvancedMarker position={position} />
        <NearbyRestaurants menu={menu} center={position} />
      </Map>
    </APIProvider>
  );
}