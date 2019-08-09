import axios from 'axios'

export default function ({ route }) {
  return console.log(123, {url: route.fullPath})
}