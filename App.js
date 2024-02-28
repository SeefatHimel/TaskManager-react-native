import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import TaskItem from "./components/taskItem";
import TaskInput from "./components/taskInput";
import { StatusBar } from "expo-status-bar";
import AuthComponent from "./screens/login";
import TaskManagement from "./screens/taskManagement";

export default function App() {
  return (
    <>
      <AuthComponent />
      {/* <TaskManagement /> */}
    </>
  );
}
