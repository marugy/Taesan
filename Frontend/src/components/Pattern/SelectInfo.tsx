import React from 'react';
import Graph from './Graph';
import GraphDetail from './GraphDetail';

const SelectInfo = () => {
    return (
        <div>
            <button>장소</button>
            <button>상세 물건</button>
            <button>2023년</button>
            <button>전체</button>
            <Graph/>
            <GraphDetail/>
        </div>
    );
};

export default SelectInfo;