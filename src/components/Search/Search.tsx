import {Component, Watch} from 'vue-property-decorator';
import {VueComponent} from '@/shims-vue';
import AppSelect from '@/components/AppSelect'
import AppInput from '@/components/AppInput'
import AppButton from '@/components/AppButton'
import AppSwitch from '@/components/AppSwitch'
import AppToggle from '@/components/AppToggle'

import styles from './Search.css?module'
import {VNode} from "vue";

@Component
export default class Search extends VueComponent {

  cities: string[] = ['Москва', 'Санкт-Петербург', 'Нью-Йорк'];

  operations: string[] = ['Купить', 'Продать'];

  types: string[] = ['Офис', 'Квартира', 'Дом'];

  searchByName = false;

  addCostEnabled = false;

  addLengthEnabled = false;

  @Watch('searchByName')
  onSearchBuNameChanged(val: boolean) {
    if (val) {
      this.addLengthEnabled = false
      this.addLengthEnabled = false
    }
  }

  @Watch('addCostEnabled')
  onCostEnabled(val: boolean) {
    if (val)
      this.addLengthEnabled = false
  }

  @Watch('addLengthEnabled')
  onLengthEnabled(val: boolean) {
    if (val)
      this.addCostEnabled = false
  }


  renderTopMain(): VNode {
    if (this.searchByName) {
      return (
        <div class={styles.searchTopMain}>
          <AppInput
            class={styles.searchInput}
            placeholder={'Введите название объекта (бизнес-центра, торгового центра, новостройки, логопарка)'}
          />
          <AppButton
            class={styles.searchButton}
            variant={'primary'}>
            Найти
          </AppButton>
        </div>
      )
    }

    return (
      <div class={styles.searchTopMain}>
        <AppSelect
          class={styles.searchSelect}
          options={this.cities}
        />
        <AppSelect
          class={styles.searchSelect}
          options={this.operations}
        />
        <AppSelect
          class={styles.searchSelect}
          options={this.types}
        />
        <AppButton
          class={styles.searchButton}
          variant={'primary'}>
          Найти
        </AppButton>
      </div>
    )
  }

  renderTopSettings(): VNode {
    if (this.addCostEnabled) {
      return (
        <div class={styles.searchTopSettings}>
          <div class={styles.costSettings}>
            <AppInput
              class={styles.settingsInput}
              placeholder={'От'}
            />
            <AppInput
              class={styles.settingsInput}
              placeholder={'До'}
            />
            <AppSelect
              class={styles.settingsSelect}
              options={['₽/месяц', '₽/день']}
            />
            <AppButton
              class={styles.addLengthButton}
              onClick={() => this.addLengthEnabled = true}
            >
              Добавить метраж
            </AppButton>
          </div>
        </div>
      )
    }
    return (
      <div class={styles.searchTopSettings}>
        <div class={styles.lengthSettings}>
          <AppButton
            class={styles.addCostButton}
            onClick={() => this.addCostEnabled = true}
          >
            Добавить цену
          </AppButton>
          <AppInput
            class={styles.settingsInput}
            placeholder={'От'}
          />
          <AppInput
            class={styles.settingsInput}
            placeholder={'До'}
          />
          <div class={styles.inputAppend}>
            м<sup>2</sup>
          </div>
        </div>
      </div>
    )
  }

  render(): VNode {
    return (
      <div class={styles.search}>
        <div class={styles.searchTop}>
          { this.renderTopMain() }
          { (this.addCostEnabled || this.addLengthEnabled) && this.renderTopSettings() }
        </div>
        <div class={styles.searchBottom}>
          <AppSwitch
            firstOptionTitle={'Основной поиск'}
            secondOptionTitle={'Искать по названию'}
            v-model={this.searchByName}
          />
          <div class={styles.toggles} v-show={!this.searchByName}>
            <AppToggle
              class={styles.toggleFirst}
              title={'Цена'}
              v-model={this.addCostEnabled}
            />
            <AppToggle
              title={'Метраж'}
              v-model={this.addLengthEnabled}
            />
          </div>
        </div>
      </div>
    )
  }
}
