import { useState } from "react";
import {
    Button,
    Image,
    Modal,
    StyleSheet,
    TextInput,
    View,
} from "react-native";

function TaskInput({ addTaskHandler, isModalOpen, setIsModalOpen }) {
    const [task, setTask] = useState("");
    const handleChangeText = (text) => {
        setTask(text);
    };
    const handleAddTask = () => {
        addTaskHandler(task);
        setTask("");
        setIsModalOpen(false);
    };
    return (
        <Modal
            visible={isModalOpen}
            animationType="fade"
            style={styles.modalStyle}
        >
            <View style={styles.inputContainer}>
                <Image
                    style={styles.imageStyle}
                    source={require("../assets/images/to-do-list.png")}
                />
                <TextInput
                    placeholder="Enter Task Name"
                    placeholderTextColor={"#FFFFFF"}
                    style={styles.textInput}
                    value={task}
                    onChangeText={handleChangeText}
                />
                <View style={styles.buttonContainer}>
                    <Button
                        title="Add Task"
                        onPress={handleAddTask}
                        color={"#5e0acc"}
                    />
                    <Button
                        title="Cancel"
                        onPress={() => setIsModalOpen(false)}
                        color={"#f31282"}
                    />
                </View>
            </View>
        </Modal>
    );
}
export default TaskInput;
const styles = StyleSheet.create({
    modalStyle: {
        alignContent: "center",
    },
    imageStyle: {
        height: 90,
        width: 90,
        margin: 20,
        backgroundColor: "white",
    },
    inputContainer: {
        color: "white",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
        paddingBottom: 20,
        backgroundColor: "#1e085a",
        height: "100%",
    },
    buttonContainer: {
        flexDirection: "row",
        width: "60%",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 12,
        // paddingBottom: 20,
        // flex: 1,
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "80%",
        color: "#ffffff",
        borderRadius: 6,
        padding: 8,
    },
});
