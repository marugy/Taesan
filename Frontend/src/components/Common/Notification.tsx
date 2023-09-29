import Swal from 'sweetalert2';

export const Notification = Swal.mixin({
  toast: true,
  position: 'top',
  showConfirmButton: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});
