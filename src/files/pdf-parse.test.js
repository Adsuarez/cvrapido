import { expect, test, describe } from 'vitest'
import {parsePdf} from "@/files/pdf-parse.ts"

describe("Reading linkedin resume with", ()=>{
  test("Mobile number and email should return mobile and email strings with length greater than cero", async ()=>{
    const {data, error} = await parsePdf({url: "./public/example2.pdf"})
    if(!error){
      const mobileLength = data?.contactItems?.mobile?.length
      const emailLength =  data?.contactItems?.email?.length
      expect(mobileLength).toBeGreaterThan(0)
      expect(emailLength).toBeGreaterThan(0)
    }
  })
})
