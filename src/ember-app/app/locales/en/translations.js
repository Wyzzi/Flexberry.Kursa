import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKursaБанкДанLForm from './forms/i-i-s-kursa-банк-дан-l';
import IISKursaЗаправБакLForm from './forms/i-i-s-kursa-заправ-бак-l';
import IISKursaЗаправкаАвтоLForm from './forms/i-i-s-kursa-заправка-авто-l';
import IISKursaКартаЛояльLForm from './forms/i-i-s-kursa-карта-лояль-l';
import IISKursaКлиентLForm from './forms/i-i-s-kursa-клиент-l';
import IISKursaТоварыСпрLForm from './forms/i-i-s-kursa-товары-спр-l';
import IISKursaЧекLForm from './forms/i-i-s-kursa-чек-l';
import IISKursaБанкДанEForm from './forms/i-i-s-kursa-банк-дан-e';
import IISKursaЗаправБакEForm from './forms/i-i-s-kursa-заправ-бак-e';
import IISKursaЗаправкаАвтоEForm from './forms/i-i-s-kursa-заправка-авто-e';
import IISKursaКартаЛояльEForm from './forms/i-i-s-kursa-карта-лояль-e';
import IISKursaКлиентEForm from './forms/i-i-s-kursa-клиент-e';
import IISKursaТоварыСпрEForm from './forms/i-i-s-kursa-товары-спр-e';
import IISKursaЧекEForm from './forms/i-i-s-kursa-чек-e';
import IISKursaБанкДанModel from './models/i-i-s-kursa-банк-дан';
import IISKursaЗаправБакModel from './models/i-i-s-kursa-заправ-бак';
import IISKursaЗаправкаАвтоModel from './models/i-i-s-kursa-заправка-авто';
import IISKursaКартаЛояльModel from './models/i-i-s-kursa-карта-лояль';
import IISKursaКлиентModel from './models/i-i-s-kursa-клиент';
import IISKursaТЧТоварыModel from './models/i-i-s-kursa-т-ч-товары';
import IISKursaТоварыСпрModel from './models/i-i-s-kursa-товары-спр';
import IISKursaЧекModel from './models/i-i-s-kursa-чек';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kursa-банк-дан': IISKursaБанкДанModel,
    'i-i-s-kursa-заправ-бак': IISKursaЗаправБакModel,
    'i-i-s-kursa-заправка-авто': IISKursaЗаправкаАвтоModel,
    'i-i-s-kursa-карта-лояль': IISKursaКартаЛояльModel,
    'i-i-s-kursa-клиент': IISKursaКлиентModel,
    'i-i-s-kursa-т-ч-товары': IISKursaТЧТоварыModel,
    'i-i-s-kursa-товары-спр': IISKursaТоварыСпрModel,
    'i-i-s-kursa-чек': IISKursaЧекModel
  },

  'application-name': 'Kursa',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Kursa',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursa',
          title: 'Kursa'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        kursa: {
          caption: 'Kursa',
          title: 'Kursa',
          'i-i-s-kursa-товары-спр-l': {
            caption: 'Товары спр',
            title: ''
          },
          'i-i-s-kursa-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-kursa-банк-дан-l': {
            caption: 'Банк дан',
            title: ''
          },
          'i-i-s-kursa-чек-l': {
            caption: 'Чек',
            title: ''
          },
          'i-i-s-kursa-заправка-авто-l': {
            caption: 'Заправка авто',
            title: ''
          },
          'i-i-s-kursa-заправ-бак-l': {
            caption: 'Заправ бак',
            title: ''
          },
          'i-i-s-kursa-карта-лояль-l': {
            caption: 'Карта лояль',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-kursa-банк-дан-l': IISKursaБанкДанLForm,
    'i-i-s-kursa-заправ-бак-l': IISKursaЗаправБакLForm,
    'i-i-s-kursa-заправка-авто-l': IISKursaЗаправкаАвтоLForm,
    'i-i-s-kursa-карта-лояль-l': IISKursaКартаЛояльLForm,
    'i-i-s-kursa-клиент-l': IISKursaКлиентLForm,
    'i-i-s-kursa-товары-спр-l': IISKursaТоварыСпрLForm,
    'i-i-s-kursa-чек-l': IISKursaЧекLForm,
    'i-i-s-kursa-банк-дан-e': IISKursaБанкДанEForm,
    'i-i-s-kursa-заправ-бак-e': IISKursaЗаправБакEForm,
    'i-i-s-kursa-заправка-авто-e': IISKursaЗаправкаАвтоEForm,
    'i-i-s-kursa-карта-лояль-e': IISKursaКартаЛояльEForm,
    'i-i-s-kursa-клиент-e': IISKursaКлиентEForm,
    'i-i-s-kursa-товары-спр-e': IISKursaТоварыСпрEForm,
    'i-i-s-kursa-чек-e': IISKursaЧекEForm
  },

});

export default translations;
