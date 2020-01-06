import React, { Component } from 'react'
import { StyleSheet } from 'react-native'

import { Button, Block, Text } from '../components'

export default class Welcome extends Component {

    static navigationOptions = {
        header: null,
    }
    render() {
        return (
            <Block>
                <Text> Welcome </Text>
            </Block>
        )
    }
}

const styles = StyleSheet.create({

})
