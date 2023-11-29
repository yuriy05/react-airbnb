import Box from "../box";
import ListItem from "../list-tem";
import Heading from "../heading";
import "./index.css";

export default function Additional({title, rules, policy, transport, lang, offer, checkin}) {
    return(
        <Box shadow>
            <Heading border>{title}</Heading>
            <ul className="additional__list">
            <ListItem title="Правила дому">
                <span>{rules}</span>
            </ListItem>
            <ListItem title="Політика скасування">
                <span>{policy}</span>
            </ListItem>
            <ListItem title="Місцевий транспорт">
                <span>{transport}</span>
            </ListItem>
            <ListItem title="Мови хоста">
                <span>{lang[0]},</span><span>{lang[1]}</span>
            </ListItem>
            <ListItem title="Спеціальні пропозиції:">
                <span>{offer}</span>
            </ListItem>
            <ListItem title="Інструкції щодо реєстрації">
                <span>{checkin}</span>
            </ListItem>
            </ul>
        </Box>
    )
}