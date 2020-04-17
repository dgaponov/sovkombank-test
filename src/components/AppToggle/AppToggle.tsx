import {Component, Prop, Model, Emit} from 'vue-property-decorator';
import {VueComponent} from '@/shims-vue';
import styles from './AppToggle.css?module'
import {VNode} from "vue";

interface Props {
  title: string;
}

@Component
export default class AppToggle extends VueComponent<Props> {

  @Prop()
  title!: string;

  @Model('input', { type: Boolean, default: false })
  value!: boolean;

  @Emit('input')
  toggle() {
    return !this.value
  }

  render(): VNode {
    return (
      <div class={[styles.wrapper, this.value ? styles.active : '']} onClick={this.toggle}>
        <div class={styles.icon} />
        <span class={styles.title}>{ this.title }</span>
      </div>
    )
  }
}
