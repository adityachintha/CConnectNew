import React from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

const confirmed = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Image
            source={require("../../../../assets/check-circle.png")}
            style={styles.checkIcon}
          />
          <Text style={styles.modalText}>
            Thank you for sharing, job poster will reach you in 24 hrs.
          </Text>
          <TouchableOpacity style={styles.goToJobsButton} onPress={onClose}>
            <Text style={styles.goToJobsButtonText}>Go to Jobs</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
  },
  checkIcon: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  goToJobsButton: {
    backgroundColor: "#4A64FE",
    paddingVertical: 15,
    paddingHorizontal: 120,
    borderRadius: 10,
    alignItems: "center",
  },
  goToJobsButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default confirmed;
