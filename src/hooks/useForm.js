import {computed, reactive} from "vue"
import useField from "@/hooks/useField";

export default function useForm(config = {}) {
  const form = reactive({})


  for (const [key, value] of Object.entries(config)) {
    form[key] = useField(value)
  }

  // Для отслеживаение значений в созданных полях, используем computed
  form.valid = computed(() => {
    return Object.keys(form).filter(key => key !== 'valid').reduce((acc, k) => {
      acc = form[k].valid
      return acc
    }, true)
  })

  return form
}