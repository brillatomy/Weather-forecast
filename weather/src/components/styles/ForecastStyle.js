import styled from 'styled-components'

export const ForecastContainer = styled.div`
    height: 50%;
    width: 50%;
    color: white;
    background: transparent;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const ForecastBoxContainer = styled.div`
    width: 20%;
    height: 30%;
    margin: 20px;
    background: #4B9EEC;
    border-radius: 15px;
    border: 2px solid #2a2a72;
`;

export const ForecastSingleBoxContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ForecastPara = styled.p`
    font-size: 18px;
    margin-bottom: 10px;
`;

export const ForecastDate = styled.h5`
    font-size: 25px;
    margin-bottom: 20px;
`;

export const TempSpan = styled.span`
    margin-right: 25px;
`;

export const FlexDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

//Graph
export const GraphContainer = styled.div`
    width: 750px;
    height: 400px;
    background: white;
    margin-bottom: 50px;
`;