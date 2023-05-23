import { useState, useEffect } from "react";
import axios from "axios";
import { getCookie, setCookie, removeCookie } from "typescript-cookie";

export const config = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    // Cookie: "csrftoken=" + getCookie("csrftoken"),
    "X-CSRFToken": getCookie("csrftoken"),
  },
};

const CSRFToken = () => {
  const [csrftoken, setcsrftoken] = useState("");

  useEffect(() => {
    const CsrfToken = async () => {
      const response = await axios.get(`/auth/csrf_cookie`);
      return response.data;
    };

    const promise = CsrfToken();
    promise.then((data) => {
      setCookie("csrftoken", data.CSRF_COOKIE);
      setcsrftoken(data.CSRF_COOKIE);

      // expected output: "Success!"
    });
  }, []);

  return <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />;
};

export default CSRFToken;
