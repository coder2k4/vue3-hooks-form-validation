import {reactive} from "vue"

export default function useForm(config = {}) {
  const form = reactive({})


  for (const [key, value] of Object.entries(config))
    console.log(key, value)

  return form
}