export type TColor =
  | 'transparent'
  | 'warBase01'
  | 'warBase02'
  | 'warBase03'
  | 'warBase04'
  | 'warBase05'
  | 'warBase06'
  | 'warBase07'
  | 'warBase08'
  | 'warBase09'
  | 'warPrimary'
  | 'warPrimaryHover'
  | 'warPrimaryActive'
  | 'warPrimaryText'
  | 'warSecondary'
  | 'warSecondaryHover'
  | 'warSecondaryActive'
  | 'warAccent'
  | 'warAccentHover'
  | 'warAccentActive'
  | 'warAccentText'
  | 'warSelection'
  | 'warFocus'
  | 'warClear'
  | 'warClearDisabled'
  | 'warClearHover'
  | 'warClearActive'
  | 'warClearInverse'
  | 'warClearInverseHover'
  | 'warClearInverseActive'
  | 'warErrorFill'
  | 'warErrorBg'
  | 'warErrorBgHover'
  | 'warSuccessFill'
  | 'warSuccessBg'
  | 'warSuccessBgHover'
  | 'warWarningFill'
  | 'warWarningBg'
  | 'warWarningBgHover'
  | 'warInfoFill'
  | 'warInfoBg'
  | 'warInfoBgHover'
  | 'warNeutralFill'
  | 'warNeutralBg'
  | 'warNeutralBgHover'
  | 'warText01'
  | 'warText02'
  | 'warText03'
  | 'warLink'
  | 'warLinkHover'
  | 'warPositive'
  | 'warPositiveHover'
  | 'warNegative'
  | 'warNegativeHover'
  | 'warErrorFillNight'
  | 'warErrorBgNight'
  | 'warErrorBgNightHover'
  | 'warSuccessFillNight'
  | 'warSuccessBgNight'
  | 'warSuccessBgNightHover'
  | 'warWarningFillNight'
  | 'warWarningBgNight'
  | 'warWarningBgNightHover'
  | 'warInfoFillNight'
  | 'warInfoBgNight'
  | 'warInfoBgNightHover'
  | 'warNeutralFillNight'
  | 'warNeutralBgNight'
  | 'warNeutralBgNightHover'
  | 'warText01Night'
  | 'warText02Night'
  | 'warText03Night'
  | 'warLinkNight'
  | 'warLinkNightHover'
  | 'warPositiveNight'
  | 'warPositiveNightHover'
  | 'warNegativeNight'
  | 'warNegativeNightHover'
  | 'warSupport01'
  | 'warSupport02'
  | 'warSupport03'
  | 'warSupport04'
  | 'warSupport05'
  | 'warSupport06'
  | 'warSupport07'
  | 'warSupport08'
  | 'warSupport09'
  | 'warSupport10'
  | 'warSupport11'
  | 'warSupport12'
  | 'warSupport13'
  | 'warSupport14'
  | 'warSupport15'
  | 'warSupport16'
  | 'warSupport17'
  | 'warSupport18'
  | 'warSupport19'
  | 'warSupport20'
  | 'warSupport21'
  | 'warSupport22'

/**
 List of possible colors in your app.
 This is used for better color management and suggestions from your *Editor*.
 **/

