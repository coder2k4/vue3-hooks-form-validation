import {reactive} from "vue"
import useField from "@/hooks/useField";

export default function useForm(config = {}) {
  const form = reactive({})


  for (const [key, value] of Object.entries(config)) {
    form[key] = useField(value)
  }

  return form
}