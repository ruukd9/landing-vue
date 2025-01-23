import { reactive } from 'vue'

export const propic = reactive({ path: null })

export async function getPropicUrl(){
  const url = 'https://unavatar.io/x/ruuk999?json&ttl=24h'
  const defaultUrl = 'fallback.jpg'

  console.log('querying for pic...')

  try{
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 2000)
    const propicData = await fetch(url, {signal: controller.signal}).then((data) => data.json())
    clearTimeout(timeout)
    if(!propicData || propicData.url.match('fallback.png')){
      console.log('propic response error!')
      propic.path = defaultUrl
    }else{
      propic.path = propicData.url
    }
  }catch(error){
    console.log('propic timed out!')
    propic.path = defaultUrl
  }
}