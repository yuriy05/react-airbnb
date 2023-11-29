import Box from "../box";
import Heading from "../heading"
import ListItem from "../list-tem";
import "./index.css";

import GuestIcon from "./guests.svg"
import Bedrooms from "./bedrooms.svg"
import Bed from "./bed.svg"
import Bath from "./bath.svg"

export default function Properties({title, property}) {
    return(
        <Box shadow>
            <Heading border>{title}</Heading>
            <ul className="property-list">
            <ListItem imageSrc={GuestIcon}>
                <span>{property.guests}</span>
                <span>гості</span>
            </ListItem>
            <ListItem imageSrc={Bedrooms}>
                <span>{property.bedrooms}</span>
                <span>спальня</span>
            </ListItem>
            <ListItem imageSrc={Bed}>
                <span>{property.beds}</span>
                <span>ліжко</span>
            </ListItem>
            <ListItem imageSrc={Bath}>
                <span>{property.baths}</span>
                <span>ванна кімната</span>
            </ListItem>
            </ul>
        </Box>
    )
}