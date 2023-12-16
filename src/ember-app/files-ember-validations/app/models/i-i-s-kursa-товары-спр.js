import {
  defineNamespace,
  defineProjections,
  Model as ТоварыСпрMixin
} from '../mixins/regenerated/models/i-i-s-kursa-товары-спр';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТоварыСпрMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
