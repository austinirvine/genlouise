import React, {Component} from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

class Tabbing extends Component {
    state = {
        tabs: []
    };

    render () {
        return (
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                
                <Tab eventKey="purpose" title="Purpose">
                    <div className="container">
                        <p>
                            <center>
                                Humpback Company is video game company that treasures
                                the vast seas, the crashing of the ocean against our 
                                yee old floating shanty, the splash of a humpback whale
                                breaching the woven waves, and creatively designed software
                                that helps us forge forward into the deep.
                            </center>
                        </p>
                    </div>
                </Tab>
                <Tab eventKey="history" title="Vision">
                    <div className="container">
                        <p>
                            
                                Humpback Company was founded in 2019 on the idea that games should 
                                be fun and should contribute to the world. Games have a power, like any
                                form of art to share different perspectives and add new wealth to those who appreciate it.
                            <br></br>
                            <br></br>
                            <center>
                            <strong>
                                Driving Change In Technology Requires A Storm
                            </strong>
                            </center>
                            <br></br>
                            <br></br>
                                Our mission is to drive change in the software development world by creating impactful software that
                                is non-addictive and gives the user control back. Modern software is built for addiction and to purely make money.
                                Reducing the addiction and creating ways to promote healthier use of games and applications is the start.
                                We plan to edit the playing field. Options like gauging gameplay time are things we plan to give our users.
                            <br></br>
                            <br></br>
                            <center>
                            <strong>
                                The future in software is to build unique experiences that bring people together.
                            </strong>
                            </center>
                            <br></br>
                            <br></br>
                                Humpback Company promises to give back to charities and local community organizations
                                that provide fresh water, promote the reduction of pollution, help and mentor children, 
                                fight poaching, and brings awareness to humpback whales. Donations will be made through known charities or efforts
                                led by our company. Any donations of money or time will be laid out to users on the website in
                                a quick, concise, and clear manner.
                            <br></br>
                            <br></br>
                            <center>
                            <strong>
                                You support us. We support the world.
                            </strong>
                            </center>
                            <br></br>
                            <br></br>
                        </p>
                    </div>
                </Tab>  
                <Tab eventKey="backstory" title="BackStory">
                    <div className="container">
                        <p>
                            In 2014, Austin Irvine, Lee Pugh, and George Irvine began work on a video game project
                            using the open source software - Blender. In the project, players raced humpback 
                            whales to the sound of dolphins singing to an 8-bit jingle . The game was called 'Whale Racer'. The concept 
                            of racing whales spurred a passion for humpback whales and the ocean ecosystem. Since then, Austin has wanted 
                            to share his passions of game development and whales with others. Starting 
                            Humpback Company was naturally the next step.
                        </p>  
                    </div>
                </Tab>
                <Tab eventKey="contact" title="Contact">
                    <div className="container">
                        <p>
                                Contact 
                                <a href="mailto:austin@humpbackcompany.com"> Austin </a>   
                                at Humpback Company with any questions.
                        </p>  
                    </div>
                </Tab>

            </Tabs>
        );
    }
}

export default Tabbing;