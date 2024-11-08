import OpenAI from 'openai';
import {open_api_key} from "./constants";
const openai = new OpenAI({
  apiKey: open_api_key,dangerouslyAllowBrowser:true
});

export default openai;