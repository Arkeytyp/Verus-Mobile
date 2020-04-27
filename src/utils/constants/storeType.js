// Updates
export const SET_COIN_UPDATE_DATA = 'SET_COIN_UPDATE_DATA';
export const EXPIRE_COIN_DATA = 'EXPIRE_COIN_DATA';
export const RENEW_COIN_DATA = 'RENEW_COIN_DATA';
export const SET_COIN_EXPIRE_ID = 'SET_COIN_EXPIRE_ID';
export const SET_COIN_UPDATE_EXPIRED_ID = 'SET_COIN_UPDATE_EXPIRED_ID';
export const CLEAR_COIN_EXPIRE_ID = 'CLEAR_COIN_EXPIRE_ID';
export const CLEAR_COIN_UPDATE_EXPIRED_ID = 'CLEAR_COIN_UPDATE_EXPIRED_ID';
// export const FREE_COIN_API_CALL = "FREE_COIN_API_CALL"
export const OCCUPY_COIN_API_CALL = 'OCCUPY_COIN_API_CALL';
export const NEEDS_UPDATE_POSTFIX = '_NEED_UPDATE';
export const ENABLE_COIN_API_CALL = 'ENABLE_COIN_API_CALL';
export const DISABLE_COIN_API_CALL = 'DISABLE_COIN_API_CALL';

// Authentication
export const SET_ACCOUNTS = 'SET_ACCOUNTS';
export const SIGN_IN_USER = 'SIGN_IN_USER';
export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const UPDATE_ACCOUNT_KEYS = 'UPDATE_ACCOUNT_KEYS';
export const FINGER_AUTH = 'FINGER_AUTH';
export const SIGN_OUT = 'SIGN_OUT';

// Crypto buy/sell
export const SET_ACTIVE_SECTION_BUY_SELL_CRYPTO = 'SET_ACTIVE_SECTION_BUY_SELL_CRYPTO';

// Coins
export const SET_ACTIVE_COIN = 'SET_ACTIVE_COIN';
export const SET_ACTIVE_APP = 'SET_ACTIVE_APP';
export const SET_ACTIVE_SECTION = 'SET_ACTIVE_SECTION';
export const SET_COINMENU_FOCUS = 'SET_COINMENU_FOCUS';
export const SET_USER_COINS = 'SET_USER_COINS';
export const SET_COIN_STATUS = 'SET_COIN_STATUS';

// Custom Coins
export const SET_ACTIVE_SECTION_CUSTOM_COIN = 'SET_ACTIVE_SECTION_CUSTOM_COIN';

// Information Ledger
export const SET_BALANCES = 'SET_BALANCES';
export const SET_INFO = 'SET_INFO';
export const SET_TRANSACTIONS = 'SET_TRANSACTIONS';
export const SET_ONE_BALANCE = 'SET_ONE_BALANCE';
export const SET_RATES = 'SET_RATES';
export const BALANCES_NEED_UPDATE = 'BALANCES_NEED_UPDATE';
export const TRANSACTIONS_NEED_UPDATE = 'TRANSACTIONS_NEED_UPDATE';
export const RATES_NEED_UPDATE = 'RATES_NEED_UPDATE';
export const EVERYTHING_NEEDS_UPDATE = 'EVERYTHING_NEEDS_UPDATE';
// export const SET_INTERVAL_ID = "SET_INTERVAL_ID"

// Payment Methods
export const CREATE_WYRE_ACCOUNT = 'CREATE_WYRE_ACCOUNT';
export const CREATE_WYRE_ACCOUNT_RESPONSE = 'CREATE_WYRE_ACCOUNT_RESPONSE';
export const GET_WYRE_ACCOUNT = 'GET_WYRE_ACCOUNT';
export const GET_WYRE_ACCOUNT_RESPONSE = 'GET_WYRE_ACCOUNT_RESPONSE';
export const PUT_WYRE_ACCOUNT = 'PUT_WYRE_ACCOUNT';
export const PUT_WYRE_ACCOUNT_RESPONSE = 'PUT_WYRE_ACCOUNT_RESPONSE';
export const GET_WYRE_CONFIG = 'GET_WYRE_CONFIG';
export const GET_WYRE_CONFIG_RESPONSE = 'GET_WYRE_CONFIG_RESPONSE';
export const CREATE_WYRE_PAYMENT = 'CREATE_WYRE_PAYMENT';
export const CREATE_WYRE_PAYMENT_RESPONSE = 'CREATE_WYRE_PAYMENT_RESPONSE';
export const GET_EXCHANGE_RATES = 'GET_EXCHANGE_RATES';
export const GET_EXCHANGE_RATES_RESPONSE = 'GET_EXCHANGE_RATES_RESPONSE';
export const GET_TRANSACTION_HISTORY = 'GET_TRANSACTION_HISTORY';
export const GET_TRANSACTION_HISTORY_RESPONSE = 'GET_TRANSACTION_HISTORY_RESPONSE';

