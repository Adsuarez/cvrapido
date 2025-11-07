import { expect, test, describe } from 'vitest'
import {parsePdf} from "@/files/pdf-parse.ts"
import { ERROR_MESSAGE } from "@/files/data-processing/errors.ts";

describe("Reading linkedin resume", ()=>{
  test("with Mobile number and email should return mobile and email strings with length greater than cero", async ()=>{
    const {data, error} = await parsePdf({url: "./public/example2.pdf"})
    if(!error){
      const mobileLength = data?.contactItems?.mobile?.length
      const emailLength =  data?.contactItems?.email?.length
      expect(mobileLength).toBeGreaterThan(0)
      expect(emailLength).toBeGreaterThan(0)
    }
  });
  test("without Mobile number should return a mobile strings with length equals to cero", async ()=>{
    const {data, error} = await parsePdf({url: "./public/example.pdf"})
    if(!error){
      const mobileLength = data?.contactItems?.mobile?.length
      expect(mobileLength).toBe(0);
    }
  })
})
describe("Reading a pdf non compatible with LinkedIn resume", ()=>{
  test("Should return an error string", async ()=>{
    const {data, error} = await parsePdf({url: "./public/example-fail1.pdf"})
    
      expect(error).toMatch(ERROR_MESSAGE.NOT_IS_LINKEDIN);
    
  })
})
