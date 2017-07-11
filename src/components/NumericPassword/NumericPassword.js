import React, { Component } from 'react';
import _ from 'lodash';
import { TouchableOpacity, Modal, View, TextInput, StyleSheet} from 'react-native';
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
    _resetKeys() {
        this._keys = [];
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
            text: '',
            modalVisible: true,
            pass: ["9","9","9","9"]
        };
        this._handleKeyPress = this._handleKeyPress.bind(this);
    }

    componentDidMount() {
        model.onChange((model) => {
            if(model._keys.length === 4) {
                this._checkPassword(model._keys);
                model._resetKeys();
                this.setState({text: ''});
            }
            this.setState({text: model.getKeys().join('')});
        });
    }

    _checkPassword(password) {
        if(_.isEqual(password, this.state.pass)) {
            this.props.handleAuthentication(true);
        } else {
            this.props.handleAuthentication(false);
        }
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
                <TouchableOpacity 
                    activeOpacity={1}
                    onPress={this.props.handlePopupDismissed}
                    style={
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
                    secureTextEntry={ true }
                    value={this.state.text}
                />
            </TouchableOpacity>
            <Keyboard
                style={{flex:1}}
                keyboardType="number-pad"
                onClear={this._handleClear.bind(this)}
                onDelete={this._handleDelete.bind(this)}
                onKeyPress={this._handleKeyPress.bind(this)}
            />
        </Modal>
        );
    }
}

export default NumericPassword;
