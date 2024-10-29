import React, {useState, useEffect} from 'react';
import {MapContainer, TileLayer, Marker, Popup, Polyline, Circle, useMap} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import gymIcon from '../../assets/gym.png';
import userLocationIcon from '../../assets/location.png';
import BottomNav from "../../components/navigation/BottomNav";
import cls from './map.module.css'
import ExploreIcon from '@mui/icons-material/Explore';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const bishkekCenter = [42.8746, 74.6122];

const runningRoute = [[42.8746, 74.6122], [42.8769, 74.6098], [42.8792, 74.6114], [42.8799, 74.6154], [42.8774, 74.6181]];

const gymLocations = [[42.8753, 74.6128], [42.8804, 74.6142], [42.8739, 74.6042],];

const gymMarkerIcon = L.icon({
    iconUrl: gymIcon, iconSize: [25, 25], iconAnchor: [12, 12], popupAnchor: [0, -12],
});

const userLocationMarkerIcon = L.icon({
    iconUrl: userLocationIcon, iconSize: [30, 30], iconAnchor: [15, 15], popupAnchor: [0, -15],
});

const LocationMarker = ({setUserPosition}) => {
    const [position, setPosition] = useState(null);
    const [radius, setRadius] = useState(null);
    const map = useMap();

    useEffect(() => {
        map.locate().on("locationfound", (e) => {
            setPosition(e.latlng);
            setRadius(100); // Радиус в метрах
            map.flyTo(e.latlng, map.getZoom());
            setUserPosition(e.latlng);
        });
    }, [map, setUserPosition]);

    return position === null ? null : (<>
        <Marker position={position} icon={userLocationMarkerIcon}>
            <Popup>Это ваше местоположение</Popup>
        </Marker>
        <Circle center={position} radius={radius} color="blue" fillColor="blue" fillOpacity={0.1}/>
    </>);
};

const RecenterButton = ({setUserPosition}) => {
    const map = useMap();

    const handleClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                const userLocation = L.latLng(pos.coords.latitude, pos.coords.longitude);
                map.flyTo(userLocation, 14);
                setUserPosition(userLocation);
            }, (error) => {
                alert("Не удалось получить ваше местоположение.");
            });
        } else {
            alert("Ваш браузер не поддерживает геолокацию.");
        }
    };

    return (<button
        style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            zIndex: 1000,
            background: 'white',
            border: '0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center', // padding: '10px',
            borderRadius: '50%',
            cursor: 'pointer'
        }}
        onClick={handleClick}
    >
        <ExploreIcon sx={{fontSize: '50px'}}/>
    </button>);
};

const ZoomControl = () => {
    const map = useMap();

    const handleZoomIn = () => {
        map.setZoom(map.getZoom() + 1);
    };

    const handleZoomOut = () => {
        map.setZoom(map.getZoom() - 1);
    };

    return (
        <div style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            gap: '5px'
        }}>
            <button
                onClick={handleZoomIn}
                style={{
                    background: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                }}
            >
                <AddIcon fontSize="large" />
            </button>
            <button
                onClick={handleZoomOut}
                style={{
                    background: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                }}
            >
                <RemoveIcon fontSize="large" />
            </button>
        </div>
    );
};



const MapPage = () => {
    const [userPosition, setUserPosition] = useState(null);

    return (<div className={cls.map}>
        <MapContainer center={bishkekCenter} zoom={14} style={{height: '90vh', width: '100%'}}
                      attributionControl={false}
                      zoomControl={false}
        >

            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />


            <Marker position={bishkekCenter}>
                <Popup>Старт маршрута для бега в центре Бишкека!</Popup>
            </Marker>

            <Polyline positions={runningRoute} color="blue"/>

            {gymLocations.map((gym, index) => (<Marker key={index} position={gym} icon={gymMarkerIcon}>
                <Popup>Тренажёрная площадка</Popup>
            </Marker>))}

            <LocationMarker setUserPosition={setUserPosition}/>

            <RecenterButton setUserPosition={setUserPosition}/>

            <ZoomControl />
        </MapContainer>
        <BottomNav/>
    </div>);
};

export default MapPage;

