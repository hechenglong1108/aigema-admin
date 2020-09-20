<template>
  <div>
    <Dashboard #mainView>
      <router-view />
    </Dashboard>
  </div>
</template>

<script>
import Dashboard from '@/components/dashboard'
export default {
  name: 'app',
  components: {
    Dashboard
  }
}
</script>