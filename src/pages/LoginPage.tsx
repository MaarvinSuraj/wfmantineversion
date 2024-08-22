import { Button, Card, Input, PasswordInput, Stack, Text } from '@mantine/core';
import React, { useState } from 'react';

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [visible, { toggle }] = useState(false);

  const handleNextClick = () => {
    if (!validateEmail(email)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
      setIsEmailValid(true);
    }
  };

  const handleLoginClick = () => {
    if (password !== 'user@123') {
      setPasswordError('Incorrect password');
    } else {
      // Navigate to home page
      window.location.href = '/';
    }
  };

  return (
    <div className='pageSegment' style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div className='pagecontainer' style={{ width: '100%', height: '90vh', display: 'flex', flexDirection: 'row' }}>
        <div className='designDiv' style={{ width: '66%', height: '100%', backgroundImage: 'linear-gradient(45deg,#003087, #0057B7)', borderRadius: '0 0 80px 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className='content' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <p style={{ fontSize: '48px', fontWeight: 600, color: 'white', marginBottom: '-8px' }}>Welcome to Wayfinding</p>
            <p style={{ fontSize: '18px', fontWeight: 300, color: 'white' }}>Tag line Tag line Tag line Tag line Tag line Tag line Tag line Tag line</p>
          </div>
        </div>
        <div className='LoginSegment' style={{ width: '34%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Card
            shadow="md"
            padding="xl"
            component="a"
            style={{ width: '380px', paddingBottom: '36px', marginTop: '30px' }}
          >
            <div style={{ marginBottom: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Text size="xl" fw={500} style={{ marginBottom: '-6px', color: '#0057B7' }}>WayFinding</Text>
              <Text size="xl" fw={500} style={{ marginBottom: '', color: '#0057B7' }}>CMS</Text>
            </div>
            <Stack>
              <Input.Wrapper
                label="Username"
                withAsterisk
                size="md"
                labelProps={{ style: { textAlign: 'left', width: '100%' } }}
                error={emailError}
              >
                <Input
                  size="md"
                  placeholder="Enter username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Input.Wrapper>
              {isEmailValid && (
                <PasswordInput
                  withAsterisk
                  label="Password"
                  size="md"
                  visible={visible}
                  onVisibilityChange={toggle}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  labelProps={{ style: { textAlign: 'left', width: '100%' } }}
                  error={passwordError}
                />
              )}
              <Button
                variant="filled"
                size="md"
                style={{ marginTop: '4px' }}
                color="#002D56"
                onClick={isEmailValid ? handleLoginClick : handleNextClick}
              >
                {isEmailValid ? 'Login' : 'Next'}
              </Button>
            </Stack>
          </Card>
        </div>
      </div>
      <div className='footer'>
        <div className='content' style={{ display: 'flex', flexDirection: 'row', alignItems: 'end', justifyContent: 'flex-start', gap: '16px', paddingLeft: '24px' }}>
          <p style={{ fontSize: '12px', fontWeight: 400, color: 'grey', }}>2023 HID Global Corporation/ASSA ABLOY. All rights reserved</p>
          <p style={{ fontSize: '14px', fontWeight: 400, color: '#D3D3D3', }}>|</p>
          <p style={{ fontSize: '12px', fontWeight: 400, color: 'grey', textDecoration: 'underline' }}>Privacy Statement</p>
          <p style={{ fontSize: '14px', fontWeight: 400, color: '#D3D3D3', }}>|</p>
          <p style={{ fontSize: '12px', fontWeight: 400, color: 'grey', textDecoration: 'underline' }}>Terms of Use</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
