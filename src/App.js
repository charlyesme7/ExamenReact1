import React from 'react';
import {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './complementos/Header';
import Movies from './complementos/Movies';
import Ticket from './complementos/Ticket';
import './App.css';
import img1 from './img/img1.jpg'
import img2 from './img/img2.jpg'
import img3 from './img/img3.jpg'
import img4 from './img/img4.jpg'


class App extends Component{
  
  constructor() {
    super();
    this.state = {
      compra:{},
      cartelera:[
        {
          codigo:1,
          nombre:"Avengers", 
          idioma:'DOB', 
          clasificacion:'B',
          horarios:['13:00','17:50','20:30'],
          duracion:'120 min',
          img:img1},
        {
          codigo:2,
          nombre:"Avengers: Age of Utron", 
          idioma:'DOB', 
          clasificacion:'A',
          horarios:['9:00','11:30','13:30'],
          duracion:'130 min',
          img:img2},
        {
          codigo:3,
          nombre:"Avengers: Infinity War", 
          idioma:'SUB', 
          clasificacion:'B',
          horarios:['11:00','13:50','19:40'],
          duracion:'148 min',
          img:img3},
        {
          codigo:4,
          nombre:"Avengers: Endgame", 
          idioma:'SUB', 
          clasificacion:'B',
          horarios:['10:30','14:20','18:30'],
          duracion:'160 min',
          img:img4},
      ],
    };
  }

  agregar=(pelicula,hora)=>{
    const temp={
      nombre: pelicula.nombre,
      idioma: pelicula.idioma,
      clasificacion: pelicula.clasificacion,
      cantidad:0,
      total:0,
      duracion: pelicula.duracion,
      horario: hora
    }
    this.setState({
      ...this.state,
      compra:temp
    });
  }

  eliminarCompra=()=>{
    this.setState({
      ...this.state,
      compra:[]
    });
    alert("Purchase canceled")
  }

  comprar=(pelicula)=>{
    if(pelicula.cantidad>0){
      alert("Enjoy the Movie!")
      this.setState({
        ...this.state,
        compra:[]
      });
    }
    else if (pelicula.cantidad === 0){
      alert("Enter your tickets")
    }

  }
  
  calcular=(pelicula,a)=>{
    let precio
    if (a>0)
    {
      if (pelicula.clasificacion === "A") 
      precio = 10;
      if (pelicula.clasificacion === "B") 
      precio = 12;
      if (pelicula.clasificacion === "C") 
      precio = 14;
      const temp={
        nombre: pelicula.nombre,
        idioma: pelicula.idioma,
        clasificacion: pelicula.clasificacion,
        cantidad:a,
        total:precio*a,
        duracion: pelicula.duracion,
        horario: pelicula.horario
      }
      this.setState({
        ...this.state,
        compra:temp
      });
    }
    else
    {
      alert("Ingresa un valor real")
    }
  }

  render(){
    return (
      <div className="App">
        <Header />
        <div className="Containers">

          <Movies
            cartelera = {this.state.cartelera}
            agregar = {this.agregar}
          />

          <Ticket
            comprar = {this.comprar}
            calcular = {this.calcular}
            eliminarCompra = {this.eliminarCompra}
            compra = {this.state.compra}
          />

        </div>
      </div>    
    );
  }  
}

export default App;
