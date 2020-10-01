import React, {useState, useEffect} from 'react'
import {getFragment} from '../services'
import {Button} from 'antd'
import { Card, Col, Row } from 'antd';



const FragmentDetail = ({
    match: {
        params: {fragmentId}
    }
}) => {

    const [userFragment, setUserFragment] = useState(null)

    useEffect(() => {
        async function fetchFragment() {
        const {
            data: {fragment}
        } = await getFragment(fragmentId)
        console.log(fragment)
        setUserFragment(fragment)
        }
        fetchFragment()
    }, [])

    const textoVoz = () => {
        if ('speechSynthesis' in window) {
            var msg = new SpeechSynthesisUtterance();
            // Speech Synthesis supported 🎉
            var msg = new SpeechSynthesisUtterance();
            var voices = window.speechSynthesis.getVoices();
            msg.voice = voices[4]; 
            msg.volume = 1; // From 0 to 1
            msg.rate = 1; // From 0.1 to 10
            msg.pitch = 2; // From 0 to 2
            msg.text = userFragment.summary;
            msg.lang = 'es';
            speechSynthesis.speak(msg);
        }else{
            // Speech Synthesis Not Supported 😣
            alert("Sorry, your browser doesn't support text to speech!");
        }
    }


    return userFragment ?(
        <div>
            <div>
                <Col>
                <Row>
                <Card title={userFragment.name} bordered={false} style={{ width: "60%", margin:"30px" }}>
                <p>{userFragment.summary}</p>
                <Button onClick={textoVoz}>Texto a Voz</Button>
                </Card>
                <Card title="Nota 01" bordered={false} style={{ width: "30%", margin:"30px" }}>
                <p>Esto es una nota corta.</p>
                <Button onClick={textoVoz}>Texto a Voz</Button>
                </Card>
                </Row>
                </Col>
            </div>
        </div>
    ) : 
    (
        <div>
            <p>En espera</p>
        </div>
    )
}

export default FragmentDetail
