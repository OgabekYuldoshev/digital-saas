import * as Yup from 'yup';

export const init = (i18n) => {
  Yup.setLocale({
    mixed: {
      default: i18n.t('validation_default'),
      required: i18n.t('validation_required'),
      oneOf: ({ values }) => i18n.t('validation_oneOf', { values }),
      notOneOf: ({ values }) => i18n.t('validation_notOneOf', { values }),
      notType: ({ type }) => i18n.t('validation_notType', { type })
    },
    string: {
      length: ({ length }) => i18n.t('validation_length', { length }),
      min: ({ min }) => i18n.t('validation_min', { min }),
      max: ({ max }) => i18n.t('validation_max', { max }),
      matches: ({ regex }) => i18n.t('validation_matches', { regex }),
      email: i18n.t('validation_email'),
      url: i18n.t('validation_url'),
      trim: i18n.t('validation_trim'),
      lowercase: i18n.t('validation_lowercase'),
      uppercase: i18n.t('validation_uppercase')
    },
    number: {
      min: ({ min }) => i18n.t('validation_min', { min }),
      max: ({ max }) => i18n.t('validation_max', { max }),
      lessThan: ({ less }) => i18n.t('validation_lessThan', { less }),
      moreThan: ({ more }) => i18n.t('validation_moreThan', { more }),
      positive: i18n.t('validation_positive'),
      negative: i18n.t('validation_negative'),
      integer: i18n.t('validation_integer')
    },
    date: {
      min: ({ min }) => i18n.t('validation_min', { min }),
      max: ({ max }) => i18n.t('validation_max', { max })
    },
    object: {
      noUnknown: ({ path }) => i18n.t('validation_noUnknown', { path })
    },
    array: {
      min: ({ min }) => i18n.t('validation_min', { min }),
      max: ({ max }) => i18n.t('validation_max', { max })
    }
  });
};
