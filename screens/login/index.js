import { StyleSheet, Text, View } from "react-native";
import LoginForm from "../../components/auth/components/loginForm";

export default AuthComponent = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.header}>Welcome to my demo App</Text>
      <LoginForm />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    padding: 20,
    marginTop: 20,
    color: "blue",
    fontSize: 20,
    fontWeight: "bold",
  },
});
