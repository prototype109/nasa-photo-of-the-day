import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NEORow from './NEORow';
import styled from 'styled-components';
//import NEOTable from './NEOTable';

function NEO(props){
    const tableHeaders = ['Asteroid Name', 'Missed Earth (Miles)', 'Estimated Diameter (Max)', 'Potentially Hazerdous'];
    // const [nearEarth, setNearEarth] = useState([]);
    // const [asteroidName, setAsteroidName] = useState([]);
    // const [diameter, setDiameter] = useState([]);
    // const [hazerdous, setHazerdous] = useState([]);
    // const [dataSize, setDataSize] = useState(0);
    const [data, setData] = useState([]);
    const [rowColor, setRowColor] = useState(true);

    useEffect(() => {
    axios.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-07-30&end_date=2019-07-30&api_key=3ub7zrZEVZpqcjuUzr1Ke0aPi24xCB7DHh4ukDdw')
        .then(res => {
            const apiDataArray = res.data.near_earth_objects["2019-07-30"];
            setData(apiDataArray);
            //setDataSize(apiDataArray.length);
            // apiDataArray.forEach(data => {
            //     setAsteroidName(nearEarth.push(data.name));
            //     setNearEarth(asteroidName.push(data.close_approach_data[0].miss_distance.miles));
            //     setDiameter(diameter.push(data.estimated_diameter.miles.estimated_diameter_max));
            //     setHazerdous(hazerdous.push(data.is_potentially_hazardous_asteroid));
            // })
            //console.log(res.data.near_earth_objects["2019-07-30"])
            console.log(res);
        })
        .catch(err => console.log('error: ', err));
    }, []);

    // const asteroidData = {
    //     distance: nearEarth,
    //     name: asteroidName,
    //     size: diameter,
    //     danger: hazerdous
    // }
    // const objectToArray = Object.values(props.data);
    // //console.log('ObjectToArry: ', objectToArray);
    // let newRows = [];

    // function createRows(index){
    //     //[value[], value[], value[], value[]]
    //     return <NEORow dataArray={objectToArray} currentIndex={index} />
    // }

    // for(let i = 0; i < props.size; i++){
    //     //console.log('Object ', Object.values(props.data))
    //     newRows.push(createRows(i));
    // }
    const NameStyle = styled.tr`
        background: grey;
    `;

    //const Children = styled.div``;

    const AlternateColor = styled.tbody`
        tr:nth-child(even){
            background: grey;
        }
    `;

    return(
        <div>
            <table>
                <thead>
                    <NameStyle>
                        {tableHeaders.map(name => <th>{name}</th>)}
                    </NameStyle>
                </thead>
                <AlternateColor>
                    {data.map(asteroid => <NEORow asteroid={asteroid} color={NameStyle} />)}
                </AlternateColor>
            </table>
        </div>
    )
}

/* 
arr.forEach(item => {
    get item.name
    get item.close_approach_date.miss_distance.miles
    get item.estimated_diameter.miles.estimated_diameter_max
    get item.is_potentially_hazardous_asteroid
})
Asteroid Name | Missed Earth (miles) | Estimated Diameter (Max) | Potentially Hazerdous


*/

export default NEO;