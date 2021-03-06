import Ember from 'ember'
const {get, typeOf} = Ember
import computed, {readOnly} from 'ember-computed-decorators'

import AbstractInput from './abstract-input'
import layout from 'ember-frost-bunsen/templates/components/frost-bunsen-input-static'

const PLACEHOLDER = '—'

export default AbstractInput.extend({
  // == Component Properties ===================================================

  classNames: [
    'frost-bunsen-input-static',
    'frost-field'
  ],

  layout,

  // == Computed Properties ====================================================

  @readOnly
  @computed('cellConfig', 'value')
  renderValue (cellConfig, value) {
    if (typeOf(value) === 'boolean') {
      return value ? 'true' : 'false'
    }

    if ([null, undefined, ''].indexOf(value) !== -1) {
      return get(cellConfig, 'placeholder') || PLACEHOLDER
    }

    return value
  }
})
