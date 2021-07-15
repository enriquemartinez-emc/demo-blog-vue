import { useToast } from "primevue/usetoast";

export default function useToasts() {
  const toast = useToast();

  function showSuccessToast(title, message) {
    toast.add({
      severity: "success",
      summary: title,
      detail: message,
      life: 3000,
    });
  }

  function showInfoToast(title, message) {
    toast.add({
      severity: "info",
      summary: title,
      detail: message,
      life: 3000,
    });
  }

  function showWarnToast(title, message) {
    toast.add({
      severity: "warn",
      summary: title,
      detail: message,
      life: 3000,
    });
  }

  function showErrorToast(title, message) {
    toast.add({
      severity: "error",
      summary: title,
      detail: message,
      life: 3000,
    });
  }

  return {
    showSuccessToast,
    showInfoToast,
    showWarnToast,
    showErrorToast,
  };
}
