<template>
  <div class="container">
    <form class="card" @submit.prevent="submit">

      <h1>Авторизация</h1>

      <pre>{{ form }}</pre>

      <div class="form-control" :class="{'invalid' : !form.email.valid}">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="form.email.value" @blur="form.email.blur()">
        <small v-if="form.email.touched && form.email.errors.required">Пожалуйста заполните поле</small>
        <small v-else-if="form.email.touched && form.email.errors.email">Некорректный e-mail</small>
      </div>

      <div class="form-control" :class="{'invalid' : !form.password.valid}">
        <label for="password">Пароль</label>
        <input type="password" id="password" v-model="form.password.value" @blur="form.password.blur()">
        <small v-if="form.password.touched && form.password.errors.required">Пожалуйста заполните поле</small>
        <small v-if="form.password.touched && form.password.errors.minLength">Минимальная длинна 6 символов. Вы ввели: {{form.password.value.length}}</small>
      </div>

      <button type="submit" class="btn primary" :disabled="!form.valid">Войти</button>

    </form>
  </div>
</template>

<script>


import useForm from "@/hooks/useForm";

const required = val => !!val
const email = val => val.includes('@') && val.includes('.')
const minLength = minVal => val => val.length >= minVal

export default {
  name: 'App',

  setup() {
    const form = useForm({
      email: {
        value: '',
        validators: {
          required,
          email,
        }
      },
      password: {
        value: '',
        validators: {
          required,
          minLength: minLength(6)
        }
      }
    })

    console.log(form.password)

    function submit() {
    }

    return {form, submit}


  }

}
</script>

