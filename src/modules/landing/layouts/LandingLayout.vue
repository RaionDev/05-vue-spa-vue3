<template>
  <div class="flex flex-col h-screen">
    <!-- Header -->
    <header class="flex items-center px-4 border-b border-gray-300 h-14 sm:h-16 md:px-6 lg:px-8">
      <div>

      </div>
      <nav class="flex flex-col items-end h-10 ml-auto space-x-4 sm:space-x-6">
        <div class="space-x-4">
          <RouterLink :to="{ name: 'home' }"> Home </RouterLink>
          <RouterLink to="/features"> Features </RouterLink>
          <RouterLink to="/pricing"> Pricing </RouterLink>
          <RouterLink to="/contact"> Contact </RouterLink>
        </div>
        <div class="space-x-4">
          <RouterLink to="/pokemon/1"> Pokemons </RouterLink>
          <RouterLink to="/auth"> Login </RouterLink>
        </div>
      </nav>
    </header>
    <!-- Fin Header -->

    <!-- Main -->
    <main class="flex items-center justify-center flex-1">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>

      <!-- <RouterView /> -->
    </main>
    <!-- Fin Main -->

    <!-- Footer -->
    <footer class="flex items-center px-4 border-t border-gray-300 h-14 sm:h-16 md:px-6 lg:px-8">
      <p class="flex-1 text-sm text-center text-gray-500">
        © {{ new Date().getFullYear() }} Acme Corporation. Derechos reservados
      </p>
    </footer>
    <!-- Fin Footer -->
  </div>
</template>
