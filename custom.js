'use strict'

exports = module.exports = {}

// Deprecated: remove `parse()` export in 2.0.0.
// (renamed to `parseNumber()`)
exports.parse              = require('./build/parse').default
exports.parseNumber        = require('./build/parse').default
// Deprecated: remove `format()` export in 2.0.0.
// (renamed to `formatNumber()`)
exports.format             = require('./build/format').default
exports.formatNumber       = require('./build/format').default
exports.getNumberType      = require('./build/types').default
exports.isValidNumber      = require('./build/validate').default
exports.findPhoneNumbers   = require('./build/findPhoneNumbers').default
exports.searchPhoneNumbers = require('./build/findPhoneNumbers').searchPhoneNumbers
exports.PhoneNumberSearch  = require('./build/findPhoneNumbers').PhoneNumberSearch
exports.AsYouType          = require('./build/AsYouType').default

// `DIGITS` are used by `react-phone-number-input`.
// `DIGIT_PLACEHOLDER` is used by `react-phone-number-input`.
exports.DIGITS            = require('./build/common').DIGIT_MAPPINGS
exports.DIGIT_PLACEHOLDER = require('./build/AsYouType').DIGIT_PLACEHOLDER

exports.getCountryCallingCode = require('./build/getCountryCallingCode').default
// `getPhoneCode` name is deprecated, use `getCountryCallingCode` instead.
exports.getPhoneCode = exports.getCountryCallingCode

exports.parseRFC3966 = require('./build/RFC3966').parseRFC3966
exports.formatRFC3966 = require('./build/RFC3966').formatRFC3966

exports.Metadata = require('./build/metadata').default

// exports['default'] = ...