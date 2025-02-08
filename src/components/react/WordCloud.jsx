import React from 'react';
import { WordCloud } from '@ant-design/plots';


export default function MyWordCloud() {
  const config = {
    paddingTop: 40,
    data: {
      type: 'fetch',
      value: [{
        "value": 11.739204307083542,
        "text": "水是",
        "name": "泰利斯"
      },
      {
        "value": 9.23723855786,
        "text": "之源",
        "name": "泰利斯"
      }],
    },
    layout: { spiral: 'rectangular' },
    colorField: 'text',
  };
  return <WordCloud {...config} />;
};
