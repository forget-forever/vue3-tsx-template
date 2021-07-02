import { defineComponent } from 'vue';
import {RouterLink, RouterView} from 'vue-router';
import './style/main.scss'

export default defineComponent({
  name: 'App',
  setup() {
    const aa = 'abc'
    return () => (
      <>
        <div id="nav">
          <RouterLink to="/">{aa}</RouterLink> |
          <RouterLink to="/about">About</RouterLink>
        </div>
        <RouterView />
      </>
    );
  }
});