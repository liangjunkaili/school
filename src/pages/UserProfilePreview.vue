<template>
  <div>
    <h1>UserProfilePreview</h1>
    <ul>
      <li
        v-for="todo in todos"
        :key="todo.id"
      >
        {{ todo.text }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return {
      todos:[
        {
          id: 1,
          text: '学习使用 v-for'
        },
        {
          id: 2,
          text: '学习使用 key'
        }
      ]
    }
  }
}
</script>

