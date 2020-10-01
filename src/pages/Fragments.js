import React, {useState, useEffect, useContext} from 'react'
import { Button, Modal, Typography, Skeleton, Col, Card} from "antd"
import { PlusOutlined } from "@ant-design/icons"
import {getFragments } from "../services/index"
import NewFragment from "../components/NewFragment"
import { MyContext } from "../context"
import { Link } from "react-router-dom"
const {Title} = Typography
const { Meta } = Card



const Fragments = () => {
    const [showModal, setShowModal] = useState(false)
    const [userFragments, setUserFragments] = useState(null)
    const { user } = useContext(MyContext)

    useEffect(() => {
            console.log(user._id)
            const userId = {
                userId: user._id
            }
            async function fetchFragments() {
            const {
                data: {userFragments}
            } = await getFragments(userId)
            console.log(userFragments)
            setUserFragments(userFragments)
            }
            fetchFragments()
    }, [])

    return userFragments ? (
        <div style={{display: "flex", flexDirection: "column", justifyContent:"space-around", alignItems:"center", alignContent:"strech" }}>
            <Button block type='primary' onClick={() => setShowModal(true)}>
                New Fragment
            </Button>
            <Title level={1} style={{margin:"30px"}}>My Fragments</Title>
            <Modal
                title='Create New Fragment'
                visible={showModal}
                onCancel={() => setShowModal(false)}
                footer={[
                <Button type='dashed' danger onClick={() => setShowModal(false)} style={{margin:"30px"}}>
                    Cancel
                </Button>
                ]}>
                <NewFragment/>
            </Modal>
        {userFragments.map(fragment => (
        <Col key={fragment._id} sm={24} md={12} lg={8} style={{margin:"10px", width:"30%"}}>
            <Card
                actions={[
                <Link to={`/fragments/${fragment._id}`}>
                    <PlusOutlined />
                </Link>
                ]}
                hoverable>
                <Meta
                title={fragment.name}
                description={
                    <>
                    <p>{fragment.summarize}</p>
                    </>
                }
                />
            </Card>
        </Col>
    ))}
        </div>
    ): (
        <div style={{ backgroundColor: "black", padding: "1rem" }}>
            <Skeleton active />
        </div>
    )
}

export default Fragments
