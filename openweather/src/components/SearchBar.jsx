import React, { useState } from "react";

export default function SearchBar({ onSearch }) {

  const [city, setCity] = useState("");

  let inpChange = (e) => {
    setCity(e.target.value);
  };

  return (<form>
<input type="text" />
<button></button>
  </form>);
}