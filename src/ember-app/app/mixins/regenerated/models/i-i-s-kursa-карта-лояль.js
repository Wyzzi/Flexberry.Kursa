import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  ном: DS.attr('number'),
  процСкид: DS.attr('decimal'),
  суммПокуп: DS.attr('decimal')
});

export let ValidationRules = {
  ном: {
    descriptionKey: 'models.i-i-s-kursa-карта-лояль.validations.ном.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  процСкид: {
    descriptionKey: 'models.i-i-s-kursa-карта-лояль.validations.процСкид.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  суммПокуп: {
    descriptionKey: 'models.i-i-s-kursa-карта-лояль.validations.суммПокуп.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КартаЛояльE', 'i-i-s-kursa-карта-лояль', {
    ном: attr('Номер', { index: 0 }),
    процСкид: attr('Процент скидки', { index: 1 }),
    суммПокуп: attr('Сумма покупок', { index: 2 })
  });

  modelClass.defineProjection('КартаЛояльL', 'i-i-s-kursa-карта-лояль', {
    ном: attr('Номер', { index: 0 }),
    суммПокуп: attr('Сумма покупок', { index: 1 }),
    процСкид: attr('Процент скидки', { index: 2 })
  });
};
