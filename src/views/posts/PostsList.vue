<template>
  <Card>
    <template #content>
      <DataTable :value="posts" datakey="id" class="p-datatable-sm">
        <Column field="title" header="Title"></Column>
        <Column field="body" header="Body"></Column>
      </DataTable>
    </template>
  </Card>
</template>

<script>
export default {
  props: {
    posts: Array,
  },
};
</script>
