<template>
  <Card>
    <template #content>
      <DataTable
        :value="users"
        @rowSelect="onRowSelect"
        selectionMode="single"
        dataKey="id"
        class="p-datatable-sm"
        responsiveLayout="scroll"
      >
        <Column field="id" header="Id"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="username" header="User Name"></Column>
        <Column field="email" header="Email"></Column>
        <Column field="website" header="Website"></Column>

        <Column :exportable="false">
          <template #body="slotProps">
            <Button
              icon="pi pi-trash"
              class="p-button-rounded p-button-text"
              @click="confirmDeleteUser(slotProps.data)"
            />
          </template>
        </Column>
      </DataTable>
    </template>
  </Card>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    users: Array,
  },
  setup(_, context) {
    function onRowSelect(event) {
      context.emit("select", { ...event.data });
    }

    function confirmDeleteUser(selectedUserToDelete) {
      context.emit("delete", selectedUserToDelete);
    }

    return { onRowSelect, confirmDeleteUser };
  },
});
</script>
