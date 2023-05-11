const BigCard = (props) => {
    return(
        <>
        <div className="bigcard_wrap">
            <img src={props.img} alt="" />
            <div className="overlay">
                <div className="text">
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
                </div>
                <div className="btn">
                <a href={props.link} rel="noreferrer" target="_blank"><button>{props.btn}</button></a>
                </div>
            </div>
        </div>
        </>
    );
}

export default BigCard;