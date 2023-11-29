import Heading from "../heading";
import { Fragment } from "react";
import Box from "../box";
import "./index.css";


export default function Review({title, list}) {
    return(
        <div className="review__block">
            <Heading>
                {title}
            </Heading>
            <div className="review__list">
                {list.map(({ id, ...rest}) =>(
                    <Fragment key={id}>
                        <Item {...rest} />
                    </Fragment>
                ))}
            </div>
        </div> 
    )   
}

function Item({guestName: name, review, rating}) {
    return(
        <Box className="review">
            <div className="review__title">
                <span className="review__name">{name}</span>
                <span>Рейтинг: {rating}</span>
            </div>
            <p className="review__text">{review}</p>
        </Box>
    )
}