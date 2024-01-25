import { Button, Pressable, StyleSheet, Text, View } from "react-native";

function TaskItem({ item, deleteTask }) {
    const handleDeleteTask = () => {
        deleteTask(item.id);
    };
    return (
        <View style={styles.taskStyle}>
            <Pressable
                style={styles.pressable}
                android_ripple={{ color: "#f922f0" }}
            >
                <Text style={styles.taskTitle}>{item.title}</Text>
                <Button
                    title="Delete"
                    onPress={handleDeleteTask}
                    color={"#f31282"}
                />
            </Pressable>
        </View>
    );
}
export default TaskItem;
const styles = StyleSheet.create({
    taskStyle: {
        borderColor: "#870fa5",
        backgroundColor: "#870fa5",
        borderWidth: 1,
        marginTop: 5,
        borderRadius: 6,
        color: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    pressable: {
        padding: 10,
        color: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    taskTitle: {
        color: "white",
        width: "80%",
    },
});
