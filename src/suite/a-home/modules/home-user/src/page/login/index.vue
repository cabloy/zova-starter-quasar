<template>
  <template></template>
</template>

<script setup lang="ts">
import { useControllerPage } from 'zova';
import { ControllerPageLogin } from './controller.js';
import { RenderPageLogin } from './render.jsx';
useControllerPage(ControllerPageLogin, RenderPageLogin);
</script>
