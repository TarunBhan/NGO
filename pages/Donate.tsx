import React from "react";

const Donate = () => {
  return (
    <>
      <div className="pattern-bg" id="donate-s">
        <form className="form-donate">
          <div className="block">
            <input type="text" id="name" placeholder="Name" />
          </div>
          <div className="block">
            <input type="text" id="name" placeholder="Email" />
          </div>
          <div className="block">
            <input type="text" id="name" placeholder="Amount" />
          </div>

          <div className="block">
            <input type="text" id="name" placeholder="Adress" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Donate;
