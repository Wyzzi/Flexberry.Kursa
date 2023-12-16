import { Serializer as ЗаправкаАвтоSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursa-заправка-авто';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗаправкаАвтоSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
