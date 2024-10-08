import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function GraphsData({graphData ,currentUptime}) {

    console.log(graphData ,currentUptime)
    return (
      <>
       <div className="p-6 bg-white shadow-lg rounded-lg relative w-full">
        <p className='font-poppins font-bold'>TVL</p>
      {/* Current Uptime Value */}
      {currentUptime && (
        <div className="absolute top-2 right-2 bg-blue-500 text-white p-2 rounded-full">
          {currentUptime}%
        </div>
      )}

      {/* Uptime Line Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={graphData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis  domain={[0, 20000]} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="uptime" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>

      <p className="text-right text-gray-500 text-sm mt-2">Last 30 days</p>
    </div>
      </>
    );
  }
  
  export default GraphsData;
  