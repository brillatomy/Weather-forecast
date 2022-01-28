import React from 'react'
import moment from 'moment';
//Icons
import { WiHumidity, WiWindy, WiSunrise, WiSunset } from "react-icons/wi"
import { ImLocation2 } from "react-icons/im"
//Styles
import { MainContainer, LocationDiv, WeatherDiv, CenterDiv, Description, MiddleDiv, Paragraph, Temperature, City, DateDiv} from '../styles/CurrentWeatherStyle'
import '../../App.css'

const CurrentWeather = ({ temprature, city, description, sunrise, sunset, humidity, wind}) => {
    
    return (
        <MainContainer className='main-container'>
            <LocationDiv>
                <p>
                    <ImLocation2 color='#a71d31'/>{city}
                </p>
            </LocationDiv>
            
            <WeatherDiv>        
                <div>            
                    <Description>{description}</Description>
                    <CenterDiv>
                        <p><WiHumidity size="3em" color="#ffdd00"/></p>
                        <Paragraph> {humidity} %</Paragraph>
                    </CenterDiv>
                    <CenterDiv>
                        <p><WiWindy size="3em" color="#ffdd00" /></p> 
                        <Paragraph>
                            {Math.floor((wind * 18) / 5)}km/h 
                        </Paragraph>
                    </CenterDiv>
                </div>

                <MiddleDiv>
                    <Temperature>
                        {Math.floor(temprature - 273.15)} &deg;C
                    </Temperature>
                    <City>
                        {city}
                    </City>            
                    <DateDiv>
                        <Paragraph>
                            {moment().format('dddd')}, {moment().format('MMMM DD')}
                        </Paragraph>
                    </DateDiv>            
                </MiddleDiv>
                
                <div>
                    <CenterDiv>
                        <p>
                            <WiSunrise size="3em" color="#ffdd00" />
                        </p> 
                        <Paragraph>
                            {new Date(sunrise * 1000).toLocaleTimeString('en-IN')}
                        </Paragraph>
                    </CenterDiv>
                    <CenterDiv>
                        <p>
                            <WiSunset size="3em" color="#ffdd00" />
                        </p>
                        <Paragraph>
                            {new Date(sunset * 1000).toLocaleTimeString('en-IN')}
                        </Paragraph>
                    </CenterDiv>
                </div>        
            </WeatherDiv>
        </MainContainer>
    )
}

export default CurrentWeather