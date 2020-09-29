import React from 'react'
import {resumen} from "../services"
import { Form, Input, Button} from "antd"

const Fragments = ({history}) => {
    const [form] = Form.useForm()
        
    async function summarize(values) {
        await resumen(values)
        history.push("/fragments")
    }  

    return (
        <div>
            <Form layout='vertical' name='basic' form={form} onFinish={summarize}>
            <Form.Item
            label='Nombre'
            name='name'
            rules={[{ required: true, message: "Nombre del resumen." }]}>
            <Input />
            </Form.Item>
            <Form.Item
            label='Texto a Resumir'
            name='txt'
            rules={[{ required: true, message: "Introduce el texto a resumir." }]}>
            <Input />
            </Form.Item>
            <Form.Item
            label='Cantidad de oraciones.'
            name='sentences'
            rules={[{ required: true, message: "Introduce la cantidad de oraciones." }]}>
            <Input />
            </Form.Item>
            <Form.Item>
            <Button type='primary' htmlType='submit'>
                Resumir
            </Button>
            </Form.Item>
        </Form>
        </div>
    )
}

export default Fragments
