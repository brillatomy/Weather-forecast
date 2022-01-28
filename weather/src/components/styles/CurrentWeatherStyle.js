import styled from 'styled-components'

export const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MainContainer = styled.div`
    height: 50%;
    width: 50%;
    background: #4B9EEC;
    opacity: 0.8;
    color: white;
    border-radius: 15px;
    border: 2px solid #2a2a72;
    margin-top: 40px;
    margin-bottom: 60px;
    display: flex;
    flex-direction: column;
`;

export const LocationDiv = styled.div`
    height: 50px;
    width: 88%;
    padding: 30px;
`;

export const WeatherDiv = styled.div`
    height: 40%;
    width: 100%;
    padding-top: 50px;
    margin-bottom: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

export const CenterDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Description = styled.p`
    text-transform: capitalize;
    font-size: 28px;
`;

export const MiddleDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Paragraph = styled.p`
    font-size: 24px;
`;

export const Temperature = styled.p`
    font-size: 38px;
    margin-bottom: 10px;
`;

export const City = styled.h2`
margin-top: 20px;
margin-bottom: 20px;
`;
export const Heading = styled.h1`
    margin-top: 50px;
    margin-bottom: 40px;
    color: #2a2a72;
`;

export const DateDiv = styled.div`
    height: 30px;
    width: 250px;
    border-radius: 5px;
    text-align: center;
    background-color: #2a2a72;
    background: linear-gradient(315deg, #009ffd 0%, #2a2a72 74%);
`;

export const ForecastDivContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;