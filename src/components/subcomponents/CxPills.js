import React from 'react'
import { Col } from 'react-bootstrap'

const CxPills = ({ text, bg, color, border }) => {
    const styles = {
        display: "inline-block",
        width: "200px",
        color: "black",
        background: bg,
        padding: "20px",
        margin: "20px",
        textAlign: "center",
        border: `2px solid ${border}`,
        borderRadius: "15px",

    }

    return (
        <Col>
            <div style={styles}>
                <h4>
                    {text}
                </h4>
            </div>
        </Col>
    )
}




export default CxPills