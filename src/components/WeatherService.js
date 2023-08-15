import React,{useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import axios from 'axios';
import { responsiveFontSizes } from '@mui/material';
const WeatherService = () => {
  const [Weather,setWeather] = useState([]);
  const [City,setCity] = useState('London');
  axios.get(`http://api.weatherapi.com/v1/current.json?key=2852962dde8446d1a0e130154231508&q=${City}`)
  .then(res => {
      setWeather([res.data]);
      console.log(Weather)
    })
    .catch ((err) => {
      console.log(err);});

  return (
    <Container>
      <TextField
        id='filled-search'
        label='City'
        type='search'
        variant='filled'
        onChange={(e) => setCity(e.target.value)}
      />
     <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Location</TableCell>
              <TableCell align='right'>Weather</TableCell>
              <TableCell align='right'>Temperature</TableCell>
              <TableCell align='right'>Wind</TableCell>
              <TableCell align='right'>Humidity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Weather.map((data) => (
              <TableRow key={data.location.name}>
                <TableCell>{data.location.name}</TableCell>
                <TableCell align='right'>
                  {data.current.condition.text}
                </TableCell>
                <TableCell align='right'>{data.current.temp_c} °C</TableCell>
                <TableCell align='right'>
                  {data.current.wind_kph} km/h
                </TableCell>
                <TableCell align='right'>{data.current.humidity}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};


export default WeatherService;
