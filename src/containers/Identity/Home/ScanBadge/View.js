import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Styles from '../../../../styles/index';
import ScannedInformation from '../ScannedInformation';

const ScanBadge = (props) => {
  const {
    navigation,
    scanInfoModalVisibility,
    actions: { setScanInfoModalVisibility },

  } = props;

  const [data, setData] = useState();
  const onSuccess = (e) => {
    setData(JSON.parse(e.data));
    navigation.navigate('ScannedInformation');
  };

  const nextHandler = () => {
    navigation.navigate('Identity', { selectedScreen: 'Identity' });
  };
  return (
    <View style={Styles.blackRoot}>
      <QRCodeScanner
        onRead={onSuccess}
        showMarker
        captureAudio={false}
        cameraStyle={Styles.fullHeight}
      />
      <TouchableOpacity
        style={{ ...Styles.footerContainer, ...Styles.blackRoot }}
        onPress={nextHandler}
      >
        <Text style={Styles.whiteTextWithPadding}>Cancel</Text>
      </TouchableOpacity>
      <ScannedInformation
        data={data}
        visible={scanInfoModalVisibility}
      />
    </View>
  );
};

export default ScanBadge;
