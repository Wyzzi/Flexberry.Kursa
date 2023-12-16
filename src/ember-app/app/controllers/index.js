import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.kursa.caption'),
          title: i18n.t('forms.application.sitemap.kursa.title'),
          children: [{
            link: 'i-i-s-kursa-товары-спр-l',
            caption: i18n.t('forms.application.sitemap.kursa.i-i-s-kursa-товары-спр-l.caption'),
            title: i18n.t('forms.application.sitemap.kursa.i-i-s-kursa-товары-спр-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-kursa-клиент-l',
            caption: i18n.t('forms.application.sitemap.kursa.i-i-s-kursa-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.kursa.i-i-s-kursa-клиент-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-kursa-банк-дан-l',
            caption: i18n.t('forms.application.sitemap.kursa.i-i-s-kursa-банк-дан-l.caption'),
            title: i18n.t('forms.application.sitemap.kursa.i-i-s-kursa-банк-дан-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-kursa-чек-l',
            caption: i18n.t('forms.application.sitemap.kursa.i-i-s-kursa-чек-l.caption'),
            title: i18n.t('forms.application.sitemap.kursa.i-i-s-kursa-чек-l.title'),
            children: null
          }, {
            link: 'i-i-s-kursa-заправка-авто-l',
            caption: i18n.t('forms.application.sitemap.kursa.i-i-s-kursa-заправка-авто-l.caption'),
            title: i18n.t('forms.application.sitemap.kursa.i-i-s-kursa-заправка-авто-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-kursa-заправ-бак-l',
            caption: i18n.t('forms.application.sitemap.kursa.i-i-s-kursa-заправ-бак-l.caption'),
            title: i18n.t('forms.application.sitemap.kursa.i-i-s-kursa-заправ-бак-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-kursa-карта-лояль-l',
            caption: i18n.t('forms.application.sitemap.kursa.i-i-s-kursa-карта-лояль-l.caption'),
            title: i18n.t('forms.application.sitemap.kursa.i-i-s-kursa-карта-лояль-l.title'),
            icon: 'calendar',
            children: null
          }]
        }
      ]
    };
  }),
})