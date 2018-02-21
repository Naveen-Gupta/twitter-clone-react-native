import React, { Component } from 'react';
import styled from 'styled-components/native';
import Touchable from '@appandflow/touchable';
import { MaterialIcons } from '@expo/vector-icons';
import { Platform, Keyboard } from 'react-native';

import { colors } from '../utils/constants';

const Root = styled(Touchable).attrs({
    feedback: 'none'
}) `
    flex: 1;
    position: relative;
`;

const BackButton = styled(Touchable).attrs({
    feedback: 'opacity',
    hitSlop: { top: 20, bottom: 20, right: 20, left: 20 }
}) `
    justifyContent: center;
    alignItems: center;
    position: absolute;
    top: 5%;
    left: 5%;
    zIndex: 1;
`;

const Wrapper = styled.View`
    alignSelf: stretch;
    alignItems: center;
    justifyContent: center;
    flex: 1;
`;

const ButtonConfirm = styled(Touchable).attrs({
    feedback: 'opacity',
}) `position: absolute;
    backgroundColor: ${props => props.theme.PRIMARY}
    width: 70%;
    bottom: 15%;
    height: 50;
    borderRadius: 10;    
    justifyContent: center;
    alignItems: center;
    shadowOpacity: 0.4;
    shadowRadius: 5;
    shadowOffset: 0px 4px;
    shadowColor: #000;
    left:15%;
`;

const ButtonConfirmText = styled.Text`
    color: ${props => props.theme.WHITE};
    fontWeight: 600;
`;

const InputWrapper = styled.View`
    height: 50;
    width: 70%;
    borderBottomWidth: 2;
    borderBottomColor: ${props => props.theme.LIGHT_GRAY};
    marginVertical: 5;
    justifyContent: flex-end;
`;

const Input = styled.TextInput.attrs({
    placeholderTextColor: colors.LIGHT_GRAY,
    selectionColor: colors.PRIMARY,
    autoCorrect: false,
}) `
    height: 30;
    color: ${props => props.theme.WHITE};   
    borderBottomColor: ${props => props.theme.LIGHT_GRAY};
`;

class SignupForm extends Component {
    state = {};

    _onOutidePress = () => Keyboard.dismiss();

    _onChangeText = (text, type) => {
        this.setState({
            [type]: text
        });
    }

    _checkDisabled = () => {
        const { fullname, email, password, username } = this.state;
        if (!fullname || !email || !password || !username) {
            return true;
        }
        return false;
    }

    render() {
        return (
            <Root onPress={this._onOutidePress}>
                <BackButton onPress={this.props.onBackButtonPress}>
                    <MaterialIcons
                        color={colors.WHITE}
                        size={30}
                        name="arrow-back"
                    />
                </BackButton>
                <Wrapper>
                    <InputWrapper>
                        <Input
                            placeholder="Full Name"
                            underlineColorAndroid={'transparent'}
                            autoCapitalize='words'
                            onChangeText={text => this._onChangeText(text, 'fullname')}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Input
                            placeholder="Email"
                            underlineColorAndroid={'transparent'}
                            keyboardType="email-address"
                            onChangeText={text => this._onChangeText(text, 'email')}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Input
                            placeholder="Password"
                            underlineColorAndroid={'transparent'}
                            secureTextEntry
                            onChangeText={text => this._onChangeText(text, 'password')}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Input
                            placeholder="Username"
                            underlineColorAndroid={'transparent'}
                            autoCapitalize="none"
                            onChangeText={text => this._onChangeText(text, 'username')}
                        />
                    </InputWrapper>
                </Wrapper>
                <ButtonConfirm disabled={this._checkDisabled()}>
                    <ButtonConfirmText>
                        Sign Up
                    </ButtonConfirmText>
                </ButtonConfirm>
            </Root>
        );
    }
}

export default SignupForm;
