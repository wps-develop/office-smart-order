<script setup lang="ts">
import { QPopupProxy, QSpinnerOrbit, QSpinnerRadio, useQuasar } from "quasar";

import { useMainState } from "../states";
import { IsValidDate } from "@wps/common-lib";

const mainState = useMainState();

const onChangeEstimateDateFrom = () => {};
const onChangeEstimateDateTo = () => {};
const onChangeStatus = () => {};
const onClickSearch = (mode: string) => {};
const onClickResetCondition = () => {};
</script>

<template>
  <article>
    <section>
      <div class="flex items-center">
        <q-input
          v-model="mainState.conditions.estimateDateFrom"
          class="date-value"
          mask="date"
          :rules="[(val) => IsValidDate(val, 'YYYY/MM/DD')]"
          lazy-rules
          label="見積作成日"
          stack-label
          clearable
          hide-bottom-space
          maxlength="10"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                ref="popupEstimateDateFrom"
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date
                  v-model="mainState.conditions.estimateDateFrom"
                  today-btn
                  @update:model-value="onChangeEstimateDateFrom"
                >
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <div class="fs-120 q-px-md text-bold q-pt-md">～</div>
        <q-input
          v-model="mainState.conditions.estimateDateTo"
          class="date-value"
          mask="date"
          :rules="[(val) => IsValidDate(val, 'YYYY/MM/DD')]"
          lazy-rules
          label=""
          stack-label
          clearable
          hide-bottom-space
          maxlength="10"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                ref="popupEstimateDateTo"
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date
                  v-model="mainState.conditions.estimateDateTo"
                  today-btn
                  @update:model-value="onChangeEstimateDateTo"
                >
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <q-input
          v-model="mainState.conditions.estimateNo"
          class="conditions--estimate-no q-ml-lg"
          input-class="upper-case"
          stack-label
          clearable
          label="見積番号"
          @keypress.enter="onClickSearch('estimate_no')"
        />
        <q-input
          v-model="mainState.conditions.customerName"
          class="conditions--customer-name q-ml-lg q-mr-lg"
          input-class="ime-on"
          stack-label
          clearable
          label="顧客名"
          @keypress.enter="onClickSearch('customer_name')"
        />
        <div class="flex items-center">
          <!-- <q-radio
            v-model="mainState.conditions.status"
            v-for="(status, idx) in conditionStatuses"
            :key="`status--${idx}`"
            :val="status.code"
            :label="status.lavel"
            class="q-ml-sm"
            size="1.5rem"
            @update:model-value="onChangeStatus"
          /> -->
          <q-btn
            label="リセット"
            color="blue-grey-4"
            class="q-ml-md fs-90 q-px-sm"
            dense
            @click="onClickResetCondition"
          />
          <q-btn
            label="検索"
            icon="search"
            color="secondary"
            class="q-ml-md q-px-sm"
            dense
            @click="onClickSearch()"
          />
        </div>
      </div>
    </section>
    <section>いちらん</section>
  </article>
</template>

<style scoped lang="scss"></style>
