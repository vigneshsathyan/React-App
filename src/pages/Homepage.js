import React, { useState } from 'react';
import { BackIcon } from "../assests";
import { Card } from "../constants/card";
import { Link } from "react-router-dom";
import { LineChart } from "../constants/linechart";


const Home = () => {

    const sampledata = 
        {
            "title": "No. of Schools",
            "data": [
                { "index": "CBSE", "value": 13 },
                { "index": "international", "value": 15 }
            ]
        }
        const sampledata1 =  {
            "title": "No. of Colleges",
            "data": [
                { "index": "Engineering", "value": 20 },
                { "index": "Medical", "value": 10 }
            ]
        }
        const sampledata2 =   {
            "title": "No. of Universities",
            "data": [
                { "index": "Govt", "value": 9 },
                { "index": "Deemed", "value": 12 }
            ]
        }
        const sampledata3 =  {
            "title": "No. of kindergarten schools",
            "data": [
                { "index": "", "value": 12 }
            ]
        }
    
    return (
        <div className="main__container">
            <div className="content__menu">
                <div className="breedcrumb">
                    <a href="#"><div className="backMenu"><BackIcon /><span style={{ color: "#000", fontSize: "16px" }}>Unnamed</span></div></a>
                    <div className="active"><a href="#edit">Edit</a></div>
                </div>
                <div className="step">
                    <hr />
                    <div className="step__menu">
                        <Link to="#all"><div className="step__btn"><p>All</p> <span className="stepbutton"></span></div></Link>
                        <Link to="#Work"><div className="step__btn"><p>Work</p> <span className="stepbutton"></span></div></Link>
                        <Link to="#Education"><div className="step__btn step_active"><p>Education</p> <span className="stepbutton"></span></div></Link>
                        <Link to="#Health_care"><div className="step__btn"><p>Health care</p> <span className="stepbutton"></span></div></Link>
                        <Link to="#Transport"><div className="step__btn"><p>Transport</p> <span className="stepbutton"></span></div></Link>
                        <Link to="#Shopping"><div className="step__btn"><p>Shopping</p> <span className="stepbutton"></span></div></Link>
                        <Link to="#F&B"><div className="step__btn"><p>F&B</p> <span className="stepbutton"></span></div></Link>
                        <Link to="#Population"><div className="step__btn"><p>Population</p> <span className="stepbutton"></span></div></Link>
                        <Link to="#Heatmap"><div className="step__btn"><p>Heatmap</p> <span className="stepbutton"></span></div></Link>
                    </div>
                </div>
                <div className="card__area">
                    {Card(sampledata)}
                    {Card(sampledata1)}
                    {Card(sampledata2)}
                    {Card(sampledata3)}
                </div>
                <div className="chart__area">

                    <div className="chart__view">
                        {LineChart()}
                    </div>
                    <div className="card__deatils">
                        <h4>All</h4>
                        <table>
                            <tr>
                                <td>Rating</td>
                                <td>4.3 - 4.9</td>
                            </tr>
                            <tr>
                                <td>Review</td>
                                <td>100 - 1500</td>
                            </tr>
                            <tr>
                                <td>Dist.Range</td>
                                <td>15 kms</td>
                            </tr>

                        </table>
                        <div className='filterdiv'>
                            <a href="#"><span>Change Filter</span></a>
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
    );
};

export default Home;
