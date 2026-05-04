import { Category, Question } from "../types";

export const vueQuestions: Question[] = [
  {
    id: 1,
    question: "What is Vue.js?",
    answer:
      "Vue.js is a progressive JavaScript framework used for building user interfaces and single-page applications.",
    category: "Vue Basics",
    difficulty: "Easy",
  },
  {
    id: 2,
    question: "Explain Vue lifecycle hooks.",
    answer:
      "Vue lifecycle hooks are methods that get called at different stages of a component's lifecycle such as beforeCreate, created, mounted, updated, and unmounted.",
    category: "Lifecycle",
    difficulty: "Medium",
    codeExample: `
beforeCreate → created → beforeMount → mounted → beforeUpdate → updated → beforeUnmount → unmounted
`,
  },
  {
    id: 3,
    question: "What are computed properties in Vue?",
    answer:
      "Computed properties are used to derive values from reactive data. They are cached and only recomputed when dependencies change.",
    category: "Reactivity",
    difficulty: "Easy",
    codeExample: `
computed: {
  fullName() {
    return this.firstName + " " + this.lastName;
  }
}
`,
  },
  {
    id: 4,
    question: "What are watchers in Vue?",
    answer:
      "Watchers are used to perform side effects or asynchronous operations when reactive data changes.",
    category: "Reactivity",
    difficulty: "Medium",
  },
  {
    id: 5,
    question: "Difference between v-if and v-show?",
    answer:
      "v-if adds/removes elements from the DOM, while v-show toggles visibility using CSS display.",
    category: "Directives",
    difficulty: "Easy",
  },
  {
    id: 6,
    question: "How does v-model work?",
    answer:
      "v-model provides two-way data binding by combining value binding and input event handling.",
    category: "Directives",
    difficulty: "Easy",
  },
  {
    id: 7,
    question: "List common Vue directives.",
    answer:
      "v-bind, v-on, v-for, v-if, v-show, and v-model are commonly used Vue directives.",
    category: "Directives",
    difficulty: "Easy",
  },
  {
    id: 8,
    question: "What are components in Vue?",
    answer:
      "Components are reusable UI building blocks with their own template, script, and styles.",
    category: "Components",
    difficulty: "Easy",
  },
  {
    id: 9,
    question: "How do components communicate in Vue?",
    answer:
      "Parent to child via props, child to parent via events ($emit), and shared state via Vuex or Pinia.",
    category: "Components",
    difficulty: "Medium",
  },
  {
    id: 10,
    question: "What are scoped slots?",
    answer:
      "Scoped slots allow a parent component to access data from the child component inside the slot.",
    category: "Components",
    difficulty: "Medium",
  },
  {
    id: 11,
    question: "How does Vue reactivity work?",
    answer:
      "Vue 3 uses JavaScript Proxies to track changes and automatically update the UI.",
    category: "Reactivity",
    difficulty: "Medium",
  },
  {
    id: 12,
    question: "What is Vuex?",
    answer:
      "Vuex is a state management library used to manage global/shared state across components.",
    category: "State Management",
    difficulty: "Medium",
  },
  {
    id: 13,
    question: "Explain Vuex architecture.",
    answer:
      "Vuex consists of State, Getters, Mutations, and Actions. Data flows in a predictable unidirectional way.",
    category: "State Management",
    difficulty: "Hard",
    codeExample: `
Component → Action → Mutation → State → UI Update
`,
  },
];

export const categories: Category[] = [
  { id: "all", name: "All Questions", icon: "⚛️", count: vueQuestions.length },
  { id: "basics", name: "Vue Basics", icon: "🟢", count: 1 },
  { id: "lifecycle", name: "Lifecycle", icon: "🔄", count: 1 },
  { id: "reactivity", name: "Reactivity", icon: "⚡", count: 3 },
  { id: "directives", name: "Directives", icon: "📌", count: 3 },
  { id: "components", name: "Components", icon: "🧩", count: 3 },
  { id: "state", name: "State Management", icon: "🗄️", count: 2 },
];
