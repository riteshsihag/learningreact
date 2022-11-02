import { Component } from 'react';
import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts"

class Gender extends Component {
 
  render() {
    const {genderData} = this.props
    return (
        <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            cx="50%"
            cy="50%"
            data={genderData}
            startAngle={0}
            endAngle={180}
            innerRadius="40%"
            outerRadius="80%"
            dataKey="count"
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill="#5a8dee" />
            <Cell name="Others" fill="#2cc6c6" />

          </Pie>
          <Legend
           iconType="circle"
           layout="horizontal"
           verticalAlign="bottom"
           align="center"

          />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}

export default Gender;