const colors: {
  [index in TColor]: string
} = {
  transparent: 'transparent',
  warBase01: '#fff',
  warBase02: '#f6f6f6',
  warBase03: '#ededed', // basic border
  warBase04: '#d7d7d7', // hovered borders
  warBase05: '#b0b0b0', // interface icons
  warBase06: '#959595', // hovered interface icons
  warBase07: '#808080', // inverted background
  warBase08: '#333', // dark interface icons
  warBase09: '#000', // icons on inverted background
  warPrimary: '#526ed3', // primary buttons, background
  warPrimaryHover: '#6c86e2', // primary buttons hover
  warPrimaryActive: '#314692', // primary buttons hover
  warPrimaryText: '#fff', // text on primary background
  warSecondary: '#ebefff', // inputs and secondary buttons
  warSecondaryHover: '#dfe3f3', // inputs and secondary buttons hover
  warSecondaryActive: '#d8ddf2', // inputs and secondary buttons pressed
  warAccent: '#ff8078', // fill and outline of accent elements
  warAccentHover: '#ff9a94', // accent elements hover
  warAccentActive: '#e7716a', // accent elements pressed
  warAccentText: '#fff', // text on accent background
  warSelection: 'rgba(112, 182, 246, 0.12)', // selected text background
  warFocus: 'rgba(51, 51, 51, 0.64)', // focus ring color
  warClear: 'rgba(0, 0, 0, 0.08)', // translucent dark fill
  warClearDisabled: 'rgba(0, 0, 0, 0.04)', // translucent dark fill disabled
  warClearHover: 'rgba(0, 0, 0, 0.16)', // translucent dark fill hover
  warClearActive: 'rgba(0, 0, 0, 0.2)', // translucent dark fill pressed
  warClearInverse: 'rgba(255, 255, 255, 0.16)', // translucent light fill
  warClearInverseHover: 'rgba(255, 255, 255, 0.24)', // translucent light fill hover
  warClearInverseActive: 'rgba(255, 255, 255, 0.4)', // translucent light fill pressed
  // Statuses
  warErrorFill: 'rgba(244, 87, 37, 1)', // icons and decorative elements with error status
  warErrorBg: 'rgba(244, 87, 37, 0.12)', // translucent error background
  warErrorBgHover: 'rgba(244, 87, 37, 0.24)', // translucent hover error background
  warSuccessFill: 'rgba(74, 201, 155, 1)', // icon and decorative elements with success status
  warSuccessBg: 'rgba(74, 201, 155, 0.12)', // translucent success background
  warSuccessBgHover: 'rgba(74, 201, 155, 0.24)', // translucent success hover
  warWarningFill: 'rgba(255, 199, 0, 1)', // icon and decorative elements with warning status
  warWarningBg: 'rgba(255, 199, 0, 0.12)', // translucent warning background
  warWarningBgHover: 'rgba(255, 199, 0, 0.24)', // translucent warning background
  warInfoFill: 'rgba(112, 182, 246, 1)', // icon and decorative elements with info status
  warInfoBg: 'rgba(112, 182, 246, 0.12)', // translucent info background
  warInfoBgHover: 'rgba(112, 182, 246, 0.24)', // translucent info background
  warNeutralFill: 'rgb(121, 129, 140)', // icon and decorative elements with neutral status
  warNeutralBg: 'rgba(121, 129, 140, 0.12)', // translucent info background
  warNeutralBgHover: 'rgba(121, 129, 140, 0.24)', // translucent info background
  // Text
  warText01: 'rgba(27, 31, 59, 1)',
  warText02: 'rgba(27, 31, 59, 0.65)',
  warText03: 'rgba(27, 31, 59, 0.4)',
  warLink: '#526ed3',
  warLinkHover: '#6c86e2',
  warPositive: '#3aa981',
  warPositiveHover: '#7ac5aa',
  warNegative: '#dd4c1e',
  warNegativeHover: '#e38163',
  // Modifiers for dark background
  warErrorFillNight: 'rgba(255, 140, 103, 1)',
  warErrorBgNight: 'rgba(244, 87, 37, 0.32)',
  warErrorBgNightHover: 'rgba(244, 87, 37, 0.4)',
  warSuccessFillNight: 'rgb(74, 201, 155)',
  warSuccessBgNight: 'rgba(74, 201, 155, 0.32)',
  warSuccessBgNightHover: 'rgba(74, 201, 155, 0.4)',
  warWarningFillNight: 'rgb(255, 199, 0)',
  warWarningBgNight: 'rgba(255, 199, 0, 0.32)',
  warWarningBgNightHover: 'rgba(255, 199, 0, 0.4)',
  warInfoFillNight: 'rgb(112, 182, 246)',
  warInfoBgNight: 'rgba(112, 182, 246, 0.32)',
  warInfoBgNightHover: 'rgba(112, 182, 246, 0.4)',
  warNeutralFillNight: 'rgb(149, 155, 164)',
  warNeutralBgNight: 'rgb(149, 155, 164, 0.32)',
  warNeutralBgNightHover: 'rgb(149, 155, 164, 0.48)',
  //
  warText01Night: 'rgba(255, 255, 255, 1)',
  warText02Night: 'rgba(255, 255, 255, 0.72)',
  warText03Night: 'rgba(255, 255, 255, 0.6)',
  warLinkNight: '#6788ff',
  warLinkNightHover: '#526ed3',
  warPositiveNight: '#44c596',
  warPositiveNightHover: '#3aa981',
  warNegativeNight: '#ff8c67',
  warNegativeNightHover: '#bb593a',
  //
  warSupport01: '#a8cef1',
  warSupport02: '#3682db',
  warSupport03: '#8dda71',
  warSupport04: '#34b41f',
  warSupport05: '#e29398',
  warSupport06: '#b8474e',
  warSupport07: '#fcc068',
  warSupport08: '#ff8a00',
  warSupport09: '#dab3f9',
  warSupport10: '#7b439e',
  warSupport11: '#fee797',
  warSupport12: '#fcbb14',
  warSupport13: '#ea97c4',
  warSupport14: '#bd65a4',
  warSupport15: '#7fd7cc',
  warSupport16: '#2fad96',
  warSupport17: '#d4aca2',
  warSupport18: '#9d6f64',
  warSupport19: '#d2e9a2',
  warSupport20: '#aadc42',
  warSupport21: '#a0c5df',
  warSupport22: '#3c7ba8'
}

export default colors
