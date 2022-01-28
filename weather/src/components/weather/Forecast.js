import React from 'react'
import moment from 'moment'
//Styles
import { ForecastContainer, ForecastBoxContainer, ForecastSingleBoxContainer, ForecastPara, ForecastDate, TempSpan, FlexDiv} from '../styles/ForecastStyle'
//Icons
import { WiHumidity, WiWindy, WiDayCloudy } from "react-icons/wi"
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa"


 const Forecast = ({ forecast }) => {

        return (   
            <ForecastContainer>            
                {forecast.map((data) => {
                    return (
                        <ForecastBoxContainer>                            
                            <ForecastSingleBoxContainer>
                                <ForecastDate>
                                    {moment.unix(data.dt).format('dddd')}
                                </ForecastDate>
                                
                                <WiDayCloudy  size='3em' color='#ffdd00' />
                                <ForecastPara>
                                    <TempSpan>
                                        <FaTemperatureHigh color= '#63d471'/>{Math.floor(data.temp.max - 273.15 )}°
                                    </TempSpan>  
                                    <span>
                                        <FaTemperatureLow color= '#a71d31'/>{Math.floor(data.temp.min- 273.15 )}°
                                    </span>
                                </ForecastPara>                                
                                
                                <FlexDiv>
                                     <WiWindy size='2em' color="#ffdd00"/>
                                     {Math.floor((data.wind_speed * 18) / 5)} km/h
                                </FlexDiv>
                               
                                <FlexDiv>
                                     <WiHumidity size='2em' color="#ffdd00"/>
                                     {data.humidity} %
                                </FlexDiv>

                                <ForecastPara style={{"textTransform":"capitalize"}}>
                                    {data.weather[0].description}
                                </ForecastPara>
                            </ForecastSingleBoxContainer>
                        </ForecastBoxContainer>
                    )
                })}
            </ForecastContainer>            
        )
}

export default Forecast