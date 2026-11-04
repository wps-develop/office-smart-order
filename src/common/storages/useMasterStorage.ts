import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { Staff } from "../types/masterTypes";

export const useMasterStorage = defineStore("masterStorage", () => {
  const _staff = ref<Staff | null>(null);

  const setStaff = (_data: Staff | null) => {
    _staff.value = _data;
  };

  const staff = computed((): Staff | null => {
    return _staff.value;
  });

  const getStaff = (): Staff | null => {
    if (_staff.value !== null) return staff.value;
    const loginedStaff = localStorage.getItem("login_staff");
    if (loginedStaff) {
      const parsedStaff: Staff = JSON.parse(loginedStaff);
      setStaff(parsedStaff);
      return parsedStaff;
    }
    return null;
  };

  return {
    staff,
    getStaff,
  };
});
