<script setup lang="ts">
// ──────────────────────────────────────────────────
//  MARK: ■■■ Imports ■■■
//  #region Imports
// ──────────────────────────────────────────────────
import { onMounted, provide, ref, useTemplateRef } from "vue";

import { useMasterStorage } from "@/common/storages/useMasterStorage";

import Header from "../components/Header.vue";
import List from "../components/List.vue";

// #endregion Imports
// -

// ──────────────────────────────────────────────────
//  MARK: ■■■ Setup ■■■
//  #region Setup
// ──────────────────────────────────────────────────
const masterStorage = useMasterStorage();

// #endregion Setup
// -

// ──────────────────────────────────────────────────
//  MARK: ■■■ Refs ■■■
//  #region Refs
// ──────────────────────────────────────────────────

const header = useTemplateRef<typeof Header>("header");
const list = useTemplateRef<typeof List>("list");

// #endregion Refs
// -

// ──────────────────────────────────────────────────
//  MARK: ■■■ Computeds ■■■
//  #region Computeds
// ──────────────────────────────────────────────────
// const staff = masterStorage.staff;

// #endregion Computeds
// -

// ──────────────────────────────────────────────────
//  MARK: ■■■ Actions ■■■
//  #region Actions
// ──────────────────────────────────────────────────

// #endregion Actions
// -

// ──────────────────────────────────────────────────
//  MARK: ■■■ Event Handlers ■■■
//  #region Event Handlers
// ──────────────────────────────────────────────────

// #endregion Event Handlers
// -

// ──────────────────────────────────────────────────
//  MARK: ■■■ Watchers & Lifecycles ■■■
//  #region Watchers & Lifecycles
// ──────────────────────────────────────────────────
onMounted(() => {
  masterStorage.getStaff();
});

// #endregion Watchers & Lifecycles
// -
</script>

<!-- ────────────────────────────────────────────────── -->
<!-- MARK: ■■■ HTML ■■■ -->
<!-- #region HTML -->
<!-- ────────────────────────────────────────────────── -->
<template>
  <Header ref="header" />
  <List ref="list" />
</template>

<!-- #endregion HTML -->
<!-- - -->

<!-- ────────────────────────────────────────────────── -->
<!-- MARK: ■■■ SCSS ■■■ -->
<!-- #region SCSS -->
<!-- ────────────────────────────────────────────────── -->
<style lang="scss" scoped></style>
<!-- #endregion SCSS -->
<!-- - -->
