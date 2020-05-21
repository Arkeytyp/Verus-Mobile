import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';

import { selectActiveIdentity, selectPinnedAttestations, selectAttestationModalVisibility } from '../../../selectors/identity';

import { setActiveAttestationId, setAttestationModalVisibility } from '../../../actions/actionCreators';
import Styles from '../../../styles';
import AttestationDetails from './AttestationDetails';

const iconAccountSwitchSize = 28;

const Home = (props) => {
  const {
    navigation,
    activeIdentity,
    pinnedAttestations,
    attestationModalVisibility,
    actions: {
      setActiveAttestationId,
      setAttestationModalVisibility,
    },
  } = props;

  const handleScanToVerify = () => {
    navigation.navigate('ScanBadge');
  };

  const [identityAttested, setIdentityAttested] = useState('');
  const goToAttestationDetails = (activeAttestationId, _identityAttested) => {
    setActiveAttestationId(activeAttestationId);
    setIdentityAttested(_identityAttested);
    setAttestationModalVisibility(true);
  };

  const goToAddIdentity = () => {
    navigation.navigate('AddIdentity');
  };

  return (
    <View style={Styles.root}>

      <View style={Styles.alignItemsStart}>
        <Text style={Styles.textHeader}>{activeIdentity.get('name', '')}</Text>
        <TouchableOpacity onPress={goToAddIdentity}>
          <MaterialCommunityIcons name="account-switch" size={iconAccountSwitchSize} style={Styles.textWithGreyColor} />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={handleScanToVerify} style={Styles.linkButton}>
          <Text style={Styles.textButton}>SCAN TO VERIFY</Text>
        </TouchableOpacity>
      </View>
      <Text style={Styles.boldText}>Pinned attestations</Text>
      <ScrollView>
        <View>
          {pinnedAttestations?.keySeq().map((attestationKey) => (
            <TouchableOpacity
              key={pinnedAttestations.getIn([attestationKey, 'uid'], '')}
              onPress={() => goToAttestationDetails(pinnedAttestations.getIn([attestationKey, 'uid'], ''),
                pinnedAttestations.getIn([attestationKey, 'identityAttested'], ''))}
              style={Styles.greyButtonWithShadow}
            >
              <View>
                <Text style={Styles.textWithLeftPadding}>{pinnedAttestations.getIn([attestationKey, 'identityAttested'], '')}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <AttestationDetails
        visible={attestationModalVisibility}
        identityAttested={identityAttested}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  activeIdentity: selectActiveIdentity(state),
  pinnedAttestations: selectPinnedAttestations(state),
  attestationModalVisibility: selectAttestationModalVisibility(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      setActiveAttestationId,
      setAttestationModalVisibility,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
