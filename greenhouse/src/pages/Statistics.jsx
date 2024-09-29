import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import Main from '../components/ui/Main';
import Content from '../components/ui/Content';

const Statistics = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://natural-delight-4333b80f0c.strapiapp.com/api/sensor-datas');
        const formattedData = formatData(response.data.data);
        setData(formattedData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Helper function to format date and handle invalid dates
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    // Check if the date is valid
    if (isNaN(date.getTime())) {
      return 'Invalid Date'; // Handle invalid date formats
    }
    return date; // Return the raw date object
  };

  // Format API data to prepare for chart and table
  const formatData = (rawData) => {
    return rawData.map((item) => ({
      time: formatDate(item.attributes.time), // Store the raw date object
      type: item.attributes.type,
      value: item.attributes.value,
    }));
  };

  if (loading) return <div className="text-center mt-4">Loading...</div>;
  if (error) return <div className="text-red-500 text-center mt-4">Error: {error.message}</div>;

  // Extract unique types from the data for multiple lines
  const types = [...new Set(data.map(item => item.type))];

  // Helper function to format the time for display on the X-axis
  const formatXAxis = (tickItem) => {
    return new Date(tickItem).toLocaleTimeString(); // Show only time
  };

  return (
    <Main>
      <Content>
        <div className="container mx-auto p-4">
          <h2 className="text-2xl font-bold mb-4">Statistics by Time</h2>
          
          {/* Chart Section */}
          <div className="mt-8">
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" tickFormatter={formatXAxis} /> {/* Format X-axis to show time */}
                <YAxis />
                <Tooltip labelFormatter={formatXAxis} /> {/* Tooltip shows formatted time */}
                <Legend />
                {types.map((type) => (
                  <Line
                    key={type}
                    type="monotone"
                    dataKey="value"
                    data={data.filter((item) => item.type === type)}
                    name={type}
                    stroke={getRandomColor()}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Table Section */}
          <div className="overflow-x-auto mb-8">
            <table className="table-auto w-full border-collapse border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border border-gray-300 px-4 py-2">Time</th>
                  <th className="border border-gray-300 px-4 py-2">Type</th>
                  <th className="border border-gray-300 px-4 py-2">Value</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className="bg-white hover:bg-gray-100">
                    <td className="border border-gray-300 px-4 py-2">{item.time.toLocaleString()}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.type}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Content>
    </Main>
  );
};

// Generate a random color for each line
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
export default Statistics;
