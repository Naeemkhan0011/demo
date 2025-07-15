import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import jestConfig from '../../jest.config';
import axios from 'axios';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSecure, setIsSecure] = useState(true);

    const API_BASE_URL = 'https://dummyjson.com';

    const handleLogin = () => {
        // Handle login logic here
        console.log('Login attempted with:', email, password);
        navigation.navigate('Home')
    };

    // api call

  



    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{
                flex: 1,
                justifyContent: 'center',
                backgroundColor: '#f5f5f5',
            }}
        >
            <ScrollView
                contentContainerStyle={{
                    flex: 1,
                    justifyContent: 'center',
                    paddingHorizontal: 20
                }}
                showsVerticalScrollIndicator={false}>
                {/* Logo */}
                <View style={{ alignItems: 'center', }}>
                    <Image
                        source={require('../assets/images/logo.png')} // Replace with your logo
                        style={{ width: 100, height: 100 }}
                    />
                    <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 10, color: '#333' }}>
                        Welcome Back
                    </Text>
                    <Text style={{ fontSize: 14, color: '#666', marginTop: 5 }}>
                        Sign in to continue
                    </Text>
                </View>

                {/* Email Input */}
                <View style={{ marginBottom: 15 }}>
                    <Text style={{ fontSize: 14, marginBottom: 5, color: '#555' }}>Email</Text>
                    <TextInput
                        placeholder="Enter your username"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        style={{
                            borderWidth: 1,
                            borderColor: '#ddd',
                            borderRadius: 8,
                            padding: 12,
                            fontSize: 16,
                            backgroundColor: '#fafafa',
                        }}
                    />
                </View>

                {/* Password Input */}
                <View style={{ marginBottom: 20 }}>
                    <Text style={{ fontSize: 14, marginBottom: 5, color: '#555' }}>Password</Text>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderColor: '#ddd',
                        borderRadius: 8,
                        backgroundColor: '#fafafa',
                    }}>
                        <TextInput
                            placeholder="Enter your password"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={isSecure}
                            style={{
                                flex: 1,
                                padding: 12,
                                fontSize: 16,
                            }}
                        />
                        <TouchableOpacity
                            onPress={() => setIsSecure(!isSecure)}
                            style={{ padding: 10 }}
                        >
                            <Text style={{ color: '#666' }}>{isSecure ? 'Show' : 'Hide'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Forgot Password */}
                <TouchableOpacity style={{ alignSelf: 'flex-end', marginBottom: 20 }}>
                    <Text style={{ color: '#3498db', fontSize: 14 }}>Forgot Password?</Text>
                </TouchableOpacity>

                {/* Login Button */}
                <TouchableOpacity
                    onPress={handleLogin}
                    style={{
                        backgroundColor: '#3498db',
                        padding: 15,
                        borderRadius: 8,
                        alignItems: 'center',
                        marginBottom: 15,
                    }}
                >
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Login</Text>
                </TouchableOpacity>

                {/* Sign Up Link */}
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={{ color: '#666' }}>Don't have an account? </Text>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Signup')
                    }}>
                        <Text style={{ color: '#3498db', fontWeight: 'bold' }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default Login;