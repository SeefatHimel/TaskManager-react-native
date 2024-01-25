import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import TaskItem from "./components/taskItem";
import TaskInput from "./components/taskInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
    const [tasks, setTasks] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const addTaskHandler = (task) => {
        console.log("🚀 ~ addTaskHandler ~ task:", task);
        if (task.length > 0) {
            setTasks((currentTasks) => [
                ...currentTasks,
                { title: task, id: Math.random().toString() },
                // { title: task, key: Math.random().toString() },
            ]);
        }
    };
    const deleteTaskHandler = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };
    return (
        <>
            <StatusBar style="light" />
            <View style={styles.container}>
                <Button
                    title="Add New Task"
                    onPress={() => setIsModalOpen(true)}
                />
                <TaskInput
                    {...{ addTaskHandler, isModalOpen, setIsModalOpen }}
                />
                <View style={styles.taskListContainer}>
                    <FlatList
                        data={tasks}
                        renderItem={(itemData) => (
                            <TaskItem
                                item={itemData.item}
                                deleteTask={deleteTaskHandler}
                            />
                        )}
                        keyExtractor={(item, index) => {
                            return item.id;
                        }}
                        style={styles.taskListScrollContainer}
                    />
                    {/* <ScrollView style={styles.taskListScrollContainer}>
                    {tasks?.mapa((task, index) => (
                        <View key={index} style={styles.taskStyle}>
                            <Text style={styles.taskTitle}> {task}</Text>
                        </View>
                    ))}
                </ScrollView> */}
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 20,
        flex: 1,
    },
    taskListContainer: {
        borderTopWidth: 1,
        paddingTop: 10,
        flex: 5,
    },
    taskListScrollContainer: {
        gap: 12,
        height: "100%",
    },
});
