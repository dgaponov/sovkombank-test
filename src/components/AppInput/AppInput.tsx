import {Component, Prop} from 'vue-property-decorator';
import {VueComponent} from '@/shims-vue';
import {VNode} from "vue";

import styles from './AppInput.css?module'

interface Props {
  placeholder?: string;
}

@Component
export default class AppInput extends VueComponent<Props> {

  @Prop({default: ''})
  placeholder!: string;

  render(): VNode {
    return (
      <div class={styles.inputWrapper}>
        <input
          class={styles.input}
          placeholder={this.placeholder}
        />
      </div>
    )
  }
}
