import {Component, Emit, Prop} from 'vue-property-decorator';
import {VueComponent} from '@/shims-vue';
import styles from './AppButton.css?module'

interface Props {
  variant?: 'default' | 'primary';
  onClick?: Function;
}

@Component
export default class AppButton extends VueComponent<Props> {

  @Prop({ default: 'default' })
  variant?: string;

  @Emit('click')
  click() {
    return
  }

  getClasses() {
    const classes = [
      styles.button,
      styles[`button-${this.variant}`]
    ];
    return classes.join(' ')
  }

  render() {
    return (
      <div class={this.getClasses()} onClick={this.click}>
        { this.$slots.default }
      </div>
    )
  }
}
