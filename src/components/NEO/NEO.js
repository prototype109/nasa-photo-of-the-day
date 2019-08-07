import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NEORow from './NEORow';
import styled from 'styled-components';
import moment from 'moment';
//import NEOTable from './NEOTable';

function NEO(){
    const tableHeaders = ['Asteroid Name', 'Missed Earth (Miles)', 'Estimated Diameter (Max)', 'Potentially Hazerdous'];
    // const [nearEarth, setNearEarth] = useState([]);
    // const [asteroidName, setAsteroidName] = useState([]);
    // const [diameter, setDiameter] = useState([]);
    // const [hazerdous, setHazerdous] = useState([]);
    // const [dataSize, setDataSize] = useState(0);
    const [data, setData] = useState([]);
    const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
    //console.log(`current date: ${moment().format('YYYY-WW-DD')}`);
    //setDate(moment().format('YYYY-MM-DD'))
    useEffect(() => {
    
    axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=3ub7zrZEVZpqcjuUzr1Ke0aPi24xCB7DHh4ukDdw`)
        .then(res => {
            const apiDataArray = res.data.near_earth_objects[date];
            setData(apiDataArray);
            //setDataSize(apiDataArray.length);
            // apiDataArray.forEach(data => {
            //     setAsteroidName(nearEarth.push(data.name));
            //     setNearEarth(asteroidName.push(data.close_approach_data[0].miss_distance.miles));
            //     setDiameter(diameter.push(data.estimated_diameter.miles.estimated_diameter_max));
            //     setHazerdous(hazerdous.push(data.is_potentially_hazardous_asteroid));
            // })
            //console.log(res.data.near_earth_objects["2019-07-30"])
            console.log(`current date: ${moment().format('YYYY-MM-DD')}`);
            console.log(res.data.near_earth_objects[date]);
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
    const TableBackground = styled.div`
        background: rgba(255, 255, 255, 0.5);
    `;

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
        <TableBackground>
            <table>
                <thead>
                    <NameStyle>
                        {tableHeaders.map(name => <th>{name}</th>)}
                    </NameStyle>
                </thead>
                <AlternateColor>
                    {data.map(asteroid => <NEORow asteroid={asteroid} />)}
                </AlternateColor>
            </table>
        </TableBackground>
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