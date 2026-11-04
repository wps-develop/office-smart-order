export interface Staff {
  id: number;
  staff_code: string;
  staff_name: string;
  initials: string;
  nickname: string;
  team_id: number | null;
  changer_instructor: boolean;
  changer_manager: boolean;
  changer_execution_manager: boolean;
  has_bonus_authority: number;
  has_office_key: boolean;
  regular_employee_number: number | null;
  is_holiday_count_exception: boolean;
  circulate_number: number;
  personal_directory_path: string | null;
  sort_no: number;
  target_of_shift: boolean;
  aom_manager: boolean;
  sales_code?: string | null;
  deleted_at?: string | null;
}
