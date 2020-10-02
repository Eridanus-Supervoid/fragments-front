import React, {useState, useEffect} from 'react'
import {getFragment, deleteNoteId, deleteFragmentId} from '../services'
import {Button} from 'antd'
import { Card, Col, Row, Modal } from 'antd';
import NewNote from "../components/NewNote"
import {useHistory} from "react-router-dom"
const { Meta } = Card

const FragmentDetail = ({
    match: {
        params: {fragmentId}
    }
    }) => {

    const [userFragment, setUserFragment] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [newNote, setnewNote] = useState(false)
    const history = useHistory()

    useEffect(() => {
        async function fetchFragment() {
        const {
            data: {fragment}
        } = await getFragment(fragmentId)
        console.log(fragment)
        setUserFragment(fragment)
        }
        fetchFragment()
    }, [newNote, fragmentId])

    async function deleteNote(noteId) {
        await deleteNoteId(noteId)
        history.push(`/fragments/${fragmentId}`)
    }

    async function deleteFragment(fragmentId) {
        await deleteFragmentId(fragmentId)
        history.push(`/fragments`)
    }

    const textoVoz = () => {
        if ('speechSynthesis' in window) {
            var myTimeout;
            function myTimer() {
                window.speechSynthesis.pause();
                window.speechSynthesis.resume();
                myTimeout = setTimeout(myTimer, 10000);
            }
                window.speechSynthesis.cancel();
                myTimeout = setTimeout(myTimer, 10000);
                var toSpeak = userFragment.summary;
                var msg = new SpeechSynthesisUtterance(toSpeak);
                var voices = window.speechSynthesis.getVoices();
                console.log(voices)
                msg.voice = voices[5]; 
                msg.volume = 0.5;
                msg.lang = 'es-US';
                msg.onend =  function() { clearTimeout(myTimeout); }
                window.speechSynthesis.speak(msg);
        }else{
            alert("Sorry, your browser doesn't support text to speech!");
        }
    }

    return userFragment ?(
        <div>
            <div>
                <Button block type='primary' onClick={() => setShowModal(true)}>
                    New Note
                </Button>
                <Modal
                title='Create New Note'
                visible={showModal}
                onCancel={() => setShowModal(false)}
                footer={[
                <Button type='dashed' danger onClick={() => setShowModal(false)} style={{margin:"30px"}}>
                    Cancel
                </Button>
                ]}>
                <NewNote fragmentId={fragmentId} setnewNote={setnewNote}/>
                </Modal>
                <Col>
                <Card title={userFragment.name} bordered={false} style={{ width: "96%", margin:"30px" }}>
                <p>{userFragment.summary}</p>
                <Button onClick={textoVoz}>Texto a Voz</Button>
                <Button onClick={() => window.speechSynthesis.pause()} style={{ margin:"5px" }}>Pause</Button>
                <Button onClick={() => window.speechSynthesis.resume()} style={{ margin:"5px" }}>Play</Button>
                <Button onClick={() => window.speechSynthesis.cancel()} style={{ margin:"5px" }}>Stop</Button>
                <Button type='dashed' danger onClick={() => deleteFragment(fragmentId)} style={{ margin:"5px" }}>Delete</Button>
                </Card>
                <Row style={{ margin:"20px" }}>
                {userFragment.noteId.map(note => (
                    <Col key={note._id}>
                    <Card style={{ margin:"10px" }}>
                        <Meta
                        title={note.name}
                        description={
                            <p>{note.summary}</p>
                        }
                        />
                        <Button type='dashed' danger onClick={() => deleteNote(note._id)} >Delete</Button>
                    </Card>
                    </Col>
                ))}
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
