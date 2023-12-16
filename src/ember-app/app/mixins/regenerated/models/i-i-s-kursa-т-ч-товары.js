import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  товарыСпр: DS.belongsTo('i-i-s-kursa-товары-спр', { inverse: null, async: false }),
  чек: DS.belongsTo('i-i-s-kursa-чек', { inverse: 'тЧТовары', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-kursa-т-ч-товары.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  товарыСпр: {
    descriptionKey: 'models.i-i-s-kursa-т-ч-товары.validations.товарыСпр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  чек: {
    descriptionKey: 'models.i-i-s-kursa-т-ч-товары.validations.чек.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧТоварыE', 'i-i-s-kursa-т-ч-товары', {
    количество: attr('Количество', { index: 0 }),
    товарыСпр: belongsTo('i-i-s-kursa-товары-спр', 'ДА', {
      наим: attr('ДА', { index: 1 }),
      цена: attr('ДА', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
