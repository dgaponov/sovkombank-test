import {Component, Prop, Model, Emit} from 'vue-property-decorator';
import {VueComponent} from '@/shims-vue';
import styles from './AppSwitch.css?module'
import {VNode} from "vue";

interface Props {
  firstOptionTitle: string;
  secondOptionTitle: string;
}

@Component
export default class AppSwitch extends VueComponent<Props> {

  @Prop()
  firstOptionTitle!: string;

  @Prop()
  secondOptionTitle!: string;

  @Model('input', { type: Boolean, default: false })
  value!: boolean;

  @Emit('input')
  toggle() {
    return !this.value
  }

  @Emit('input')
  toggleOff() {
    return false
  }

  @Emit('input')
  toggleOn() {
    return true
  }

  render(): VNode {
    return (
      <div class={styles.switchWrapper}>
        <span
          class={[styles.switchLabel, !this.value ? styles.switchLabelActive : '']}
          onClick={this.toggleOff}
        >
          { this.firstOptionTitle }
        </span>
        <div
          class={[styles.switchButton, this.value ? styles.switchButtonChecked : '']}
          onClick={this.toggle}>
        </div>
        <span
          class={[styles.switchLabel, this.value ? styles.switchLabelActive : '']}
          onClick={this.toggleOn}
        >
          { this.secondOptionTitle }
        </span>
      </div>
    )
  }
}
