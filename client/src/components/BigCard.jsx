const BigCard = (props) => {
    return(
        <>
        <div className="bigcard_wrap">
            <img src={props.img} alt="" />
            <div className="overlay">
                <div className="text">
                <h2>Header</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab voluptas expedita accusantium molestiae? Laudantium in rem perspiciatis voluptate, molestias quos?</p>
                </div>
                <div className="btn">
                <button>Event Page</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default BigCard;