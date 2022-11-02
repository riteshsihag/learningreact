import { Component } from 'react';
import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts"


class Age extends Component {

    render() {
        const { ageData } = this.props
        return (
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        cx="50%"
                        cy="50%"
                        data={ageData}
                        startAngle={0}
                        endAngle={360}
                        innerRadius="0%"
                        outerRadius="70%"
                        dataKey="count"
                    >
                       
                     <Cell name="18-44" fill="#2d87bb" />
                     <Cell name="44-60" fill="#a3df9f" />
                     <Cell name="Above 60" fill="#64c2a6" />

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

export default Age;
