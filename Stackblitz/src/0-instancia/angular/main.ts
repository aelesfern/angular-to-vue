import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app.module";
import { loadVue } from "./../vue/main.js";

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  // Stackblitz hack to avoid hot reload problems
  .then(ref => {
    if (window["ngRef"]) {
      window["ngRef"].destroy();
    }
    window["ngRef"] = ref;
    loadVue();
  })
  // Ensure Vue is loaded after Angular
  .then(() => loadVue())
  .catch(err => console.error(err));
