import * as React from 'react';
import { View, Text,Button ,TextInput,StyleSheet, ImageBackground} from 'react-native';
import { NavigationContainer,useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const backgroundImage = require('./assets/store.jpg');

function HomeScreen({navigation}) {
 return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
 <View style={styles.container}>
 <Text style={styles.title}>Welcome to the store Management System</Text>
 
 <Button style={styles.button,styles.buttonText} title="Login" onPress={()=> navigation.navigate('LoginScreen')}> </Button> <br></br>
 <Button style={styles.button,styles.buttonText} title="Signup" onPress={()=> navigation.navigate('SignupScreen')}> </Button>
 
 </View>
 </ImageBackground>
 );
}
function LoginScreen({navigation}) {
 
 return (
   
 <View style={styles.container1}>
 <Text style={styles.title}>Login Screen</Text>
 
 
 
 <TextInput style={styles.input} placeholder="Enter your Email"/>
    
 <TextInput style={styles.input} placeholder="Enter your password"/>
 <Button style={styles.button,styles.buttonText} title="Login" > </Button> <br></br>

<Button style={styles.button,styles.buttonText} title="Signup" onPress={()=> navigation.navigate('SignupScreen')}> </Button>
 
 </View>

 );
}
function SignupScreen({navigation}){
  
  return(
    <View style={styles.container1}>  
    <Text style={styles.title}>Sign up</Text>
    <TextInput style={styles.input} placeholder="Enter your Email"/>
    <TextInput style={styles.input} placeholder="Enter your password"/>
     <TextInput style={styles.input} placeholder="Repeat  password"/>


    
    
    <Button style={styles.button,styles.buttonText} title="Register" onPress={()=> navigation.navigate('LoginScreen')} />
    </View>
  )
}
const Stack = createNativeStackNavigator();
function App() {
 return (
 <NavigationContainer>
    <Stack.Navigator>
     <Stack.Screen name="Home" component={HomeScreen} />
     <Stack.Screen name="LoginScreen" component={LoginScreen} />
     <Stack.Screen name="SignupScreen" component={SignupScreen} />
    </Stack.Navigator>
 
 </NavigationContainer>
 );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor:'skyblue'
    
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent:'center',
    marginBottom: 16,
    color: 'Black',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'White',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 12,
    paddingLeft: 8,
  },
  button: {
    backgroundColor:'yellow',
    width: '100%',
    height: 40,
    justifyContent: 'center',
    borderWidth: 1,
    paddingLeft: 8,
    borderRadius: 4,
    
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  
});



export default App;