import React from "react";
import {
  StyleSheet,
  View,
  Button,
  SafeAreaView,
  TextInput,
} from "react-native";
import uuid from "react-native-uuid";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../state/actionCreators/Index";
import { StoreLocalData } from "../services/LocalStorage";

const LoginForm = ({ navigation }) => {
  const dispatch = useDispatch();
  const { userLogin } = bindActionCreators(actionCreators, dispatch);

  const handleLoginButton = (user) => {
    const newUser = { id: uuid.v4(), email: user.email };
    userLogin(newUser);
    const newToken = uuid.v4();
    StoreLocalData("token", newToken);
    navigation.navigate("Home");
  };

  const handleSkipButton = () => {
    userLogin(null);
    navigation.navigate("Home");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => handleLoginButton(values)}
      >
        {({ handleBlur, handleChange, handleSubmit, values }) => (
          <View style={styles.form}>
            <TextInput
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              values={values.email}
              placeholder="ex. john.doe@email.com"
              style={styles.input}
            />
            <TextInput
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              values={values.password}
              placeholder="Not 1234"
              style={styles.input}
            />
            <Button onPress={handleSubmit} title="Login" />
          </View>
        )}
      </Formik>
      <View>
        <Button onPress={handleSkipButton} title="Skip" />
      </View>
    </SafeAreaView>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
});
