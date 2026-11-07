<script setup lang="ts">
// ──────────────────────────────────────────────────
//  MARK: ■■■ Imports ■■■
//  #region Imports
// ──────────────────────────────────────────────────
import { useMainState } from "@/views/estimate/states";
import { useMasterStorage } from "@/common/storages/useMasterStorage";

// #endregion Imports
// -

// ──────────────────────────────────────────────────
//  MARK: ■■■ Setup ■■■
//  #region Setup
// ──────────────────────────────────────────────────
const mainState = useMainState();
const masterStorage = useMasterStorage();

// #endregion Setup
// -

// ──────────────────────────────────────────────────
//  MARK: ■■■ Refs ■■■
//  #region Refs
// ──────────────────────────────────────────────────
const estimateNo = mainState.estimateNo;

// #endregion Refs
// -

// ──────────────────────────────────────────────────
//  MARK: ■■■ Computeds ■■■
//  #region Computeds
// ──────────────────────────────────────────────────
const staff = masterStorage.staff;

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
const onFetch = async () => {};

const onClickShowMemo = async () => {};

// #endregion Event Handlers
// -

// ──────────────────────────────────────────────────
//  MARK: ■■■ Watchers & Lifecycles ■■■
//  #region Watchers & Lifecycles
// ──────────────────────────────────────────────────

// #endregion Watchers & Lifecycles
// -
</script>

<!-- ────────────────────────────────────────────────── -->
<!-- MARK: ■■ HTML ■■■ -->
<!-- #region HTML -->
<!-- ────────────────────────────────────────────────── -->
<template>
  <header class="flex justify-between">
    <div>
      <q-input
        input-class="upper-case"
        v-model="estimateNo"
        label="見積番号"
        stack-label
        maxlength="9"
        autofocus
        @keypress.enter="onFetch"
        @paste="onFetch"
      />
      <q-btn label="見積読み込み" color="primary" dense @click="onFetch" />
    </div>
    <div class="q-ml-xl flex">
      <div>注文取込時間：</div>
      <div class="q-ml-sm text-bold">10:45～14:59 → 3分ごと</div>
      <div class="q-ml-sm">/</div>
      <div class="q-ml-sm text-bold">15:00～18:06 → 毎分</div>
      <div class="q-ml-sm">/</div>
      <div class="q-ml-sm text-bold text-red">18:07～のご注文分は翌営業日</div>
    </div>
    <div>
      <q-btn color="primary" label="共有メモ" @click="onClickShowMemo" />
    </div>
    <div class="q-ml-auto1" v-if="staff !== null">
      担当：{{ staff.staff_name }}
    </div>
  </header>
</template>

<!-- #endregion HTML -->
<!-- - -->

<!-- ────────────────────────────────────────────────── -->
<!-- MARK: ■■■ SCSS ■■■ -->
<!-- #region SCSS -->
<!-- ────────────────────────────────────────────────── -->
<style scoped lang="scss">
header {
  & > div {
    display: flex;
    align-items: flex-end;
  }
}
</style>

<!-- #endregion SCSS -->
<!-- - -->
