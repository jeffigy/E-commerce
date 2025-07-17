import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useStore } from "@/store";
import { useLoginMutation, useSignupMutation } from "@/hooks/useAuth";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { InputField, Input, InputIcon, InputSlot } from "@/components/ui/input";
import { EyeIcon, EyeOffIcon } from 'lucide-react-native';
import { FormControl } from "@/components/ui/form-control";
import { HStack } from "@/components/ui/hstack";
import { Button, ButtonText } from "@/components/ui/button";


const login = () => {
    const {mutateAsync: login , error: loginError} = useLoginMutation()
    const {mutateAsync: signup, error: signupError} = useSignupMutation()
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {token} = useStore.getState()
    const isLoggedIn = !!token;

const handleShowPassword = () => {
    setShowPassword((showState) => !showState)
}



  return (
    <FormControl
    isInvalid={!!loginError || !!signupError}
    className="p-4 border rounded-lg max-w-[500px] border-outline-300 bg-white m-2"
  >
    <VStack space="xl">
      <Heading className="text-typography-900 leading-3 pt-3">Login</Heading>
      <VStack space="xs">
        <Text className="text-typography-500 leading-1">Email</Text>
        <Input>
          <InputField value={email} onChangeText={setEmail} type="text" />
        </Input>
      </VStack>
      <VStack space="xs">
        <Text className="text-typography-500 leading-1">Password</Text>
        <Input className="text-center">
          <InputField
            value={password}
            onChangeText={setPassword}
            type={showPassword ? 'text' : 'password'}
          />
          <InputSlot className="pr-3" onPress={handleShowPassword}>
            {/* EyeIcon, EyeOffIcon are both imported from 'lucide-react-native' */}
            <InputIcon
              as={showPassword ? EyeIcon : EyeOffIcon}
              className="text-darkBlue-500"
            />
          </InputSlot>
        </Input>
      </VStack>
      <HStack space="sm">
        <Button
          className="flex-1"
          variant="outline"
          onPress={() => signup({email, password})}
        >
          <ButtonText>Sign up</ButtonText>
        </Button>
        <Button className="flex-1" onPress={() => login({email, password})}>
          <ButtonText>Sign in</ButtonText>
        </Button>
      </HStack>
    </VStack>
  </FormControl>
  );
};

export default login;

const styles = StyleSheet.create({});
