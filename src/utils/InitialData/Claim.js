const generateClaims = (identityId) => ([
  {
    id: `${identityId}-firstName`,
    name: 'First Name',
    desc: '',
    parentClaims: [`${identityId}-birthDate`],
    childClaims: [],
    localKey: '',
    hidden: false,
    categoryId: `${identityId}-personalInformation`,
  },
  {
    id: `${identityId}-lastName`,
    name: 'Last Name',
    desc: '',
    parentClaims: [`${identityId}-birthDate`],
    childClaims: [],
    localKey: '',
    hidden: false,
    categoryId: `${identityId}-personalInformation`,
  },
  {
    id: `${identityId}-birthDate`,
    name: 'Birth Date',
    desc: '',
    parentClaims: [],
    childClaims: [`${identityId}-firstName`, `${identityId}-lastName`],
    localKey: '',
    hidden: false,
    categoryId: `${identityId}-personalInformation`,
  },
  {
    id: `${identityId}-bloodType`,
    name: 'Blood Type',
    desc: '',
    parentClaims: [`${identityId}-healthConditions`],
    childClaims: [],
    localKey: '',
    hidden: false,
    categoryId: `${identityId}-healthCare`,
  },
  {
    id: `${identityId}-healthConditions`,
    name: 'Health Conditions',
    desc: '',
    parentClaims: [],
    childClaims: [`${identityId}-bloodType`],
    localKey: '',
    hidden: false,
    categoryId: `${identityId}-healthCare`,
  },
  {
    id: `${identityId}-university`,
    name: 'University',
    desc: '',
    parentClaims: [],
    childClaims: [],
    localKey: '',
    hidden: true,
    categoryId: `${identityId}-education`,
  },
  {
    id: `${identityId}-address`,
    name: 'Address',
    desc: '',
    parentClaims: [],
    childClaims: [],
    localKey: '',
    hidden: false,
    categoryId: `${identityId}-housing`,
  },
]);

export default generateClaims;
