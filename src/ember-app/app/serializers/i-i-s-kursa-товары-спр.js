import { Serializer as ТоварыСпрSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursa-товары-спр';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТоварыСпрSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
