import React from 'react';
import { View, Text,TextInput } from 'react-native';
import Tabs from '../shared/Tabs';
import { globalStyles } from '../styles/global';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons'
export default function signup() {
    return (
        <View style={globalStyles.container}>

            
            <MaterialIcons name='person' size={28} />
            <Text>Name</Text>
            <TextInput placeholder="Name" style={globalStyles.input}   onChangeText={value => this.setState({ comment: value })}  />
            {/* <Tabs pageIndex={1} />
            <View style={globalStyles.container}> */}
                {/* <Text style={globalStyles.titleText}>All Ads screen</Text> */}
                {/* <Input
                    placeholder='BASIC INPUT'
                />

                <Input
                    placeholder='INPUT WITH ICON'
                    leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
                />

                <Input
                    placeholder='INPUT WITH CUSTOM ICON'
                    leftIcon={
                        <Icon
                            name='user'
                            size={24}
                            color='black'
                        />
                    }
                />


                <Input
                    placeholder="Comment"
                    leftIcon={{ type: 'font-awesome', name: 'comment' }}
                    // style={styles}
                    // onChangeText={value => this.setState({ comment: value })}
                />


                <Input
                    placeholder='INPUT WITH ERROR MESSAGE'
                    errorStyle={{ color: 'red' }}
                    errorMessage='ENTER A VALID ERROR HERE'
                /> */}

                {/* <Input placeholder="Password" secureTextEntry={true} />
            </View> */}
        </View>

    )
}



