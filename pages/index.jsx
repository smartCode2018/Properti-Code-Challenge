import { useState } from "react";
import Head from "next/head";

import styles from "@/pages/index.module.css";

export default function Home() {
  //create state for form input and set to empty string
  const [input, setInput] = useState("");

  //create state to hold the roman numeral value and set to empty string
  const [result, setResult] = useState("");

  //function to get the form value
  const handleOnchange = (event) => {
    //set the input state using event
    setInput(event.target.value);
    //reset result state to empty string.
    setResult("");
  };

  //functiont to convert form input to  Roman Numeral
  const handleSubmit = (event) => {
    //create an object to hold roman numerals special characters
    const special_char = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };

    //create a roman_numerals variable and set to empty string.
    //this variable will later contain final result
    let roman_numerals = "";

    //create a for in loop to loop through special_char and get the keys
    for (let key in special_char) {
      //create a while loop to loop and compare the special_char[key] with the form input.
      while (input >= special_char[key]) {
        //if form input is greater than current  key value, then concatinate key to the roman_numerals variable.
        roman_numerals += key;
        //subtract the key value from form input
        input -= special_char[key];
      }
    }

    //set result state to roman_numerals
    setResult(roman_numerals);

    //to prevent page from reloading after form submit.
    event.preventDefault();
  };

  return (
    <div className={styles.container}>
      {/* setting the head properties of the page */}
      <Head>
        <title>Properti Code Challange</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* main body start*/}
      <main>
        <h1 className={styles.title}>ROMAN NUMERAL CALCULATOR</h1>
        <div className={styles.form_container}>
          {/* from input start */}
          <form onSubmit={handleSubmit}>
            <input
              className={styles.form_input}
              type="number"
              placeholder="Enter Number"
              value={input}
              required
              onChange={(e) => handleOnchange(e)}
            />
            <button type="submit" className={styles.form_button}>
              CONVERT
            </button>
          </form>
          {/* form input end */}
        </div>
        {/* div to display result */}
        <div>
          <h1 className={styles.result}> {result}</h1>
        </div>
        {/* div to display result end */}
      </main>
      {/* main body end */}
    </div>
  );
}
