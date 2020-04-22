import { update } from "immutable";

const claims = [
  {
    id: 'firstName',
    name: 'First Name',
    desc: '',
    parent_claims: ['birthDate'],
    child_claims: [],
    local_key: '',
    hidden: false,
  },
  {
    id: 'lastName',
    name: 'Last Name',
    desc: '',
    parent_claims: ['birthDate'],
    child_claims: [],
    local_key: '',
    hidden: false,
  },
  {
    id: 'birthDate',
    name: 'Birth Date',
    desc: '',
    parent_claims: [],
    child_claims: ['firstName', 'lastName'],
    local_key: '',
    hidden: false,
  },
  {
    id: 'bloodType',
    name: 'Blood Type',
    desc: '',
    parent_claims: ['healthConditions'],
    child_claims: [],
    local_key: '',
    hidden: true,
  },
  {
    id: 'healthConditions',
    name: 'Health Conditions',
    desc: '',
    parent_claims: [],
    child_claims: ['bloodType'],
    local_key: '',
    hidden: false,
  },
  {
    id: 'university',
    name: 'University',
    desc: '',
    parent_claims: [],
    child_claims: [],
    local_key: '',
    hidden: false,
  },
  {
    id: 'address',
    name: 'Address',
    desc: '',
    parent_claims: [],
    child_claims: [],
    local_key: '',
    hidden: false,
  },
];

export default claims;

// const selectedCategory = {
//   id: 'education',
//   name: 'Education',
//   desc: '',
//   identity: 'kkuna',
//   claims: ['firstName', 'lastName', 'university', 'healthConditions'],
// };

// const targetCategory = {
//   id: 'housing',
//   name: 'Housing',
//   desc: '',
//   identity: 'kkuna',
//   claims: ['firstName', 'lastName', 'address'],
// };

// const categoriesList = [
//   selectedCategory, targetCategory,
//   {
//     id: `personalInformation`,
//     name: "Personal Information",
//     desc: "",
//     identity: 'kkuna',
//     claims: ["firstName", "lastName", "bloodType", "healthConditions", "birthDate"],
//   },
// {
//     id: `finance`,
//     name: "Finance",
//     desc: "",
//     identity: 'kkuna',
//     claims: ["firstName", "lastName", "bankAccount"],
//   },
// {
//     id: `family`,
//     name: "Family",
//     desc: "",
//     identity: 'kkuna',
//     claims: ["firstName", "lastName"],
//   },
// ];

// console.log(categoriesList)

// const selectedClaim = [{
//   id: 'university',
//   name: 'University',
//   desc: '',
//   parent_claims: [],
//   child_claims: [],
//   local_key: '',
//   hidden: false,
// },
// {
//     id: 'healthConditions',
//     name: 'Health Conditions',
//     desc: '',
//     parent_claims: [],
//     child_claims: ['bloodType'],
//     local_key: '',
//     hidden: false,
//   },];


// const moveCategory = (_sourceCategory, _targetCategory, _claim) => {
//   const updateSourceCategoryList = _sourceCategory.claims.filter((claim) => !_claim.some((c) => c.id === claim));
//   const updateTargetCategoryList = [..._targetCategory.claims, ..._claim.map((a) => a.id)];
//   console.log(updateSourceCategoryList, updateTargetCategoryList);
//   const updateSourceCategory = () => ({
//     ..._sourceCategory,
//     claims: updateSourceCategoryList,
//   });
//   const updateTargetCategory = () => ({
//     ..._targetCategory,
//     claims: updateTargetCategoryList,
//   });
//   const updatedCategories = [updateSourceCategory(), updateTargetCategory()];
//   const oldCategoryList = categoriesList.filter((storedCategory) => !updatedCategories.some((updatedCategory) => updatedCategory.id === storedCategory.id));

//   const categoriesToStore = oldCategoryList.concat(updatedCategories);
//   return categoriesToStore;
// };

// console.log(moveCategory(selectedCategory, targetCategory, selectedClaim))