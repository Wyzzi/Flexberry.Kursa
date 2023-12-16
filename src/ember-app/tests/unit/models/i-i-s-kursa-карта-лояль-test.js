import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursa-карта-лояль', 'Unit | Model | i-i-s-kursa-карта-лояль', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-kursa-банк-дан',
    'model:i-i-s-kursa-заправ-бак',
    'model:i-i-s-kursa-заправка-авто',
    'model:i-i-s-kursa-карта-лояль',
    'model:i-i-s-kursa-клиент',
    'model:i-i-s-kursa-т-ч-товары',
    'model:i-i-s-kursa-товары-спр',
    'model:i-i-s-kursa-чек',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
