/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Loading from './src/screen/Loading/Loading';
import DangNhap from './src/screen/DangNhap/DangNhapChuTau';
import DangKy from './src/screen/DangKy/DangKy';
import OTPXacNhan from './src/screen/DangKy/OTPXacNhan';
import QuenMatKhau from './src/screen/QuenMatKhau/QuenMatKhau';
import OTPQuenMatKhau from './src/screen/QuenMatKhau/OTPQuenMatKhau';
import NhapMatKhauMoi from './src/screen/QuenMatKhau/NhapMatKhauMoi';
import Home from './src/screen/Home/Home';
import MyTabs from './src/components/Navbar';
import ThongBao from './src/screen/Thongbao/ThongBao';

const stack = createNativeStackNavigator();

const App = () => {
  return  <>
  <NavigationContainer>
    <stack.Navigator> 

      <stack.Screen name={'Loading'} component={Loading} options={{headerShown: false}} /> 
      <stack.Screen name={'DangNhap'} component={DangNhap} options={{headerShown: false}} />
      <stack.Screen name={'DangKy'} component={DangKy} options={{headerShown: false}}/>
      <stack.Screen name={'OTPXacNhan'} component={OTPXacNhan} options={{headerShown: false}} />
      <stack.Screen name={'QuenMatKhau'} component={QuenMatKhau} options={{headerShown: false}} />
      <stack.Screen name={'OTPQuenMatKhau'} component={OTPQuenMatKhau} options={{headerShown: false}} />
      <stack.Screen name={'NhapMatKhauMoi'} component={NhapMatKhauMoi} options={{headerShown: false}} />
      <stack.Screen name={'Home'} component={Home} options={{headerShown: false}} />
      <stack.Screen name={'Home'} component={ThongBao} options={{headerShown: false}} />
      <stack.Screen name={'Home'} component={Home} options={{headerShown: false}} />
      <stack.Screen name={'Home'} component={Home} options={{headerShown: false}} />
      
      <stack.Screen name={'MyTabs'} component={MyTabs} options={{headerShown: false}} />
    </stack.Navigator>
  </NavigationContainer>
  </>
}

export default App;
