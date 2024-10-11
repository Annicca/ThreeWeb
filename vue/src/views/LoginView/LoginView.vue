<script setup lang="ts">
import { useForm } from 'vee-validate'
import { object, string } from 'yup'
import { toTypedSchema } from '@vee-validate/yup'
import LinkToMain from '@/uikit/linkToMain/LinkToMain.vue'
import AuthTitle from '@/uikit/authTitle/AuthTitle.vue'
import InputControl from '@/uikit/inputControl/InputControl.vue'
import UIButton from '@/uikit/button/UIButton.vue'
import styles from './Login.module.scss'

const { defineField, handleSubmit, errors } = useForm({
  validationSchema: toTypedSchema(
    object({
      login: string()
        .required('Поле обязательно')
        .min(5, 'Длина не менее 5 символов')
        .matches(
          /^[A-Za-z0-9]+$/,
          'Логин должен содержать только буквы латинского алфавита и цифры'
        ),
      password: string()
        .required('Поле обязательно')
        .matches(/[A-Za-z]/, 'Пароль должен содержать буквы латинского алфавита')
        .matches(/[0-9]/, 'Пароль должен содержать цифры')
        .matches(/[!@#$%^&*]/, 'Пароль должен содержать хотя бы 1 спецсимвол')
    })
  )
})

const [login, loginProps] = defineField('login')
const [password, passwordProps] = defineField('password')

const onSubmit = handleSubmit((values) => {
  console.log(values)
})
</script>

<template>
  <div :class="styles.container">
    <LinkToMain />
    <form :class="styles.form" @submit.prevent="onSubmit">
      <AuthTitle :title="'Вход'" :linkText="'Ещё не зарегистрировались?'" :path="'/signin'" />
      <InputControl
        type="text"
        :error="errors.login"
        :label="'Логин'"
        placeholder="Логин"
        v-model="login"
        v-bind="loginProps"
      />
      <InputControl
        type="password"
        :error="errors.password"
        :label="'Пароль'"
        placeholder="Пароль"
        v-model="password"
        v-bind="passwordProps"
      />

      <UIButton type="submit" :disabledd="!!errors">
        <template #default>Войти</template>
      </UIButton>
    </form>
  </div>
</template>
