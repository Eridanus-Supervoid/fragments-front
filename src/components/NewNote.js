import React from "react"
import {createNote} from "../services"
import { Form, Input, Button} from "antd"
import {useHistory} from "react-router-dom"

const NewNote = ({fragmentId, setnewNote}) => {
        
    const history = useHistory()
    const [form] = Form.useForm()
    async function createNoteNow (values) {
        const note = await createNote({...values, fragmentId})
        setnewNote(true)
        history.push(`/fragments/${fragmentId}`)
    }  

    return (
        <div>
            <Form layout='vertical' name='basic' form={form} onFinish={createNoteNow}>
            <Form.Item
            label='Nombre'
            name='name'
            rules={[{ required: true, message: "Nombre de la nota." }]}>
            <Input />
            </Form.Item>
            <Form.Item
            label='Texto de la Nota'
            name='summary'
            rules={[{ required: true, message: "Introduce el texto de tu nota." }]}>
            <Input.TextArea />
            </Form.Item>
            <Form.Item>
            <Button type='primary' htmlType='submit'>
                Guardar
            </Button>
            </Form.Item>
        </Form>
        </div>
    )
}

export default NewNote;
