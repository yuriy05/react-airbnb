import Box from "../box";
import Heading from "../heading"
import ListItem from "../list-tem";
import "./index.css";

import Pool from "./pool.svg"
import Gym from "./gym.svg"
import Breakfast from "./breakfast.svg"
import Wifi from "./wifi.svg"
import Parking from "./parking.svg"
import Pets from "./pets.svg"
import Transfer from "./transfer.svg"
import Concierge from "./concierge.svg"
import Service from "./service.svg"
import Baby from "./baby.svg"


export default function Amenities({title}) {
    return(
        <Box shadow>
            <Heading border>{title}</Heading>
            <ul className="property-list">
            <ListItem imageSrc={Pool}>
                <span>Басейн</span>
            </ListItem>
            <ListItem imageSrc={Gym}>
                <span>Спортивний зал</span>
            </ListItem>
            <ListItem imageSrc={Breakfast}>
                <span>Безкоштовний сніданок</span>
            </ListItem>
            <ListItem imageSrc={Wifi}>
                <span>Безкоштовний Wi-Fi</span>
            </ListItem>
            <ListItem imageSrc={Parking}>
                <span>Безкоштовний вуличний паркінг</span>
            </ListItem>
            <ListItem imageSrc={Pets}>
                <span>Дозволено розміщення з домашніми тваринами</span>
            </ListItem>
            <ListItem imageSrc={Transfer}>
                <span>Трансфер до/з аеропорту</span>
            </ListItem>
            <ListItem imageSrc={Concierge}>
                <span>Консьєрж-сервіс</span>
            </ListItem>
            <ListItem imageSrc={Service}>
                <span>Обслуговування номерів</span>
            </ListItem>
            <ListItem imageSrc={Baby}>
                <span>Підходить для дітей</span>
            </ListItem>
            </ul>
        </Box>
    )
}