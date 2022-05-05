import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import './myStack.css'
import { FaReact } from 'react-icons/fa'
import { TiHtml5 } from 'react-icons/ti'
import { SiCss3, SiRubyonrails, SiRedux, SiExpress, SiNodedotjs, SiMongodb, SiJavascript } from 'react-icons/si'
import { FiFigma } from 'react-icons/fi'
import { DiRuby } from 'react-icons/di'
import { BsBootstrapFill } from 'react-icons/bs'
import { AiOutlineConsoleSql } from 'react-icons/ai'


const MyStack = () => {
    return (


        <Container
            id={"toolkit"}>
            <Row>
                < h2 className='h2-skill' >Toolkit</h2>
            </Row >
            <Row>
                <Col >
                    <div className="skill-card-section">
                        <CustomCard title={"React"} ><FaReact className='icon-img' /></CustomCard>
                        <CustomCard title={"JavaScript"}><SiJavascript className='icon-img' /></CustomCard>
                        <CustomCard title={"HTML"} ><TiHtml5 className='icon-img' /></CustomCard>
                        <CustomCard title={"CSS"} ><SiCss3 className='icon-img' /></CustomCard>
                        <CustomCard title={"Figma"}><FiFigma className='icon-img' /></CustomCard>
                        <CustomCard title={"Ruby"} ><DiRuby className='icon-img' /></CustomCard>
                        <CustomCard title={"Rails"}  ><SiRubyonrails className='icon-img' /></CustomCard>
                        <CustomCard title={"React Native"}><FaReact className='icon-img' /></CustomCard>
                        <CustomCard title={"Bootstrap"} ><BsBootstrapFill className='icon-img' /></CustomCard>
                        <CustomCard title={"Redux"} ><SiRedux className='icon-img' /></CustomCard>
                        <CustomCard title={"Express.js"}><SiExpress className='icon-img' /></CustomCard>
                        <CustomCard title={"Node.js"} ><SiNodedotjs className='icon-img' /></CustomCard>
                        <CustomCard title={"MongoDB"} ><SiMongodb className='icon-img' /></CustomCard>
                        <CustomCard title={"SQL"} ><AiOutlineConsoleSql className='icon-img' /></CustomCard>
                    </div>
                </Col>
            </Row>
        </Container >

    )
}



const CustomCard = ({ title, children, style }) => {
    return (
        <div className="card">
            <div className="card-image" style={style}>
                {children}
                <h4>{title}</h4>
            </div>
        </div>


    )
}

export default MyStack