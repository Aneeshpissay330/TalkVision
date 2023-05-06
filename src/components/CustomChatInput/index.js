import React, { useState, memo } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Platform,
    TouchableOpacity,
    Keyboard,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../../theme/colors";
import { IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Recorder } from "@react-native-community/audio-toolkit";

const CustomChatInput = ({ reply, closeReply, isLeft, username, message, setMessage, showEmojiPicker, setShowEmojiPicker }) => {
    const navigation = useNavigation();
    const recordAudio = () => {
        
    }
    return (
        <View style={styles.container}>
            {reply ? (
                <View style={styles.replyContainer}>
                    <TouchableOpacity
                        onPress={closeReply}
                        style={styles.closeReply}
                    >
                        <Icon name="close" color="#000" size={20} />
                    </TouchableOpacity>
                    <Text style={styles.title}>
                        Response to {isLeft ? username : "Me"}
                    </Text>
                    <Text style={styles.reply}>{reply}</Text>
                </View>
            ) : null}
            <View style={styles.innerContainer}>
                <View style={styles.inputAndMicrophone}>
                    <IconButton
                        icon={showEmojiPicker ? "keyboard-outline" : "emoticon-outline"}
                        size={23}
                        iconColor={colors.primary}
                        onPress={() => {
                            Keyboard.dismiss();
                            setShowEmojiPicker((prev) => !prev);
                        }}
                    />
                    <TextInput
                        multiline
                        placeholder="Message"
                        placeholderTextColor={colors.primary}
                        style={styles.input}
                        value={message}
                        onChangeText={setMessage}
                        onKeyPress={(e) => {
                            setShowEmojiPicker(false);
                        }}
                        onPressIn={(e) => setShowEmojiPicker(false)}
                        underlineColorAndroid={'transparent'}
                    />
                    <IconButton
                        icon="paperclip"
                        size={23}
                        iconColor={colors.primary}
                    />
                    {message.length === 0 && <IconButton
                        icon="camera"
                        size={23}
                        iconColor={colors.primary}
                        onPress={() => navigation.navigate("Camera")}
                    />}
                </View>
                <IconButton
                    icon={message ? "send" : "microphone"}
                    size={28}
                    iconColor={colors.background}
                    onPress={recordAudio}
                    containerColor={colors.primary}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        backgroundColor: colors.background,
    },
    replyContainer: {
        paddingHorizontal: 10,
        marginHorizontal: 10,
        justifyContent: "center",
        alignItems: "flex-start",
    },
    title: {
        marginTop: 5,
        fontWeight: "bold",
    },
    closeReply: {
        position: "absolute",
        right: 10,
        top: 5,
    },
    reply: {
        marginTop: 5,
    },
    innerContainer: {
        paddingHorizontal: 5,
        marginHorizontal: 5,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingVertical: 10,
    },
    inputAndMicrophone: {
        flexDirection: "row",
        backgroundColor: colors.background,
        flex: 3,
        marginRight: 10,
        paddingVertical: Platform.OS === "ios" ? 10 : 0,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "space-between",
        borderColor: colors.primary,
        borderWidth: 1
    },
    input: {
        backgroundColor: "transparent",
        color: colors.primary,
        flex: 3,
        fontSize: 15,
        height: 50,
        alignSelf: "center",
    },
    rightIconButtonStyle: {
        justifyContent: "center",
        alignItems: "center",
        paddingRight: 15,
        paddingLeft: 10,
        borderLeftWidth: 1,
        borderLeftColor: "#fff",
    },
    swipeToCancelView: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 30,
    },
    swipeText: {
        color: colors.primary,
        fontSize: 15,
    },
    emoticonButton: {
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 10,
    },
    recordingActive: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 10,
    },
    recordingTime: {
        color: colors.primary,
        fontSize: 20,
        marginLeft: 5,
    },
    microphoneAndLock: {
        alignItems: "center",
        justifyContent: "flex-end",
    },
    lockView: {
        backgroundColor: "#eee",
        width: 60,
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: 130,
        paddingTop: 20,
    },
    sendButton: {
        backgroundColor: colors.primary,
        borderRadius: 50,
        height: 50,
        width: 50,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default memo(CustomChatInput);