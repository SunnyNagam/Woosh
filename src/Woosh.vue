<template>
  <div class="bg-black flex items-center justify-center h-screen">
    <v-card class="rounded-lg shadow-lg mx-auto" max-width="80%">
      <v-card-text class="px-5 py-4">
        <v-text-field
          v-model="wooshText"
          label="What's on your mind?"
          required
          outlined
          class="w-full"
          @keydown.enter="sendWoosh"
        ></v-text-field>
        <v-btn color="primary" class="mt-2" @click="sendWoosh">Woosh</v-btn>
      </v-card-text>
    </v-card>

    <v-card
      class="mt-4 rounded-lg shadow-lg mx-auto"
      max-width="700"
      v-if="recentWooshes.length"
    >
      <v-card-title class="bg-blue-500 px-4 py-2">
        Recent Wooshes
        <v-icon
          @click="showRecentWooshes = !showRecentWooshes"
          class="ml-2 cursor-pointer"
          :icon="showRecentWooshes ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        />
      </v-card-title>
      <v-card-text class="px-4 py-2" v-show="showRecentWooshes">
        <div class="space-y-4">
          <div
            v-for="woosh in recentWooshes"
            :key="woosh.id"
            class="bg-gray-200 p-4 rounded"
          >
            {{ woosh.text }}
            <div class="text-xs text-blue">
              {{ woosh.id.toUTCString() }}
            </div>
          </div>
        </div>
      </v-card-text>
    </v-card>

    <v-btn color="primary" class="ml-8 mt-8" to="/explore"
      >Explore Your Wooshes</v-btn
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const wooshText = ref("");
const recentWooshes: any = ref([]);
const showRecentWooshes = ref(true);

const sendWoosh = () => {
  if (!wooshText.value) return;
  const newWoosh = {
    id: new Date(),
    text: wooshText.value,
  };
  recentWooshes.value.unshift(newWoosh);
  wooshText.value = "";
};
</script>
