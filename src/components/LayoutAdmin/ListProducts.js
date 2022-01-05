import React from 'react';
import 'antd/dist/antd.css';
import { Table, Space, Button, Image } from 'antd';
import { Link } from 'react-router-dom';
import { Rate } from 'antd';

const ListProducts = (props) => {

    const columns = [
        {
            title: 'STT',
            dataIndex: 'id',
            key: 'id',
            render: (index = 1) => (index)
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'rate',
            dataIndex: 'rate',
            key: 'rate',
            render: (rate) => <Rate allowHalf defaultValue={2.5} />
        },
        {
            title: 'image',
            dataIndex: 'image',
            key: 'image',
            render: (thumbnail_cdn) => (
                <Image
                    width={80}
                    src={"https://i.pinimg.com/564x/d7/bd/23/d7bd2389fd03889edc309504c3377409.jpg"}
                />
            ),
        },
        {
            title: 'action',
            dataIndex: 'action',
            render: (_, product) => (

                <Space size="middle">
                    <Button type="primary">
                        <Link to={`/admin/products/edit/${product.id}`}  >Edit</Link>
                    </Button>
                    <Button type="danger" onClick={() => props.onDelete(product.id)}>
                        Delete
                    </Button>
                </Space >
            )
        },
    ];

    return (
        <div>
            <Table rowKey={'id'} columns={columns} dataSource={props.list} />
        </div>
    )
}

export default ListProducts
