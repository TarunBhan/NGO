import React, { useEffect, useState, useRef } from "react";
import styles from "../styles/Home.module.css";

import Popup from './components/Popup';

const Donate = () => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    amount: "",
    address: "",
  });
const [button,setButton] =useState(false);
  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  // console.log(amount);
  // useEffect(() => {
  //   console.log(input);
  // }, [input]);
  const Post = (e) => {
    e.preventDefault();
    const { name, email, amount, address } = user;
    console.log(name);
    if(name=='' )
    {
      alert('u ned to write the name');
      return false;

    }
    else if( address=='')
    {
      alert('please give all the details');
return false;
    }
    else if( amount =='')
    {
      alert("Enter the amount you want to donate");
      return false;
    }
    setButton(true);
  };

  return (
    <>
      <div className="pattern-bg" id="donate-s">
        <form className="form-donate">
          <h1 className="title">DONATE</h1>
          <div className="block">
            <input
              type="text"
              id="name"
              value={user.name}
              placeholder="Name"
              onChange={handleInputs}
              name="name"
              autoFocus
            />
          </div>
          <div className="block">
            <input
              type="text"
              id="name"
              value={user.email}
              placeholder="Email"
              onChange={handleInputs}
              name="email"
            />


          </div>
          <div className="block">
            <input
              type="text"
              id="name"
              value={user.amount}
              placeholder="Amount"
              onChange={handleInputs}
              name="amount"
            />
          </div>
          <div className="block">
            <input
              type="text"
              id="name"
              value={user.address}
              placeholder="Addres"
              onChange={handleInputs}
              name="address"
            />
          </div>
          <div className={styles.center}>
            {!name && <button className={styles.btn} onClick={Post}>
              Donate
            </button>}
          </div>
        </form>
      </div>
      <Popup  trigger={button} setTrigger={setButton} name={user.name} amount={user.amount} />
    </>
  );
};

export default Donate;
