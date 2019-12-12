import React from 'react';

//import {Link} from 'react-router-dom';
//import Hero from "../components/Hero";
//import Banner from "../components/Banner";
//import Title from "../components/Title";
//import {Container, Row, Col} from 'react-grid-system';
import NavigationBar from "./components/navigations/NavigationBar";
import Footer from "./components/footer/Footer";
import Title from "./components/Hero/Title";
import Banner from "./components/Hero/Banner";
import Hero from "./components/Hero/Hero";


export default class Home extends React.Component{
    render(){
        return (
       <>
           <NavigationBar/>
           <Hero>
               <Banner title="Sunesis UI Kit">
                   <p>Start your development with Our UI Kit</p>
               </Banner>
           </Hero>
           <Title title="Components"/>

<Footer/>
           </>
        );
    }
}
