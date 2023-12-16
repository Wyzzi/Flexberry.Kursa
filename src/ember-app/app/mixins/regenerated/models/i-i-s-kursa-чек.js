import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  сумма: DS.attr('decimal'),
  заправкаАвто: DS.belongsTo('i-i-s-kursa-заправка-авто', { inverse: null, async: false }),
  клиент: DS.belongsTo('i-i-s-kursa-клиент', { inverse: null, async: false }),
  тЧТовары: DS.hasMany('i-i-s-kursa-т-ч-товары', { inverse: 'чек', async: false })
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-kursa-чек.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-kursa-чек.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  заправкаАвто: {
    descriptionKey: 'models.i-i-s-kursa-чек.validations.заправкаАвто.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-kursa-чек.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧТовары: {
    descriptionKey: 'models.i-i-s-kursa-чек.validations.тЧТовары.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЧекE', 'i-i-s-kursa-чек', {
    номер: attr('Номер чека', { index: 0 }),
    сумма: attr('Сумма чека', { index: 1 }),
    тЧТовары: hasMany('i-i-s-kursa-т-ч-товары', 'Товары', {
      товарыСпр: belongsTo('i-i-s-kursa-товары-спр', 'Товар', {
        наим: attr('Товар', { index: 0 }),
        цена: attr('Цена', { index: 1 })
      }, { index: 3 }),
      количество: attr('Количество', { index: 2 })
    })
  });

  modelClass.defineProjection('ЧекL', 'i-i-s-kursa-чек', {
    номер: attr('Номер чека', { index: 0 }),
    сумма: attr('Сумма чека', { index: 1 })
  });
};
