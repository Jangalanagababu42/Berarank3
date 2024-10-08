
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function BarGraphs({ graphData, currentUptime }) {
  // Ensure graphData is available before rendering
  if (!graphData || !currentUptime) {
    return <div>Loading...</div>; // Display a loader while waiting for data
  }

  return (
    <div className="relative p-6 bg-white shadow-lg rounded-lg w-full">
      {/* Title and Current Uptime Badge */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">Commission</h2>
        <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
          {currentUptime}%
        </div>
      </div>

      {/* Bar Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={graphData}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="timestamp" tickLine={false} tick={{ fontSize: 12, fill: "#808080" }} />
          <YAxis tickLine={false} tick={{ fontSize: 12, fill: "#808080" }} domain={[0, 10]} />
          <Tooltip  contentStyle={{ backgroundColor: 'white',  border: '1px solid #ddd' }} 
            cursor={{ fill: 'white' }}  />
          <Bar dataKey="uptime" fill="#4A90E2" barSize={20} />
        </BarChart>
      </ResponsiveContainer>

      {/* Footer Text */}
      <p className="text-right text-gray-500 text-sm mt-2">last 30 days</p>
    </div>
  );
}

export default BarGraphs;
