import { Context } from '@nuxt/types';
import { NuxtAxiosInstance } from '@nuxtjs/axios';

declare global {

  namespace NodeJS {
    interface Global {
      $axios: NuxtAxiosInstance;
    }
  }
  interface Window {
    onNuxtReady: any;
    location: Location;
    wx: any;
  }


  interface NuxtContext extends Context {
  }

  interface JOB_DETAIL {
    category_code: number;
    job_code: number;
    category_name: string
    fix_salary: number
    grade_code: number
    grade_name: string
    city_code: number
    city_name: string
    increase: number
    industry_code: number
    industry_name: string
    job_name: string
    tags: {
      academic_threshold: string
      recruit_time: string
      specialized_domain: string
      tag_is_hot_job: boolean
      tag_recruit_time_estimate: string
      work_years: string
    }
    tcc_salary: number
  }

}
