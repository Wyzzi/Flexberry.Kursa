import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Kursa',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursa',
          title: 'Kursa'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
