import {reactive, ref, watch} from "vue";

export default function useField(field) {

  const valid = ref(true)
  const value = ref(field.value)
  const errors = reactive({})
  const touched = ref(false)

  // Получаем названия функций валидаторов и запускаем их по чередеи
  const validation = val => {
    valid.value = true
    Object.keys(field.validators).map(name => {
      //console.log(value.value)
      const isValid = field.validators[name](val)
      errors[name] = !isValid

      if (!isValid) {
        valid.value = false
      }
    })

  }

  // Отслеживаем изменение значений в поле field.value, прогоняем валидаторы
  watch(value, newValue => {
    validation(value.value)
  })
  validation(value.value)

  return {valid, value, errors, touched, blur: () => touched.value = true}
}