// Settings
export const SET_COIN_LIST = 'SET_COIN_LIST';
export const SET_ALL_SETTINGS = 'SET_ALL_SETTINGS';
export const SET_CONFIG_SECTION = 'SET_CONFIG_SECTION';
export const SET_GENERAL_WALLET_SETTINGS_STATE = 'SET_GENERAL_WALLET_SETTINGS_STATE';
export const SET_COIN_SETTINGS_STATE = 'SET_COIN_SETTINGS_STATE';
export const SET_BUY_SELL_SETTINGS_STATE = 'SET_BUY_SELL_SETTINGS_STATE';

// Cache general
export const CLEAR_CACHE = 'CLEAR_CACHE';

// Electrum data cache
export const ADD_SERVER_VERSION = 'ADD_SERVER_VERSION';
export const SET_SERVER_VERSIONS = 'SET_SERVER_VERSIONS';

// Block header cache
export const ADD_HEADER = 'ADD_HEADER';
export const SET_HEADERS = 'SET_HEADERS';

// Data updates
export const SET_COIN_BALANCES = 'SET_COIN_BALANCES';

// Data errors
export const ERROR_BALANCES = 'ERROR_BALANCES';
export const ERROR_TRANSACTIONS = 'ERROR_TRANSACTIONS';
export const ERROR_INFO = 'ERROR_INFO';
export const ERROR_RATES = 'ERROR_RATES';

// Identity app
export const APP_SETUP = 'APP_SETUP';
export const REQUEST_SEED_DATA = 'REQUEST_SEED_DATA';
export const SET_ACTIVE_IDENTITY = 'SET_ACTIVE_IDENTITY';
export const SET_IDENTITIES = 'SET_IDENTITIES';
export const GET_ACTIVE_IDENTITY = 'GET_ACTIVE_IDENTITY';
export const STORE_IDENTITIES = 'STORE_IDENTITIES';
export const SET_CLAIMS = 'SET_CLAIMS';
export const SET_CLAIM_CATEGORIES = 'SET_CLAIM_CATEGORIES';
export const SET_ATTESTATIONS = 'SET_ATTESTATIONS';
export const SET_ACTIVE_CLAIM_CATEGORY_ID = 'SET_ACTIVE_CLAIM_CATEGORY_ID';
export const TOGGLE_ATTESTATION_PIN = 'TOGGLE_ATTESTATION_PIN';
export const SET_ATTESTATION_PINNED = 'SET_ATTESTATION_PINNED';
export const SET_ACTIVE_CLAIM = 'SET_ACTIVE_CLAIM';
export const SET_ACTIVE_ATTESTATION_ID = 'SET_ACTIVE_ATTESTATION_ID';
export const ADD_NEW_IDENTITY_NAME = 'ADD_NEW_IDENTITY_NAME';
export const ADD_NEW_IDENTITY = 'ADD_NEW_IDENTITY';
export const CHANGE_ACTIVE_IDENTITY = 'CHANGE_ACTIVE_IDENTITY';
export const DESELECT_ACTIVE_IDENTITY = 'DESELECT_ACTIVE_IDENTITY';
export const SET_NEW_ACTIVE_IDENTITY = 'SET_NEW_ACTIVE_IDENTITY';
export const SET_SHOW_EMPTY_CLAIM_CATEGORIES = 'SET_SHOW_EMPTY_CLAIM_CATEGORIES';
export const ADD_NEW_CATEGORY = 'ADD_NEW_CATEGORY';
export const SET_NEW_CATEGORY = 'SET_NEW_CATEGORY';
export const SET_CLAIM_VISIBILITY = 'SET_CLAIM_VISIBILITY';
export const TOGGLE_SHOW_HIDDEN_CLAIMS = 'TOGGLE_SHOW_HIDDEN_CLAIMS';
export const UPDATE_SELECTED_CLAIMS = 'UPDATE_SELECTED_CLAIMS';
export const UPDATE_CATEGORY_FOR_CLAIMS = 'UPDATE_CATEGORY_FOR_CLAIMS';
export const MOVE_CLAIMS_TO_CATEGORY = 'MOVE_CLAIMS_TO_CATEGORY';
export const CLEAR_SELECTED_CLAIMS = 'CLEAR_SELECTED_CLAIMS';
