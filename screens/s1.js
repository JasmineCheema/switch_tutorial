import React from "react"
import {Text,Button} from "react-native"
export default class S1 extends React.Component{
    render(){
        return(
            <Button title="go" onPress={()=>{
this.props.navigation.navigate("s2")
            }}/>
        )
    }


}