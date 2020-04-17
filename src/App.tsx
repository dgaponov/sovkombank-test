import { Component, Vue } from 'vue-property-decorator';
import Search from '@/components/Search'

import './App.css'

@Component
export default class App extends Vue {
  render() {
    return (
      <div id="app">
        <Search />
      </div>
    )
  }
}
