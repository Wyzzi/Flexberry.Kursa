import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursa-клиент', 'Unit | Serializer | i-i-s-kursa-клиент', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kursa-клиент',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
