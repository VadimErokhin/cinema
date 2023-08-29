"use client";

import { useState } from "react";
import Input from "../Input/Input";
import style from "./SubscribeForm.module.css";
import Button from "../Button/Button";

function SubscribeForm() {
  const [countryCode, setCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <form className={style.form}>
      <div className={style.codeInputWrapper}>
        <Input
          className={style.code}
          onInput={setCountryCode}
          type="text"
          value={countryCode}
          placeholder="+880"
        />
      </div>
      <Input
        className={style.phoneNumber}
        type="text"
        value={phoneNumber}
        placeholder="Enter mobile number"
        onInput={setPhoneNumber}
      />
      <Button className={style.btn}>Subscribe</Button>
    </form>
  );
}

export default SubscribeForm;
