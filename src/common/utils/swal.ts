import Swal from 'sweetalert2'

const $swal = Swal.mixin({
  showCancelButton: false,
  confirmButtonText: 'ＯＫ',
  cancelButtonText: 'キャンセル',
  allowEscapeKey: false,
  allowOutsideClick: false,
  // didOpen: () => {
  //   const elm: HTMLElement | null = document.activeElement as HTMLElement
  //   if (elm !== null) {
  //     elm.blur()
  //   }
  // },
})
export default $swal
