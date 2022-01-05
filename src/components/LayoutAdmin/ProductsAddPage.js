import React, { useState } from 'react';

import { Form, Input, Button } from 'antd';
import { useHistory } from 'react-router-dom';

const ProductsAddPage = (props) => {

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")


    const [form] = Form.useForm();
    const [requiredMark, setRequiredMarkType] = useState('optional');
    const onRequiredTypeChange = ({ requiredMarkValue }) => {
        setRequiredMarkType(requiredMarkValue);
    };


    const history = useHistory()
    const onHandleSubmit = () => {
        const newProduct = {
            name: name, 
            price: price,
        }
        props.onAdd(newProduct)
        history.push('/admin/listproduct')
    }
    return (
        <Form
            form={form}
            layout="vertical"
            initialValues={{
                requiredMarkValue: requiredMark,
            }}
            onValuesChange={onRequiredTypeChange}
            requiredMark={requiredMark}
        >
            <Form.Item label="Field A" required >
                <Input placeholder="input placeholder" onChange={(e) => setName(e.target.value)} />
            </Form.Item>
            <Form.Item label="Field B" required >
                <Input type="number" placeholder="input placeholder" onChange={(e) => setPrice(e.target.value)} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" onClick={onHandleSubmit}>Submit</Button>
            </Form.Item>
        </Form>
    );
}

export default ProductsAddPage

