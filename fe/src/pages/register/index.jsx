
import { Button, Divider, Form, Input, message, notification } from 'antd';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const navigate = useNavigate();
    const [isSubmit, setIsSubmit] = useState(false);

    const onFinish = async (values) => {
        const { fullName, email, password, phone } = values;
        setIsSubmit(true);
        const res = await callRegister(fullName, email, password, phone);
        setIsSubmit(false);
        if (res?.data?._id) {
            message.success('Account registration successful!');
            navigate('/login');
        } else {
            notification.error({
                message: 'An error occurred',
                description:
                    res.message && Array.isArray(res.message) ? res.message[0] : res.message,
                duration: 5
            });
        }
    };

    return (
        <div className="register-page" style={{ background: '#f0f2f5', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="container" style={{ maxWidth: 600, padding: '40px', background: '#ffffff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '24px' }}>Register an Account</h2>
                <Form
                    name="basic"
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Full name"
                        name="fullName"
                        rules={[{ required: true, message: 'Name cannot be empty!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Email cannot be empty!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Password cannot be blank!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label="Phone number"
                        name="phone"
                        rules={[{ required: true, message: 'Phone number cannot be blank!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" loading={isSubmit} style={{ width: '100%' }}>
                            Register
                        </Button>
                    </Form.Item>

                    <Divider>Or</Divider>

                    <p style={{ textAlign: 'center', marginBottom: 0 }}>
                        Already have an account? <Link to="/login">Login</Link>
                    </p>
                </Form>
            </div>
        </div>
    );
};

export default RegisterPage;
