import {Component, Prop} from 'vue-property-decorator';
import {VueComponent} from '@/shims-vue';
import {VNode} from "vue";

import styles from './AppSelect.css?module'

interface Props {
  options?: Array<string>;
}

@Component
export default class AppSelect extends VueComponent<Props> {

  @Prop({default: () => []})
  options!: Array<string>;

  renderItem(item: string): VNode {
    return (
      <option value={item}>{item}</option>
    )
  }

  render(): VNode {
    return (
      <div class={styles.selectWrapper}>
        <select class={styles.select}>
          {this.options.map((item: string) => this.renderItem(item))}
        </select>
      </div>
    )
  }
}
