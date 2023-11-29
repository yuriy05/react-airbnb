import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-tem";
import { Fragment } from "react";
import "./index.css";

export default function Attractions({title, nearbyAttractions: atrct}) {
    return(
        <div>
            <Box shadow>
            <Heading border>{title}</Heading>
            <ul className="attraction__list">
                    {atrct.map(({ id, ...rest}) =>(
                        <Fragment key={id}>
                            <ListItem>
                                <Item {...rest}/>
                            </ListItem>
                        </Fragment>
                    ))}
            </ul>   
            </Box>
        </div>
    )
}

function Item({name, link}) {
    return(
        <a className="list__item" href={link} target="blank_">{name}</a>
    )
}
