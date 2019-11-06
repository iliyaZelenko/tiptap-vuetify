## [2.6.1](https://github.com/iliyaZelenko/tiptap-vuetify/compare/v2.6.0...v2.6.1) (2019-11-06)


### Bug Fixes

* **i18n:** polish translations (Image, Link) ([332cf5d](https://github.com/iliyaZelenko/tiptap-vuetify/commit/332cf5d681066429e77c6389024124cb5721c5bb)), closes [#93](https://github.com/iliyaZelenko/tiptap-vuetify/issues/93)

# [2.6.0](https://github.com/iliyaZelenko/tiptap-vuetify/compare/v2.5.0...v2.6.0) (2019-11-03)


### Bug Fixes

* **props:** fix warning Invalid default value for prop "cardProps" ([f15d554](https://github.com/iliyaZelenko/tiptap-vuetify/commit/f15d5540c3ff7c21864a7ffde7f0594a74a2b77a)), closes [#89](https://github.com/iliyaZelenko/tiptap-vuetify/issues/89)


### Features

* **images:** image extensions ([e464b2b](https://github.com/iliyaZelenko/tiptap-vuetify/commit/e464b2b5f9d24d989107e93a69e22f76fb02c29a)), closes [#16](https://github.com/iliyaZelenko/tiptap-vuetify/issues/16)

# [2.5.0](https://github.com/iliyaZelenko/tiptap-vuetify/compare/v2.4.0...v2.5.0) (2019-11-02)


### Features

* **props:** card-props ([be1fc06](https://github.com/iliyaZelenko/tiptap-vuetify/commit/be1fc067db47df49933e17a44bc4338388deef49)), closes [#89](https://github.com/iliyaZelenko/tiptap-vuetify/issues/89)

# [2.4.0](https://github.com/iliyaZelenko/tiptap-vuetify/compare/v2.3.1...v2.4.0) (2019-10-23)

### Improvement

* **i18n:** Added Hebrew support (https://github.com/iliyaZelenko/tiptap-vuetify/pull/79)

## [2.3.1](https://github.com/iliyaZelenko/tiptap-vuetify/compare/v2.3.0...v2.3.1) (2019-10-19)


### Bug Fixes

* **imports:** fix imports (in previous commit) ([4a91166](https://github.com/iliyaZelenko/tiptap-vuetify/commit/4a91166))


### Reverts

* **imports:** vuetify's components imports ([24c10ef](https://github.com/iliyaZelenko/tiptap-vuetify/commit/24c10ef))

# [2.3.0](https://github.com/iliyaZelenko/tiptap-vuetify/compare/v2.2.0...v2.3.0) (2019-10-19)


### Features

* **i18n:** turkish lang ([75152fc](https://github.com/iliyaZelenko/tiptap-vuetify/commit/75152fc))
* **icons:** mdiSvg iconfont support ([20b3976](https://github.com/iliyaZelenko/tiptap-vuetify/commit/20b3976)), closes [#62](https://github.com/iliyaZelenko/tiptap-vuetify/issues/62)

# [2.2.0](https://github.com/iliyaZelenko/tiptap-vuetify/compare/v2.1.0...v2.2.0) (2019-10-09)


### Features

* **i18n:** Brazilian portuguese localization ([429d970](https://github.com/iliyaZelenko/tiptap-vuetify/commit/429d970))
* **i18n:** ua lang ([d002792](https://github.com/iliyaZelenko/tiptap-vuetify/commit/d002792))

# [2.1.0](https://github.com/iliyaZelenko/tiptap-vuetify/compare/v2.0.2...v2.1.0) (2019-10-07)


### Bug Fixes

* **toolbar:** correct wrap for toolbar elements and increase spacing for them ([44a521b](https://github.com/iliyaZelenko/tiptap-vuetify/commit/44a521b))


### Features

* **plugin:** auto install (if user use via CDN) ([f0786c6](https://github.com/iliyaZelenko/tiptap-vuetify/commit/f0786c6))

## [2.0.2](https://github.com/iliyaZelenko/tiptap-vuetify/compare/v2.0.1...v2.0.2) (2019-10-06)


### Bug Fixes

* **history:** fix error if no options for the extension ([af5e3be](https://github.com/iliyaZelenko/tiptap-vuetify/commit/af5e3be))

## [2.0.1](https://github.com/iliyaZelenko/tiptap-vuetify/compare/v2.0.0...v2.0.1) (2019-10-06)


### Bug Fixes

* **build:** fix rollup dependencies and config (on prev commit) ([db5c15c](https://github.com/iliyaZelenko/tiptap-vuetify/commit/db5c15c))

# [2.0.0](https://github.com/iliyaZelenko/tiptap-vuetify/compare/v1.7.0...v2.0.0) (2019-10-06)


### Features

* architecture changes ([14b6604](https://github.com/iliyaZelenko/tiptap-vuetify/commit/14b6604))
* rewrite plugin, dependency update, small refactor ([f0a5d06](https://github.com/iliyaZelenko/tiptap-vuetify/commit/f0a5d06))
* **eslint:** rollback versions for ESLint's tools until they solve the problems with the Vue ([e0a29ef](https://github.com/iliyaZelenko/tiptap-vuetify/commit/e0a29ef))
* **extensions, i18n, icons:** rewrite extensions for a new look, news i18n for links, fix icons ([42cdc13](https://github.com/iliyaZelenko/tiptap-vuetify/commit/42cdc13))
* **vuetify 2:** rewrote the components for the Vuetify 2. Also other minor changes ([7ac50f3](https://github.com/iliyaZelenko/tiptap-vuetify/commit/7ac50f3)), closes [#33](https://github.com/iliyaZelenko/tiptap-vuetify/issues/33) [#29](https://github.com/iliyaZelenko/tiptap-vuetify/issues/29) [#43](https://github.com/iliyaZelenko/tiptap-vuetify/issues/43) [#21](https://github.com/iliyaZelenko/tiptap-vuetify/issues/21) [#18](https://github.com/iliyaZelenko/tiptap-vuetify/issues/18)


### BREAKING CHANGES

* Vuetify version, accces to vuetify via required property in options
* extensions are now used differently

# [1.7.0](https://github.com/iliyaZelenko/tiptap-vuetify/compare/v1.6.0...v1.7.0) (2019-08-28)


### Features

* **i18n:** french translation ([06dd3ea](https://github.com/iliyaZelenko/tiptap-vuetify/commit/06dd3ea)), closes [#39](https://github.com/iliyaZelenko/tiptap-vuetify/issues/39)

# [1.6.0](https://github.com/iliyaZelenko/tiptap-vuetify/compare/v1.5.0...v1.6.0) (2019-08-14)


### Features

* **i18n:** Polish language ([b63c731](https://github.com/iliyaZelenko/tiptap-vuetify/commit/b63c731))

# [1.5.0](https://github.com/iliyaZelenko/tiptap-vuetify/compare/v1.4.1...v1.5.0) (2019-07-23)


### Features

* **i18n:** Spanish language ([4e42dff](https://github.com/iliyaZelenko/tiptap-vuetify/commit/4e42dff))

# [1.4.1](https://github.com/iliyaZelenko/tiptap-vuetify/compare/v1.3.5...v1.4.1) (2019-06-01)


### Features

* **editor:** added placeholder ([d42ab46](https://github.com/iliyaZelenko/tiptap-vuetify/commit/d42ab46))

## [1.3.5](https://github.com/iliyaZelenko/tiptap-vuetify/compare/v1.3.4...v1.3.5) (2019-04-07)


### Bug Fixes

* types + eslint ([d44ef2c](https://github.com/iliyaZelenko/tiptap-vuetify/commit/d44ef2c))
