<template>
  <div class="container">
    <form class="card" @submit.prevent="submit">

      <h1>Авторизация</h1>

      <div class="form-control">
        <label for="email">Email</label>
        <input type="email" id="email">
      </div>

      <div class="form-control">
        <label for="password">Пароль</label>
        <input type="password" id="password">
      </div>

      <button type="submit" class="btn primary">Войти</button>

    </form>
  </div>
</template>

<script>


import useForm from "@/hooks/useForm";

const required = val => !!val
const email = val => val.includes('@')
const minLength = minVal => val => val.length >= minVal

export default {
  name: 'App',

  setup() {
    const form = useForm({

      email: {
        value: 'mail@mail.ru',
        validators: {
          required,
          email
        }
      },

      password: {
        value: 'password',
        validators: {
          required,
          minLength: minLength(6)
        }
      }

    })

    function submit() {

    }

    return {form, submit}


  }

}
</script>

