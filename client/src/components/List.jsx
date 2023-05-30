import React, { useRef } from "react";
import Badge from "../assets/objects/Badge";
import SmallCard from "./SmallCard";
import Popup from "reactjs-popup";
import { v4 as uuid } from "uuid";
import Print from "../assets/images/print.png";
import ReactDOMServer from "react-dom/server";

function List(props) {
  const filteredData = Badge.filter((el) => {
    if (props.input === "") {
      return el;
    } else {
      return el.title.toLowerCase().includes(props.input);
    }
  });

  const printRef = useRef(null);

  const handlePrint = (title, tasks, image) => {
    const content = `
      <div style="display: flex; align-items: center;">
        <img src="${image}" alt="Print Image" style="max-width: 300px;" />
        <h2 style="margin-left: 20px;">${title}</h2>
      </div>
      ${ReactDOMServer.renderToStaticMarkup(tasks)}
    `;

    const printWindow = printRef.current.contentWindow;

    printWindow.document.open();
    printWindow.document.write(`
      <html>
        <head>
          <title>Print</title>
          <style>
            @media print {
              body * {
                visibility: hidden;
              }
              #modal-content,
              #modal-content * {
                visibility: visible;
              }
              #modal-content {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
              }
            }
          </style>
        </head>
        <body>
          <div id="modal-content">
            ${content}
          </div>
          <script>
            window.onload = function() {
              window.print();
              setTimeout(function() {
                window.close();
              }, 100);
            }
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <div className="badgesWrap">
      {filteredData.map((item) => (
        <Popup
          key={uuid()}
          className="popup"
          trigger={
            <li>
              <SmallCard icon={item.img} name={item.title} />
            </li>
          }
          modal
          nested
        >
          {(close) => (
            <div className="badgesModal">
              <p className="close" onClick={() => close()}>
                x
              </p>
              <div className="header">
                <div className="image">
                  <img src={item.img} alt="" />
                </div>
                <h2>{item.title}</h2>
                <button
                  className="print"
                  onClick={() => handlePrint(item.title, item.tasks, item.img)}
                >
                  <img src={Print} alt="" />
                </button>
              </div>
              <div className="tasks">{item.tasks}</div>
            </div>
          )}
        </Popup>
      ))}
      <iframe ref={printRef} title="Print Frame" style={{ display: "none" }} />
    </div>
  );
}

export default List;