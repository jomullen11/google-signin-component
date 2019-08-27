import React, { useState, useEffect } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [printEmail, setPrintEmail] = useState(false);

  function readCookie(name) {
    var key = name + "=";
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1, cookie.length);
      }
      if (cookie.indexOf(key) === 0) {
        return cookie.substring(key.length, cookie.length);
      }
    }
    return null;
  }
  const setState = () => {
    setEmail(readCookie("Email"));
  };

  const toggleEmail = () => {
    setPrintEmail(!printEmail);
  };

  const clearUserState = () => {
    setEmail(null)
  }

  document.getElementById("sign-out").addEventListener("click", clearUserState);
  useEffect(() => {
    setState();
  });

  return (
    <>
      <button type="text" onClick={toggleEmail}>
        Show Email
      </button>
      <br />
      {email ? (printEmail ? email : null) : "Please Sign In"}
    </>
  );
}

export default App;
