import React, { useState, useEffect } from 'react';
import {
  View, Text, Platform, TouchableOpacity,
} from 'react-native';
import { SearchBar, ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Styles from '../../../../styles';
import AttestationDetails from '../../Home/AttestationDetails';

const ClaimDetails = (props) => {
  const {
    navigation,
    actions: { setActiveAttestationId, setActiveClaim, setAttestationModalVisibility },
    attestationsData,
    childClaims,
    parentClaims,
    attestationModalVisibility,
  } = props;

  const [attestations, setAttestation] = useState(attestationsData);
  const [value, setValue] = useState('');
  const [attestedClaimName, setAttestedClaimName] = useState('');
  const [identityAttested, setIdentityAttested] = useState('');

  useEffect(() => {
    setAttestation(attestationsData);
  }, [attestationsData]);

  const updateSearch = (value) => {
    const newData = attestationsData.filter((item) => {
      const itemData = item.get('id', '').toUpperCase();
      const textData = value.toUpperCase();
      return itemData.includes(textData);
    });
    setAttestation(newData);
    setValue(value);
  };
  const getClaimsDetails = (claim) => {
    setActiveClaim(claim);
  };

  const goToAttestationDetails = (activeAttestationId, attestedClaimName, identityAttested) => {
    setActiveAttestationId(activeAttestationId);
    setAttestedClaimName(attestedClaimName);
    setIdentityAttested(identityAttested);
    setAttestationModalVisibility(true);
  };

  const claimList = (claims, item, type) => (
    <TouchableOpacity
      key={claims.getIn([item, 'id'])}
      style={Styles.greyButtonWithShadow}
      onPress={() => getClaimsDetails(claims.get(item), type)}
    >
      <View>
        <Text style={Styles.textWithLeftPadding}>{claims.getIn([item, 'name'])}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={Styles.root}>
      <SearchBar
        containerStyle={Styles.backgroundColorWhite}
        platform={Platform.OS === 'ios' ? 'ios' : 'android'}
        placeholder="Quick Search"
        onChangeText={updateSearch}
        value={value}
        inputContainerStyle={Styles.defaultMargin}
        cancelButtonTitle=""
      />
      <ScrollView>
        <View>
          <Text style={[Styles.labelUltraLightGrey, Styles.paddingTop]}>ATTESTED TO BY</Text>
          {attestations.keySeq().map((attestation) => (
            <ListItem
              key={attestations.getIn([attestation, 'id'], '')}
              title={attestations.getIn([attestation, 'identityAttested'], '')}
              onPress={() => goToAttestationDetails(attestations.getIn([attestation, 'id'], ''),
                attestations.getIn([attestation, 'claimName'], ''),
                attestations.getIn([attestation, 'identityAttested'], ''))}
              bottomDivider
              chevron
            />
          ))}
        </View>
        <View>
          {childClaims.size > 0
            ? <Text style={[Styles.textWithTopMargin, Styles.boldText]}>Child Claims</Text> : null}
          {childClaims.keySeq().map((item) => (
            claimList(childClaims, item)
          ))}
          {parentClaims.size > 0
            ? <Text style={[Styles.textWithTopMargin, Styles.boldText]}>Parent Claims</Text> : null}
          {parentClaims.keySeq().map((item) => (
            claimList(parentClaims, item)
          ))}
        </View>
      </ScrollView>
      <AttestationDetails
        visible={attestationModalVisibility}
        attestedClaimName={attestedClaimName}
        identityAttested={identityAttested}
      />

    </View>
  );
};

export default ClaimDetails;
