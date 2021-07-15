<template>
  <Card>
    <template #title v-if="editingUser.id"
      >User ID: {{ editingUser.id }}
    </template>
    <template #content>
      <form
        v-if="selectedUser"
        class="p-fluid p-formgrid p-grid"
        @submit.prevent="save(!v$.$invalid)"
        @reset="cancel"
      >
        <div class="p-field p-col-12">
          <label
            for="name"
            :class="{ 'p-error': v$.name.$invalid && submitted }"
            >Name*</label
          >
          <InputText
            id="name"
            type="text"
            v-model="v$.name.$model"
            :class="{ 'p-invalid': v$.name.$invalid && submitted }"
          />
          <small
            v-if="(v$.name.$invalid && submitted) || v$.name.$pending.$response"
            class="p-error"
            >{{ v$.name.required.$message.replace("Value", "Name") }}</small
          >
        </div>
        <div class="p-field p-col-12">
          <label for="username">User Name*</label>
          <InputText
            id="username"
            type="text"
            v-model="v$.username.$model"
            :class="{ 'p-invalid': v$.username.$invalid && submitted }"
          />
          <small
            v-if="
              (v$.username.$invalid && submitted) ||
              v$.username.$pending.$response
            "
            class="p-error"
            >{{
              v$.username.required.$message.replace("Value", "Username")
            }}</small
          >
        </div>
        <div class="p-field p-col-12">
          <label for="email">Email*</label>
          <InputText
            id="email"
            type="text"
            v-model="v$.email.$model"
            :class="{ 'p-invalid': v$.email.$invalid && submitted }"
          />
          <span v-if="v$.email.$error && submitted">
            <span
              id="email-error"
              v-for="(error, index) of v$.email.$errors"
              :key="index"
            >
              <small class="p-error">{{ error.$message }}</small>
            </span>
          </span>
          <small
            v-else-if="
              (v$.email.$invalid && submitted) || v$.email.$pending.$response
            "
            class="p-error"
            >{{ v$.email.required.$message.replace("Value", "Email") }}</small
          >
        </div>
        <div class="p-field p-col-12">
          <label for="website">Website*</label>
          <InputText
            id="website"
            type="text"
            v-model="v$.website.$model"
            :class="{ 'p-invalid': v$.website.$invalid && submitted }"
          />
          <small
            v-if="
              (v$.website.$invalid && submitted) ||
              v$.website.$pending.$response
            "
            class="p-error"
            >{{
              v$.website.required.$message.replace("Value", "Website")
            }}</small
          >
        </div>
        <div class="p-field p-col-6">
          <Button type="submit" label="Save User" />
        </div>
        <div class="p-field p-col-6">
          <Button type="reset" label="Cancel" />
        </div>
      </form>
      <div v-else>No hay usuario seleccionado</div>
    </template>
  </Card>
</template>

<script>
import { defineComponent, ref, toRefs, watch } from "vue";
import { email, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

export default defineComponent({
  props: {
    selectedUser: Object,
  },
  setup(props, context) {
    const { selectedUser } = toRefs(props);
    const submitted = ref(false);
    const editingUser = ref({ ...selectedUser.value });

    const rules = {
      name: { required },
      email: { required, email },
      username: { required },
      website: { required },
    };

    const v$ = useVuelidate(rules, editingUser);

    watch(selectedUser, AddOrEditUser);

    function AddOrEditUser(selectedUser) {
      if (selectedUser && selectedUser.id) {
        editingUser.value = { ...selectedUser };
      } else {
        editingUser.value = {};
      }
    }

    function cancel() {
      submitted.value = false;
      context.emit("cancel");
    }

    function save(isFormValid) {
      submitted.value = true;
      if (!isFormValid) return;
      context.emit("save", editingUser.value);
      cancel();
    }

    return { editingUser, cancel, save, v$, submitted };
  },
});
</script>
