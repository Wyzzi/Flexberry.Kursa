import { Serializer as ЗаправБакSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursa-заправ-бак';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗаправБакSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
