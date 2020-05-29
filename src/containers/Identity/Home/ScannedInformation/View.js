import React from 'react';
import { Text, View, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Styles from '../../../../styles';
import Colors from '../../../../globals/colors';
import StandardButton from '../../../../components/StandardButton';
import { truncateString } from '../../PersonalInfo/ClaimManager/utils/truncateString';

const getClaimData = (name) => {
  if (name.length > 20) return `${truncateString(name, 20)}...`;
  return name;
};

const ScannedInformation = (props) => {
  const {
    visible,
    data,
    actions: { setScanInfoModalVisibility },
  } = props;

  const cancelHandler = () => {
    setScanInfoModalVisibility(false);
  };
  return (

    <View>
      { visible && (
      <Modal
        visible={visible}
        animationType="slide"
        transparent={false}
      >
        <View style={Styles.rootWithoutPadding}>
          <View style={Styles.headerContainer}>
            <Text style={Styles.centralHeader}>
              Scan results
            </Text>
          </View>
          <View style={Styles.padding}>
            <View style={Styles.blockWithBorderBottom}>
              <Text style={Styles.textWithBlackColor}>{data.claimId}</Text>
              <Icon name="checkcircle" color={Colors.successButtonColor} size={23} />
            </View>
            <View style={Styles.marginVertical}>
              <View style={Styles.blockWithBorderBottom}>
                <View style={Styles.flexRow}>
                  <Text style={Styles.textWithRightPadding}>Date:</Text>
                  <Text style={Styles.textWithBlackColor}>{data.date}</Text>
                </View>
                <Icon name="checkcircle" color={Colors.successButtonColor} size={23} />
              </View>

              <View style={Styles.blockWithBorderBottom}>
                <View style={Styles.flexRow}>
                  <Text style={Styles.textWithRightPadding}>Data:</Text>
                  <Text style={Styles.textWithBlackColor}>{data.data}</Text>
                </View>
                <Icon name="checkcircle" color={Colors.successButtonColor} size={23} />
              </View>

              <View style={Styles.blockWithBorderBottom}>
                <View style={Styles.flexRow}>
                  <Text style={Styles.textWithRightPadding}>From:</Text>
                  <Text style={Styles.textWithBlackColor}>{data.identityAttested}</Text>
                </View>
                <Icon name="checkcircle" color={Colors.successButtonColor} size={23} />
              </View>
              <View style={Styles.blockWithBorderBottom}>
                <View style={Styles.flexRow}>
                  <Text style={Styles.textWithRightPadding}>To:</Text>
                  <Text style={Styles.textWithBlackColor}>{data.identity}</Text>
                </View>
                <Icon name="checkcircle" color={Colors.successButtonColor} size={23} />
              </View>
            </View>
          </View>
        </View>
        <View style={Styles.footerContainer}>
          <View style={[Styles.alignItemsCenter, Styles.paddingTop]}>
            <StandardButton
              color={Colors.warningButtonColor}
              title="CLOSE"
              onPress={cancelHandler}
            />
          </View>
        </View>
      </Modal>
      )}
    </View>
  );
};

export default ScannedInformation;
