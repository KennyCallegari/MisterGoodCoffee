import React from 'react';
import { StyleSheet, View, Modal } from 'react-native';

const NiModal = ({ visible, children, onRequestClose }) => (
  <Modal visible={visible} transparent onRequestClose={onRequestClose}>
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        {children}
      </View>
    </View>
  </Modal>
);

export default NiModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#00000099',
  },
  modalContent: {
    display: 'flex',
    backgroundColor: 'white',
    borderRadius: 16,
    width: '90%',
    padding: 16,
  },
});
