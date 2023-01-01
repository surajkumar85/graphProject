import { useEffect, useState } from "react";

export const useFetch = () => {
  const [data, setData] = useState([]);
  const [dataForBar, setDataForBar] = useState({});
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Create an AbortController to cancel the fetch request if the component unmounts
    const controller = new AbortController();

    const fetchData = async () => {
      // Set the loading state to true
      setIsPending(true);

      try {
        // Make a fetch request to get the data
        const response = await fetch("http://localhost:3000/wine-data", {
          signal: controller.signal,
        });

        // Check if the request was successful
        if (!response.ok) {
          throw Error("Something went wrong.");
        }

        // Parse the response data
        const resData = await response.json();

        // Parse the data into a format that ECharts can understand
        // (in this case, an array of [x, y] values)
        const parsedData = resData.map((item) => [
          item["Color intensity"],
          item["Hue"],
        ]);
        // Extract the data for the x-axis and y-axis from the data array
        const xData = resData.map((item) => item["Alcohol"]);
        const yData = resData.map((item) => item["Malic Acid"]);

        // Set the parsed data and the data for the bar chart
        setData(parsedData);
        setDataForBar({ xData, yData });

        // Clear the error state
        setError(null);

        // Set the loading state to false
        setIsPending(false);
      } catch (error) {
        // If the request was cancelled, log a message
        if (error.name === "AbortError") {
          console.log("This is abort messsgae");
        }

        // Set the error state
        setError(error.messgae);

        // Set the loading state to false
        setIsPending(false);
      }
    };
    fetchData();
  }, []);

  return { dataForBar, data, isPending, error };
};
