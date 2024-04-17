import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://2024-03-06.currency-api.pages.dev/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => {
        return setData(res[currency]);
      })
      .catch((e) => e.toString());
  }, [currency]);
  return data;
}

export default useCurrencyInfo;
