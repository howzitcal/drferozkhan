import React, { useState } from "react";
import { ReactComponent as WhatsAppLogo } from "./img/whatsapp-white.svg";
import { Link, useNavigate } from "react-router-dom";

function WhatsAppPage({ setUserInfo }) {
  const [name, setName] = useState();
  const [time, setTime] = useState();
  const nav = useNavigate();

  const sendRequest = () => {
    const date = new Date(time);

    if (date.toJSON() && name) {
      setUserInfo({
        name,
        date,
      });

      document.title = "Dr Feroz Khan - Data Complete";

      nav("/appointment/thanks");
    }
  };

  return (
    <div className="w-screen h-screen grid justify-items-center items-center px-3 ">
      <div
        style={{ backgroundColor: "#ecf5fc", border: "solid 3px #26bdb6" }}
        className="h-fit w-full md:w-96 md:mx-0 p-3 md:p-5 rounded-md grid"
      >
        <div className="grid justify-items-end">
          <Link
            to="/"
            onClick={() => {
              // func heere
            }}
            className="cursor-pointer"
          >
            <svg
              style={{ fill: "#26bdb6" }}
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 18 18"
            >
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
            </svg>
          </Link>
        </div>
        <label className="font-bold my-2">Full Name</label>
        <div style={{ border: "solid 3px #26bdb6", borderRadius: "5px" }}>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="rounded-md text-xl p-1 w-full bg-white"
            placeholder="Full Name"
          />
        </div>
        <label className="font-bold my-2">Appointment Date and Time</label>
        <div style={{ border: "solid 3px #26bdb6", borderRadius: "5px" }}>
          <input
            type="datetime-local"
            onChange={(e) => setTime(e.target.value)}
            className="rounded-md text-xl p-1 bg-white w-full"
          />
        </div>
        <button
          onClick={sendRequest}
          style={{ backgroundColor: "#4e6366" }}
          className="flex text-white font-bold py-3 px-4 m-3 rounded-full justify-center"
        >
          <WhatsAppLogo className="w-6 mr-2" />
          Send appointment Request
        </button>
      </div>
    </div>
  );
}

export default WhatsAppPage;
