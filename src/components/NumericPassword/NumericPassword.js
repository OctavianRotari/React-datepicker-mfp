import React, { Component } from 'react';
import { Modal, View, TextInput, StyleSheet} from 'react-native';
import Keyboard from 'react-native-keyboard';

let model = {
    _keys: [],
    _listeners: [],
    addKey(key) {
        this._keys.push(key);
        this._notify();
    },
    delKey() {
        this._keys.pop();
        this._notify();
    },
    clearAll() {
        this._keys = [];
        this._notify();
    },
    getKeys() {
        return this._keys;
    },
    onChange(listener) {
        if (typeof listener === 'function') {
            this._listeners.push(listener);
        }
    },
    _notify() {
        this._listeners.forEach((listner) => {
            listner(this);
        });
    }
};

class NumericPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    componentDidMount() {
        model.onChange((model) => {
            this.setState({text: model.getKeys().join('')});
        });
    }

    _handleClear() {
        model.clearAll();
    }

    _handleDelete() {
        model.delKey();
    }

    _handleKeyPress(key) {
        model.addKey(key);
    }

    render() {
        console.log(this.state.text);
        return (
            <Modal
                style={
                    {
                        flex: 1,
                        flexDirection: 'column',
                        alignSelf: 'stretch',
                        bottom: 0
                    }
                }
                animationType={"fade"}
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={() => {alert("Modal has been closed.")}} >
                <View style={
                    {
                        flex: 1, 
                        backgroundColor: 'rgba(0,0,0,0.54)',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }
                }>
                <TextInput 
                    style={{textAlign: 'center', color: '#fff'}} 
                    secureTextEntry={true}
                    value={this.state.text}
                />
            </View>
            <Keyboard
                style={{flex:1}}
                keyboardType="decimal-pad"
                onClear={this._handleClear.bind(this)}
                onDelete={this._handleDelete.bind(this)}
                onKeyPress={this._handleKeyPress.bind(this)}
            />
        </Modal>
        );
    }
}

export default NumericPassword;
