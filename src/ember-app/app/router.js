import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kursa-банк-дан-l');
  this.route('i-i-s-kursa-банк-дан-e',
  { path: 'i-i-s-kursa-банк-дан-e/:id' });
  this.route('i-i-s-kursa-банк-дан-e.new',
  { path: 'i-i-s-kursa-банк-дан-e/new' });
  this.route('i-i-s-kursa-заправ-бак-l');
  this.route('i-i-s-kursa-заправ-бак-e',
  { path: 'i-i-s-kursa-заправ-бак-e/:id' });
  this.route('i-i-s-kursa-заправ-бак-e.new',
  { path: 'i-i-s-kursa-заправ-бак-e/new' });
  this.route('i-i-s-kursa-заправка-авто-l');
  this.route('i-i-s-kursa-заправка-авто-e',
  { path: 'i-i-s-kursa-заправка-авто-e/:id' });
  this.route('i-i-s-kursa-заправка-авто-e.new',
  { path: 'i-i-s-kursa-заправка-авто-e/new' });
  this.route('i-i-s-kursa-карта-лояль-l');
  this.route('i-i-s-kursa-карта-лояль-e',
  { path: 'i-i-s-kursa-карта-лояль-e/:id' });
  this.route('i-i-s-kursa-карта-лояль-e.new',
  { path: 'i-i-s-kursa-карта-лояль-e/new' });
  this.route('i-i-s-kursa-клиент-l');
  this.route('i-i-s-kursa-клиент-e',
  { path: 'i-i-s-kursa-клиент-e/:id' });
  this.route('i-i-s-kursa-клиент-e.new',
  { path: 'i-i-s-kursa-клиент-e/new' });
  this.route('i-i-s-kursa-товары-спр-l');
  this.route('i-i-s-kursa-товары-спр-e',
  { path: 'i-i-s-kursa-товары-спр-e/:id' });
  this.route('i-i-s-kursa-товары-спр-e.new',
  { path: 'i-i-s-kursa-товары-спр-e/new' });
  this.route('i-i-s-kursa-чек-l');
  this.route('i-i-s-kursa-чек-e',
  { path: 'i-i-s-kursa-чек-e/:id' });
  this.route('i-i-s-kursa-чек-e.new',
  { path: 'i-i-s-kursa-чек-e/new' });
});

export default Router;
