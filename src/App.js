import "./App.css";
import { useFetch } from "./hooks/useFetch";
import Chart from "./Components/Chart/Chart";

function App() {
  //We are fetching Given data from local server using out useFetch Custom hook
  // Define the data for the chart
  const { data, error, isPending, dataForBar } = useFetch();
  // Define the options for Scatter chart
  const options = {
    xAxis: {
      // Set the label for the x-axis
      name: "Color intensity",
    },
    yAxis: {
      // Set the label for the y-axis
      name: "Hue",
    },
    series: [
      {
        // Set the type of the series to 'scatter'
        type: "scatter",
        // Set the data for the series using the data from the JSON file
        data: data,
      },
    ],
  };
  // Define the options for Bar chart
  const options2 = {
    xAxis: {
      // Set the type of the x-axis to 'category'
      type: "category",
      // Set the data for the x-axis to the values from the 'Alcohol' field
      data: dataForBar.xData,
      // Set the label for the x-axis
      name: "Alcohol",
    },
    yAxis: {
      // Set the type of the y-axis to 'value'
      type: "value",
      // Set the label for the y-axis
      name: "Average of Malic Acid",
    },
    series: [
      {
        // Set the type of the series to 'bar'
        type: "bar",
        // Set the data for the series to the values from the 'Malic Acid' field
        data: dataForBar.yData,
      },
    ],
  };
  //// Render the ECharts for React component and pass in the 'options' object as a prop
  return (
    <div className="App">
      {isPending && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      <div className="app__plot">
        <h2 className="app__scatterPlot">
          Creating a Scatter Plot with ECharts for React and Data from a JSON
          File
        </h2>
        <p className="app__scatterPlot-paragraph">
          we first import the ECharts for React library and the echarts library.
          We then define a function called useFetch that uses the Fetch to read
          data from a JSON file and parse it into a format that ECharts can
          understand. The parsed data is returned as an array of [x, y] values.
          Next, we define the options for the chart using the xAxis and yAxis
          options to set the labels for the x-axis and y-axis, respectively, and
          the series option to set the type of the series to 'scatter' and the
          data for the series using the data from the JSON file. Finally, we
          render the ECharts for React component and pass in the options object
          as a prop. The resulting chart will be a scatter plot with the data
          from the JSON file and the labels for the x-axis and y-axis as
          specified in the options.
        </p>
        <Chart options={options} />
      </div>
      <div className="app__plot">
        <h2 className="app__scatterPlot">
          Creating a Bar Plot with ECharts for React and Data from a JSON File
        </h2>
        <p className="app__scatterPlot-paragraph">
          we first import the ECharts for React library and the echarts library.
          We then define a function called useFetch that uses the Fetch to read
          data from a JSON file and parse it into a format that ECharts can
          understand. The parsed data is returned as an array of [x, y] values.
          Next, we define the options for the chart using the xAxis and yAxis
          options to set the labels for the x-axis and y-axis, respectively, and
          the series option to set the type of the series to 'Bar' and the data
          for the series using the data from the JSON file. Finally, we render
          the ECharts for React component and pass in the options object as a
          prop. The resulting chart will be a Bar plot with the data from the
          JSON file and the labels for the x-axis and y-axis as specified in the
          options.
        </p>

        <Chart options={options2} />
      </div>
    </div>
  );
}

export default App;
