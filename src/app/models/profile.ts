import { Education } from './items/education'
import { Experiences } from './items/experiences'
import { Languages } from './items/languages'
import { Portfolio } from './items/portfolio'
import { Skills } from './items/skills'

export type Profile = {
  name:string,
  photo:string,
  job:string
  location:string
  phone:string
  email:string
  skills: Skills,
  languages: Languages,
  education: Education,
  portfolio: Portfolio,
  professionalExperience: Experiences
}
