import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import ProductAPI from '../../api/productAPI';
import { useParams } from 'react-router-dom';

const ProductEditPage = (props) => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const { id } = useParams()


    const [form] = Form.useForm();
    const [requiredMark, setRequiredMarkType] = useState('optional');
    const onRequiredTypeChange = ({ requiredMarkValue }) => {
        setRequiredMarkType(requiredMarkValue);
    };
    const history = useHistory()

    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await ProductAPI.get(id)
                setName(data.name)
                setPrice(data.price)
            } catch (error) {
                console.log(error)
            }
        }
        getProduct()
    }, [])

    const handleSubmit = () => {
        const newProduct = {
            id: id,
            name: name,
            price: price,
        }
        props.onEdit(newProduct)
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
                <Input placeholder="input placeholder" value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Item>
            <Form.Item label="Field B" required >
                <Input type="number" placeholder="input  placeholder" value={price} onChange={(e) => setPrice(e.target.value)} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" onClick={handleSubmit}>Edit</Button>
            </Form.Item>
        </Form>
    )
}

export default ProductEditPage
