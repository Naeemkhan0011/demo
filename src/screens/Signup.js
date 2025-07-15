import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

const Signup = ({navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSecure, setIsSecure] = useState(true);
    const [isConfirmSecure, setIsConfirmSecure] = useState(true);

    const handleSignup = () => {
        // Handle signup logic here
        navigation.navigate('Home')
        console.log('Signup attempted with:', { name, email, password });
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1, backgroundColor: '#f5f5f5' }}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    padding: 20,
                }}>
                   
                        {/* Logo */}
                        <View style={{ alignItems: 'center', marginBottom: 30 }}>
                            <Image
                                source={require('../assets/images/logo.png')} // Replace with your logo
                                style={{ width: 100, height: 100 }}
                            />
                            <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 10, color: '#333' }}>
                                Create Account
                            </Text>
                            <Text style={{ fontSize: 14, color: '#666', marginTop: 5 }}>
                                Join us today
                            </Text>
                        </View>

                        {/* Name Input */}
                        <View style={{ marginBottom: 15 }}>
                            <Text style={{ fontSize: 14, marginBottom: 5, color: '#555' }}>Full Name</Text>
                            <TextInput
                                placeholder="Enter your full name"
                                value={name}
                                onChangeText={setName}
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

                        {/* Email Input */}
                        <View style={{ marginBottom: 15 }}>
                            <Text style={{ fontSize: 14, marginBottom: 5, color: '#555' }}>Email</Text>
                            <TextInput
                                placeholder="Enter your email"
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
                        <View style={{ marginBottom: 15 }}>
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
                                    placeholder="Create password"
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
                            <Text style={{ fontSize: 12, color: '#666', marginTop: 5 }}>
                                Must be at least 8 characters
                            </Text>
                        </View>

                        {/* Confirm Password Input */}
                        <View style={{ marginBottom: 20 }}>
                            <Text style={{ fontSize: 14, marginBottom: 5, color: '#555' }}>Confirm Password</Text>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                borderWidth: 1,
                                borderColor: '#ddd',
                                borderRadius: 8,
                                backgroundColor: '#fafafa',
                            }}>
                                <TextInput
                                    placeholder="Confirm your password"
                                    value={confirmPassword}
                                    onChangeText={setConfirmPassword}
                                    secureTextEntry={isConfirmSecure}
                                    style={{
                                        flex: 1,
                                        padding: 12,
                                        fontSize: 16,
                                    }}
                                />
                                <TouchableOpacity
                                    onPress={() => setIsConfirmSecure(!isConfirmSecure)}
                                    style={{ padding: 10 }}
                                >
                                    <Text style={{ color: '#666' }}>{isConfirmSecure ? 'Show' : 'Hide'}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Terms Checkbox */}
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                            <TouchableOpacity style={{
                                width: 20,
                                height: 20,
                                borderWidth: 1,
                                borderColor: '#ddd',
                                borderRadius: 4,
                                marginRight: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#fafafa',
                            }}>
                                {/* Checkmark would go here when checked */}
                            </TouchableOpacity>
                            <Text style={{ fontSize: 14, color: '#666' }}>
                                I agree to the <Text style={{ color: '#3498db' }}>Terms</Text> and <Text style={{ color: '#3498db' }}>Privacy Policy</Text>
                            </Text>
                        </View>

                        {/* Sign Up Button */}
                        <TouchableOpacity
                            onPress={handleSignup}
                            style={{
                                backgroundColor: '#3498db',
                                padding: 15,
                                borderRadius: 8,
                                alignItems: 'center',
                                marginBottom: 15,
                            }}
                        >
                            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Sign Up</Text>
                        </TouchableOpacity>

                        {/* Login Link */}
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={{ color: '#666' }}>Already have an account? </Text>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('Login')
                            }}>
                                <Text style={{ color: '#3498db', fontWeight: 'bold' }}>Login</Text>
                            </TouchableOpacity>
                        </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default Signup;