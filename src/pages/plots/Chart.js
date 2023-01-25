import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(x, y1, y2) {
    return ({ x, y1, y2 });
}

export default function Chart({ x, y1, y2 }) {
    const theme = useTheme();
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const data = [];
        for (let i = 0; i < x.length; i++)
            data.push(createData(x[i], y1[i], y2[i]));
        setData(data);
    }, [x, y1, y2]);

    return (
        <React.Fragment>
            <Title>Actual vs Prediction</Title>
            <ResponsiveContainer>
                <LineChart
                    data={data}
                    margin={{
                        top: 16,
                        right: 16,
                        bottom: 30,
                        left: 24,
                    }}
                >
                    <XAxis
                        dataKey="x"
                        position="left"
                        stroke={theme.palette.text.secondary}
                        style={theme.typography.body2}
                    >
                        <Label
                            dy={25}
                            position="center"
                            style={{
                                textAnchor: 'middle',
                                fill: theme.palette.text.primary,
                                ...theme.typography.body1,
                            }}
                        >
                            Date
                        </Label>
                    </XAxis>
                    <YAxis
                        stroke={theme.palette.text.secondary}
                        style={theme.typography.body2}
                    >
                        <Label
                            angle={270}
                            position="left"
                            style={{
                                textAnchor: 'middle',
                                fill: theme.palette.text.primary,
                                ...theme.typography.body1,
                            }}
                        >
                            Sales
                        </Label>
                    </YAxis>
                    <Line
                        isAnimationActive={true}
                        type="monotone"
                        dataKey="y1"
                        strokeWidth={2}
                        stroke={theme.palette.primary.main}
                        dot={false}
                    />
                    <Line
                        isAnimationActive={true}
                        type="monotone"
                        dataKey="y2"
                        strokeWidth={2}
                        stroke={theme.palette.secondary.main}
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </React.Fragment>
    );
}