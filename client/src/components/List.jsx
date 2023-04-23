import { React } from 'react'
import Badge from '../assets/objects/Badge';
import SmallCard from './SmallCard';
import Popup from 'reactjs-popup';

// STUB original code by Saleh-Mubashar on github.com
// https://github.com/Saleh-Mubashar/React-Search

function List(props) {
    const filteredData = Badge.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.title.toLowerCase().includes(props.input)
        }
    })
    return (
        <ul className="badgesWrap">
            {filteredData.map((item) => (
                <Popup className="popup"
                trigger={
                <li key={item.id}> <SmallCard icon={item.img} name={item.title}/> </li>
            }
            modal
            nested
          >
            {(close) => (
              <div className="badgesModal">
                  <p className="close" onClick={() => close()}>x</p>
                <div className="header">
                  <div className="image">
                    <img src={item.img} alt="" />
                  </div>

                  <h2>{item.title}</h2>

                </div>
                <div className="tasks">{item.tasks}</div>
              </div>
            )}
          </Popup>
            ))}
      </ul>
    )
}

export default List
