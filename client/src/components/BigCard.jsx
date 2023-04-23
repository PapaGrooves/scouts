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
                <button>{props.btn}</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default BigCard;