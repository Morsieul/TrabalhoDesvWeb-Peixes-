<script setup lang="ts">
import { defineComponent } from 'vue';

export defineComponent({
  data() {
    return {
      imageUrl: '' as string | null,
    };
  },
  async mounted() {
    // Replace this with your actual backend request
    const response = await fetch('http://localhost:1337/admin/content-manager/collectionType/api::picture.picture/2');
    const data = await response.json();

    this.imageUrl = data.imageUrl;
  },
});

</script>