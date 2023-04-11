import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { curveCardinal } from 'd3-shape';
import './Statistics.css'

const Statistics = () => {

    const marksArray = [
        {
          id: 1,
          name: 'Assignment One',
          marks: 60,
        },
        {
            id: 2,
            name: 'Assignment Two',
            marks: 60,
        },
        {
            id: 3,
            name: 'Assignment Three',
            marks: 58,
        },
        {
            id: 4,
            name: 'Assignment Four',
            marks: 60,
        },
        {
            id: 5,
            name: 'Assignment Five',
            marks: 58,
        },
        {
            id: 6,
            name: 'Assignment Six',
            marks: 60,
        },
        {
            id: 7,
            name: 'Assignment Seven',
            marks: 60,
        },
        {
            id: 8,
            name: 'Assignment Eight',
            marks: 60,
        },
      ];
      const cardinal = curveCardinal.tension(0.2);
      

    return (
        <div className='mt-20 statistics-container'>
            <ResponsiveContainer width="100%" height={500}>
                  <AreaChart
                    width={500}
                    height={400}
                    data={marksArray}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
                    {/* <Area type={cardinal} dataKey="name" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} /> */}
                  </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;
