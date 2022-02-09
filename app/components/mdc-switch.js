import Component from '@glimmer/component';
import { MDCSwitch } from '@material/switch';
import { action } from '@ember/object';

export default class MdcSwitchComponent extends Component {
  @action
  registerMDCSwitch(element) {
    new MDCSwitch(element);
  }
}
