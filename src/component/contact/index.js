import "./index.css";

export default function Contact({
    name,
    img,
    rate,
    time,
    info,
    phone,
}) {
    return(
        <div className="contact">
            <div className="contact__owner">
                <img src={img} alt="avatar" className="contact__owner-photo"/>
                <div className="contact__owner-info">
                    <span className="contact__owner-name">Господар - {name}</span>
                    <div className="contact__sub-block">
                        <span className="contact__sub-value">{phone}</span>
                        <span className="contact__sub-value">{time}</span>
                        <span className="contact__sub-value">{rate}% відсотків</span>
                    </div>   
                </div>
            </div>
            <div className="contact__description">
                <p className="contact__text">{info}</p>
            </div>
        </div>
    )
}