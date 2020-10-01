import React, {useContext} from 'react'
import { MyContext } from "../context"
import {getSummarize} from "../services"
import { Form, Input, Button, InputNumber} from "antd"
import {useHistory} from "react-router-dom"

const NewFragment = () => {
    const history = useHistory()
    const [form] = Form.useForm()
    const { user } = useContext(MyContext)
        
    async function summarize(values) {
        const fragment = await getSummarize({...values, user})
        console.log(fragment)
        console.log(fragment.data._id)
        history.push(`/fragments/${fragment.data._id}`)
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
            <Input.TextArea />
            </Form.Item>
            <Form.Item
            label='Cantidad de oraciones.'
            name='sentences'
            rules={[{ type: 'number', min:0, max:99, required: true, message: "Introduce la cantidad de oraciones." }]}>
            <InputNumber />
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

export default NewFragment;
