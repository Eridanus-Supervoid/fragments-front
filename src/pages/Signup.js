import React from "react"
import { Form, Input, Button, Divider, Row, Col  } from "antd"
import { signup } from "../services"

let baseURL

process.env.NODE_ENV === "production"
    ? (baseURL = "https://murmuring-reaches-95521.herokuapp.com")
    : (baseURL = "http://localhost:3000")

const Signup = ({ history }) => {
    const [form] = Form.useForm()

    async function signupProcess(values) {
        await signup(values)
        history.push("/login")
    }
    return (
            <div>
            <Form layout='vertical' name='basic' form={form} onFinish={signupProcess}>
                <Form.Item
                label='Name'
                name='name'
                rules={[{ required: true, message: "Please input your name!" }]}>
                <Input />
                </Form.Item>
                <Form.Item
                label='Email'
                name='email'
                rules={[{ required: true, message: "Please input your email!" }]}>
                <Input />
                </Form.Item>
                <Form.Item
                label='Password'
                name='password'
                rules={[{ required: true, message: "Please input your password!" }]}>
                <Input.Password />
                </Form.Item>
                <Form.Item>
                <Button type='primary' htmlType='submit'>
                    Submit
                </Button>
                </Form.Item>
            </Form>

            <Divider>Or</Divider>
                <br />
                <Row gutter={16}>
                    <Col span={12}>
                    <Button type='primary' block>
                        <a href={`${baseURL}/auth/facebook`}>Login with Facebook</a>
                    </Button>
                    </Col>
                    <Col span={12}>
                    <Button danger type='primary' block>
                        <a href={`${baseURL}/auth/google`}>Login with Google</a>
                    </Button>
                    </Col>
                </Row>
            </div>
    )
}

export default Signup