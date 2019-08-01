import React from 'react';
import styled from 'styled-components';

function NEORow(props){
    //props = [value[], value[], value[], value[]]

    return(
        <tr>
            <td>{props.asteroid.name}</td>
            <td>{props.asteroid.close_approach_data[0].miss_distance.miles}</td>
            <td>{props.asteroid.estimated_diameter.miles.estimated_diameter_max}</td>
            <td>{props.asteroid.is_potentially_hazardous_asteroid ? "true" : "false"}</td>
        </tr>
    )
}

export default NEORow;