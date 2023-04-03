const SmallCard = (props) => {
    // const {name, icon} = Guides;
    
    return(
        <>
        <div className="smallcard_wrap">
            <div className="content">
                <div className="img">
                    <img src={props.icon} alt=""></img>
                </div>
                <h3>{props.name}</h3>
            </div>
        </div>
        </>
    );
}
export default SmallCard;