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
      количество: attr('Количество', { index: 0 }),
      товарыСпр: belongsTo('i-i-s-kursa-товары-спр', 'ДА', {
        наим: attr('ДА', { index: 1 }),
        цена: attr('ДА', { index: 2 })
      }, { index: -1, hidden: true })
    })
  });

  modelClass.defineProjection('ЧекL', 'i-i-s-kursa-чек', {
    номер: attr('Номер чека', { index: 0 }),
    сумма: attr('Сумма чека', { index: 1 })
  });
};
