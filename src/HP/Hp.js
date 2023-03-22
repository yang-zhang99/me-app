import React from 'react';
import {AntDesignOutlined} from '@ant-design/icons';
import {Avatar, Col, Form, Progress, Row} from 'antd';

const Hp = (props) => {
    return (
        <Form className=' ued-detail-wrapper '>
            <Row gutter={24} className="writable-row">
                <Col span={13} style={{ textAlign: 'center' }} />
                <Col span={1} style={{textAlign: 'center' }} >
                    <h1>
                        43
                    </h1>
                </Col>
                <Col span={8} style={{ textAlign: 'center' }}>
                    <Progress percent={50} status="active" />
                    <Progress percent={24} status="active" />
                </Col>
                <Col span={2} style={{ textAlign: 'center' }}>
                    <Avatar
                        size={{xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100}}
                        icon={<AntDesignOutlined/>}
                    />
                </Col>
            </Row>
        </Form>
    )
}

export default Hp