export const APP_NAME = 'Kissan Wallet';
export const APP_VERSION = '1.0.0';
export const IS_MAINNET = true; //false

// ERROR MESSAGES
export const EMPTY_FIELD = 'Email, Mobile Number and password cannot be empty';

export const VALID_EMAIL = 'Please enter a valid email address';
export const VALID_PASSWORD =
  'Password should have one uppercase, one lowercase, one number, one special character, minimum 8 characters';
export const VALID_OLD_PASSWORD = 'Please enter your valid old password.';
export const VALID_NEW_PASSWORD =
  'Please enter new password and should have one uppercase, one lowercase, one number, one special character, minimum 8 characters';
export const VALID_NEW_CON_PASSWORD =
  'Please enter re-enter new password and should have one uppercase, one lowercase, one number, one special character, minimum 8 characters';
export const VALID_MISMATCH_PASSWORD =
  'New entered password & confirm password are not same.';
export const VALID_FIRST_NAME = 'Please Enter valid name.';
export const CHECK_TERMS = 'Please agree terms & condtions before sign up';
export const VALID_LAST_NAME = 'Please Enter last name.';
export const VALID_GENDER = 'Please select your gender.';
export const VALID_DOB = 'Please enter your date of birth.';
export const VALID_COUNTRY = 'Please select your country.';
export const VALID_CITY = 'Please enter your city.';
export const VALID_ZIP_CODE = 'Please enter your zip code.';
export const VALID_ADDRESS_DETAIL = 'Please enter your address.';
export const VALID_PHONE_CODE = 'Please select your Country code.';
export const VALID_PHONE_NO = 'Please enter a valid Phone number.';
export const VALID_OTP_CODE = 'Please enter OTP';
export const VALID_PASSPORT_NO = 'Please enter a valid passport number.';
export const VALID_DRIVING_LIS_NO =
  'Please enter a valid driver license number.';
export const VALID_NATIONAL_ID_NO = 'Please enter a valid National ID number.';
export const VALID_PASSPORT_EXPIRY_DATE =
  'Please enter a valid expiry date of your document.';
export const VALID_PASSPORT_SELFIE = 'Please select your selfie.';
export const VALID_GOOGLE_AUTH_CODE =
  'Please enter a valid Google Authenticator code.';
export const PIN_RESET_ALERT =
  'An email to reset Login PIN will be sent to you on your registered email address.\nDo you want to continue?';
export const VALID_ACCOUNT_NO = 'Please enter a valid account number.';
export const VALID_ACCOUNT_TYPE = 'Please enter a valid account type.';
export const VALID_BANK_NAME = 'Please enter a valid bank name.';
export const VALID_BRANCH_NAME = 'Please enter a valid branch name.';
export const VALID_BRANCH_CODE = 'Please enter a valid branch code.';
export const VALID_SWIFT_CODE = 'Please enter a valid swift code.';

export const VALID_BENI_NAME = 'Please enter a valid benificiary name.';
export const VALID_BENI_ADDRESS = 'Please enter a benificiary address.';
export const VALID_FIRST_NAME_LENGTH =
  'First name must have minimum 2 and maximum 20 characters.';
export const VALID_LAST_NAME_LENGTH =
  'Last name must have minimum 2 and maximum 20 characters.';

export const FIELDS_MANDATORY = 'All fields are mandatory';
export const ENTER_NAME = 'Name is a required Field.';
export const ENTER_NAME_MORE = 'Minimum 2 Character are required in name.';
export const ENTER_SUBJECT = 'Subject is a required Field.';
export const ENTER_SUBJECT_MORE =
  'Minimum 5 character are required in subject.';
export const ENTER_MESSAGE = 'Message is a required Field.';
export const ENTER_MESSAGE_MORE =
  'Minimum 5 character are required in message.';
export const ENTER_EMAIL = 'Email Address is a required Field.';
export const SOME_WENT_WRONG = 'Something went wrong.';
export const recentBtn = 'Recents';
export const addressBookBtn = 'Address Book';
export const myAccountBtn = 'My Accounts';

// AsyncStorageKeys
export const ACCESS_TOKEN = 'access_token';
export const SAVED_COOKIES = 'saved_cookies';
export const USER_DATA = 'userdata';
export const HIDE_ZERO_BALANCE = 'hideZero';
export const SAVED_RADIUS_VALUE = 'save_radius_value';

export const IS_LOGIN_PIN = 'is_login_pin';
export const IS_MESSAGE_PIN = 'is_message_pin';
export const IS_BIOMETRIC_ENABLED = 'is_biometric_enabled';

export const IS_THEME_ENABLE = 'theme_enabled';
export const CURRENT_THEME_MODE = 'current_mode';
export const LOCATION_STATUS = 'activate_location_status';

export const VERIFY_INFO_STEP = 'verify_info_step';
export const PHONE_VERIFY_STEP = 'phone_verify_step';
export const SELECT_DOC_STEP = 'select_doc_step';
export const DOC_DETAILS_STEP = 'doc_details_step';
export const SELFIE_STEP = 'selfie_step';
export const FILE_DOC_STEP = 'fileDoc_step';

export const LOGIN_CREDENTIALS = 'login_credentials';

export const CRYPTO_DECIMAL_ROUNDOFF = 4;
export const BALANCE_ROUNDOFF = 6;

export let ALPHABET_REGEX = /^[a-zA-Z]*$/;
export const ALPHANUMERIC_REGEX_SPACE = /^[a-zA-Z0-9 ]*$/;
export const ALPHANUMERIC_REGEX =
  /^([a-zA-Z0-9\u0600-\u06FF\u0660-\u0669\u06F0-\u06F9 _.-]+)$/;
export let ALPHABET_HYPEN_REGEX = /^[a-zA-Z]*\-?[a-zA-Z]*$/;
export let NAME_REGEX = /^[a-zA-Z ]*$/;
export let RemoveDecimal = /\..*$/;
export const EMAIL_REGEX =
  /^\w+([\.-\.+\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const STANDARD_PASSWORD_REGAX =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
export const FULL_NAME_REGEX = /^[A-Za-z\s]{2,}[A-Za-z\s]{0,}$/;

export let getValueFromSpecialChar = text => {
  let specialCharArr = [
    '+',
    '(',
    ')',
    '=',
    ';',
    ':',
    '/',
    '|',
    '<',
    '>',
    '?',
    '{',
    '}',
    '[',
    ']',
    ',',
    '^',
    '`',
  ];
  let charFound = specialCharArr.find(chrData => text.includes(chrData));
  return charFound;
};

const dappTestNet = [
  // {
  //   chainId: 1,
  //   coin_name: "Ethereum",
  //   coin_symbol: "eth",
  //   coin_image: "images/eth.png",
  //   decimals: 10 ** 18,
  //   rpcUrl: "https://mainnet.infura.io/v3/39f09bbfb5754cd480eee6c763227883",
  //   coin_family: 1,
  // },
  {
    chainId: 97,
    coin_name: 'Binance Smart Chain',
    coin_symbol: 'bnb',
    coin_image: 'images/bnb.png',
    decimals: 10 ** 18,
    rpcUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545',
    coin_family: 3,
  },
];

const dappMainNet = [
  {
    chainId: 56,
    coin_name: 'Binance Smart Chain',
    coin_symbol: 'bnb',
    coin_image: 'images/bnb.png',
    decimals: 10 ** 18,
    rpcUrl: 'https://bsc-dataseed1.binance.org:443',
    coin_family: 3,
  },
];

export const DAPP_COIN_LIST = IS_MAINNET ? dappMainNet : dappTestNet;
