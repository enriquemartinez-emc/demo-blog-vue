import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import PrimeVue from "primevue/config";

import "primeflex/primeflex.css";
import "primevue/resources/themes/mdc-light-indigo/theme.css"; // theme
import "primevue/resources/primevue.min.css"; // core css
import "primeicons/primeicons.css"; // icons

import Button from "primevue/button";
import Card from "primevue/card";
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import Dialog from "primevue/dialog";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";
import Ripple from "primevue/ripple";
import Textarea from "primevue/textarea";
import Toolbar from "primevue/toolbar";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";

const app = createApp(App);

app.use(router);
app.use(PrimeVue, { ripple: true });
app.use(ToastService);

app.directive("ripple", Ripple);

app.component("Button", Button);
app.component("Dialog", Dialog);
app.component("DataTable", DataTable);
app.component("Dropdown", Dropdown);
app.component("Column", Column);
app.component("Card", Card);
app.component("InputText", InputText);
app.component("Textarea", Textarea);
app.component("Toolbar", Toolbar);
app.component("Toast", Toast);

app.mount("#app");
