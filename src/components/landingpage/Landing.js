import React from 'react';

//import {Link} from 'react-router-dom';
//import Hero from "../components/Hero";
//import Banner from "../components/Banner";
//import Title from "../components/Title";
//import {Container, Row, Col} from 'react-grid-system';
import NavigationBar from "../navigations/NavigationBar";
import Footer from "../footer/Footer";
import Title from "../Hero/Title";
import Banner from "../Hero/Banner";
import Hero from "../Hero/Hero";
import {memberone} from "../images/memberone.jpg";
import ImageGallery from "./ImageGallery";
import {Link} from "react-router-dom";
import {Col, Container, Row} from "react-grid-system";


export default class Landing extends React.Component{
    render(){
        return (
       <>
           <NavigationBar/>
           <Hero>
               <Banner title="Begin Your work with Us">
                   <p>Start your development with Our UI Kit</p>
                   <Link to="#" className="btn-primary">
                       get started
                   </Link>
               </Banner>
           </Hero>

           <section className="section">
           <Title title="About Us"/>
<div className="section-center">
           <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
               Duis aute irure dolor in reprehenderit in voluptate velit
               esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
               sunt in culpa qui officia deserunt mollit anim id est laborum.
           </p>
</div>

               <Title title="Our Projects"/>
               <div className="section-center">
                   <ImageGallery/>
               </div>

               <Title title="Work With Us"/>
               <div className="section-center">

<form>
    <Container fluid layout="flexbox">
        <Row style={{ justifyContent: 'center' }}>

            <Col>
                <div>
                    <label>Your Name</label>
                </div>
                <div className="w-2">
                    <input type="text"  className="input-w1"/>
                </div>
            </Col>

            <Col>
                <div>
                    <label>Your Email</label>
                </div>
                <div className="w-2">
                    <input type="text" className="input-w1"/>
                </div>
            </Col>

        </Row>
        <Row>
            <Col>
                <div>
                    <label>Your Message</label>
                </div>
                <div className="w-2">
                    <textarea className="input-w2" rows={20}>

                    </textarea>
                </div>
            </Col>

        </Row>
    </Container>
</form>
               </div>
           </section>


           <section className="section">
    </section>

<Footer/>
           </>
        );
    }
}
